import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const blogContentDir = join(root, 'content/blog');
const blogHtmlDir = join(root, 'blog');
const postTemplatePath = join(blogHtmlDir, '_post.template.html');
const blogIndexPath = join(blogHtmlDir, 'index.html');
const SITE_URL = 'https://yusufziyakahya.com';

marked.setOptions({ gfm: true, breaks: false });

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return null;

  const lines = raw.split('\n');
  let closeIdx = -1;

  for (let i = lines.length - 1; i >= 1; i--) {
    if (lines[i] === '---') {
      closeIdx = i;
      break;
    }
  }

  if (closeIdx === -1) {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') {
        closeIdx = i;
        break;
      }
    }
  }

  if (closeIdx === -1) return null;

  const yaml = lines.slice(1, closeIdx).join('\n');
  const data = {};
  let currentLang = null;
  let currentKey = null;
  let bodyLines = [];
  let inBody = false;

  for (const line of yaml.split('\n')) {
    if (inBody) {
      if (/^(tr|en|fr|nl):$/.test(line) || (/^[a-z_]+: /.test(line) && !/^\s/.test(line))) {
        if (currentLang && currentKey) {
          data[currentLang][currentKey] = bodyLines.join('\n').trim();
        }
        inBody = false;
        bodyLines = [];
      } else {
        bodyLines.push(line.startsWith('  ') ? line.slice(2) : line);
        continue;
      }
    }

    const langMatch = line.match(/^(tr|en|fr|nl):$/);
    if (langMatch) {
      currentLang = langMatch[1];
      data[currentLang] = data[currentLang] || {};
      currentKey = null;
      continue;
    }

    const kvMatch = line.match(/^  ([a-zA-Z]+): (.*)$/);
    if (kvMatch && currentLang) {
      if (kvMatch[2] === '|') {
        currentKey = kvMatch[1];
        inBody = true;
        bodyLines = [];
      } else {
        data[currentLang][kvMatch[1]] = kvMatch[2].replace(/^['"]|['"]$/g, '');
      }
      continue;
    }

    const topMatch = line.match(/^([a-z_]+): (.*)$/);
    if (topMatch) {
      const [, key, val] = topMatch;
      if (val === '') continue;
      if (key === 'tags') continue;
      data[key] = val.replace(/^['"]|['"]$/g, '');
    }

    const tagMatch = line.match(/^  - (.+)$/);
    if (tagMatch && !currentLang) {
      data.tags = data.tags || [];
      data.tags.push(tagMatch[1]);
    }
  }

  if (inBody && currentLang && currentKey) {
    data[currentLang][currentKey] = bodyLines.join('\n').trim();
  }

  return data;
}

function extractFoldedScalar(raw, field, indent = 4) {
  const marker = `${' '.repeat(indent)}${field}: >-`;
  const start = raw.indexOf(marker);
  if (start === -1) return '';

  const contentStart = start + marker.length;
  const rest = raw.slice(contentStart);
  const lines = rest.split('\n');
  const bodyLines = [];

  for (const line of lines) {
    if (line && !line.startsWith(' '.repeat(indent + 2)) && line.trim() !== '') {
      if (/^ {0,2}[a-zA-Z_]+:/.test(line)) break;
    }
    if (line.startsWith(' '.repeat(indent + 2))) {
      bodyLines.push(line.slice(indent + 2));
    } else if (line.trim() === '') {
      bodyLines.push('');
    }
  }

  return bodyLines.join('\n').trim();
}

function parseDecapCorruptedFrontmatter(raw) {
  if (!raw.includes('partial:') || !raw.includes('\ndata:')) return null;

  const slugMatch = raw.match(/^  slug: (.+)$/m);
  if (!slugMatch) return null;

  const dateMatch = raw.match(/^  date: (.+)$/m);
  const titleMatch = raw.match(/^    title: "?(.+?)"?\s*$/m);
  const bodyStart = raw.indexOf('    body:');

  const tags = [];
  const tagRe = /^    - (.+)$/gm;
  let tagMatch;
  while ((tagMatch = tagRe.exec(raw)) !== null) {
    if (bodyStart === -1 || tagMatch.index < bodyStart) tags.push(tagMatch[1]);
  }

  const excerpt = extractFoldedScalar(raw, 'excerpt', 4).replace(/\n+/g, ' ').trim();
  const metaBlock = raw.match(/^    metaDescription: "?([\s\S]*?)"?\s*$/m);
  let metaDescription = '';
  if (metaBlock) {
    metaDescription = metaBlock[1].replace(/\n      /g, ' ').trim();
  }

  let body = extractFoldedScalar(raw, 'body', 4);
  if (!body) {
    const blockMatch = raw.match(/^    body: \|\n([\s\S]*?)(?=^  [a-z]|^author:|^---)/m);
    if (blockMatch) {
      body = blockMatch[1]
        .split('\n')
        .map((line) => line.replace(/^      /, ''))
        .join('\n')
        .trim();
    }
  }

  return {
    slug: slugMatch[1].trim(),
    date: dateMatch?.[1]?.trim() || '',
    tags,
    tr: {
      title: titleMatch?.[1] || '',
      excerpt,
      metaDescription,
      body,
    },
  };
}

function slugFromFilename(filename) {
  const base = filename.replace(/\.md$/, '');
  const embedded = base.match(/(?:^|-)slug-([a-z0-9]+(?:-[a-z0-9]+)*)$/);
  if (embedded) return embedded[1];
  if (/^map-partial-/.test(base)) return '';
  return base;
}

function parseEmbeddedFrontmatter(body) {
  if (!body || typeof body !== 'string') return null;
  const match = body.trim().match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;

  const imported = {};
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (kv) {
      imported[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '').trim();
    }
  }

  return { imported, body: match[2].trim() };
}

function normalizeDate(dateStr) {
  if (!dateStr) return '';
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return String(dateStr).slice(0, 10);
  return parsed.toISOString().slice(0, 10);
}

function slugify(title) {
  return String(title)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripLeadingH1(body, title) {
  const lines = body.split('\n');
  if (!/^#\s+/.test(lines[0] || '')) return body.trim();

  const h1 = lines[0].replace(/^#\s+/, '').trim();
  if (!title || h1 === title || h1.toLowerCase() === title.toLowerCase()) {
    lines.shift();
    while (lines.length && lines[0].trim() === '') lines.shift();
  }

  return lines.join('\n').trim();
}

function normalizeImportedBody(meta) {
  if (!meta?.tr?.body) return meta;

  meta.tr = meta.tr || {};
  let body = meta.tr.body;
  const embedded = parseEmbeddedFrontmatter(body);

  if (embedded) {
    const { imported } = embedded;
    const title = imported.title || '';
    const description = imported.description || imported.excerpt || '';

    if (!meta.tr.title && title) meta.tr.title = title;
    if (!meta.tr.metaDescription && description) meta.tr.metaDescription = description;
    if (!meta.tr.excerpt && description) meta.tr.excerpt = description;
    if (!meta.date && imported.date) meta.date = normalizeDate(imported.date);
    if (!meta.slug && title) meta.slug = slugify(title);

    body = embedded.body;
  }

  meta.tr.body = stripLeadingH1(body, meta.tr.title);
  return meta;
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJsonString(str) {
  return JSON.stringify(String(str ?? ''));
}

function mdToHtml(md) {
  if (!md) return '';
  let html = marked.parse(md.trim()).trim();
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  return html
    .split('\n')
    .map((line) => `          ${line}`)
    .join('\n');
}

function formatDateTr(dateStr) {
  const d = new Date(dateStr);
  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function resolveEyebrow(meta) {
  const tags = meta.tags || [];
  const category = tags.find((tag) => tag.includes(' ')) || tags[tags.length - 1];
  if (!category) return 'Ceza Hukuku';
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function buildTagsMeta(meta) {
  const tags = meta.tags || [];
  if (!tags.length) return '';
  return ` · ${escapeHtml(tags.join(' · '))}`;
}

function renderPostPage(meta, template) {
  const normalized = normalizeImportedBody({ ...meta, tr: { ...(meta.tr || {}) } });
  const tr = normalized.tr || {};
  const slug = normalized.slug;
  const title = tr.title || slug;
  const description = tr.metaDescription || tr.excerpt || '';
  const bodyHtml = mdToHtml(tr.body);
  const dateFormatted = formatDateTr(normalized.date);

  return template
    .replace(/\{\{TITLE\}\}/g, escapeHtml(title))
    .replace(/\{\{JSON_TITLE\}\}/g, escapeJsonString(title))
    .replace(/\{\{DESCRIPTION\}\}/g, escapeHtml(description))
    .replace(/\{\{SLUG\}\}/g, escapeHtml(slug))
    .replace(/\{\{DATE\}\}/g, escapeHtml(normalized.date))
    .replace(/\{\{DATE_FORMATTED\}\}/g, escapeHtml(dateFormatted))
    .replace(/\{\{EYEBROW\}\}/g, escapeHtml(resolveEyebrow(normalized)))
    .replace(/\{\{TAGS_META\}\}/g, buildTagsMeta(normalized))
    .replace(/\{\{BODY_HTML\}\}/g, bodyHtml);
}

function syncBlogPost(meta, template) {
  const slug = meta.slug;
  const htmlPath = join(blogHtmlDir, `${slug}.html`);
  const html = renderPostPage(meta, template);
  const action = existsSync(htmlPath) ? 'Updated' : 'Created';
  writeFileSync(htmlPath, html);
  console.log(`${action} blog/${slug}.html`);
}

function buildBlogListItem(meta) {
  const tr = meta.tr || {};
  const slug = meta.slug;
  const dateFormatted = formatDateTr(meta.date);
  const excerpt = tr.excerpt || '';

  return `        <article class="blog-list-item">
          <h2><a href="/blog/${escapeHtml(slug)}.html">${escapeHtml(tr.title)}</a></h2>
          <p class="article-meta"><time datetime="${escapeHtml(meta.date)}">${escapeHtml(dateFormatted)}</time></p>
          <p>${escapeHtml(excerpt)}</p>
          <a href="/blog/${escapeHtml(slug)}.html" class="link-underline text-small">Devamını oku</a>
        </article>`;
}

function syncBlogIndex(allMeta) {
  const sorted = [...allMeta].sort((a, b) => new Date(b.date) - new Date(a.date));
  const listHtml = sorted.map(buildBlogListItem).join('\n');
  let indexHtml = readFileSync(blogIndexPath, 'utf8');

  indexHtml = indexHtml.replace(
    /<div class="blog-list">[\s\S]*?<\/div>/,
    `<div class="blog-list">\n${listHtml}\n      </div>`
  );

  writeFileSync(blogIndexPath, indexHtml);
  console.log(`Updated blog/index.html (${sorted.length} posts)`);
}

const template = readFileSync(postTemplatePath, 'utf8');
const files = readdirSync(blogContentDir).filter((f) => f.endsWith('.md'));
const allMeta = [];

for (const file of files) {
  const raw = readFileSync(join(blogContentDir, file), 'utf8');
  let meta = parseFrontmatter(raw);
  if (!meta?.slug) {
    meta = parseDecapCorruptedFrontmatter(raw);
  }
  if (!meta) {
    console.warn(`Skip ${file}: invalid frontmatter`);
    continue;
  }
  if (!meta.slug) {
    meta.slug = slugFromFilename(file);
  }
  const normalized = normalizeImportedBody(meta);
  if (!normalized?.slug) {
    console.warn(`Skip ${file}: missing slug`);
    continue;
  }
  allMeta.push(normalized);
  syncBlogPost(normalized, template);
}

if (allMeta.length) {
  syncBlogIndex(allMeta);
}

console.log(`Processed ${allMeta.length} blog markdown file(s).`);
