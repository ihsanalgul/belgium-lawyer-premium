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
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const yaml = match[1];
  const data = {};
  let currentLang = null;
  let currentKey = null;
  let bodyLines = [];
  let inBody = false;

  for (const line of yaml.split('\n')) {
    if (inBody) {
      if (/^[a-z]{2}:$/.test(line) || /^[a-z_]+:/.test(line)) {
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
  const tr = meta.tr || {};
  const slug = meta.slug;
  const title = tr.title || slug;
  const description = tr.metaDescription || tr.excerpt || '';
  const bodyHtml = mdToHtml(tr.body);
  const dateFormatted = formatDateTr(meta.date);

  return template
    .replace(/\{\{TITLE\}\}/g, escapeHtml(title))
    .replace(/\{\{JSON_TITLE\}\}/g, escapeJsonString(title))
    .replace(/\{\{DESCRIPTION\}\}/g, escapeHtml(description))
    .replace(/\{\{SLUG\}\}/g, escapeHtml(slug))
    .replace(/\{\{DATE\}\}/g, escapeHtml(meta.date))
    .replace(/\{\{DATE_FORMATTED\}\}/g, escapeHtml(dateFormatted))
    .replace(/\{\{EYEBROW\}\}/g, escapeHtml(resolveEyebrow(meta)))
    .replace(/\{\{TAGS_META\}\}/g, buildTagsMeta(meta))
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
  const meta = parseFrontmatter(raw);
  if (!meta?.slug) {
    console.warn(`Skip ${file}: missing slug`);
    continue;
  }
  allMeta.push(meta);
  syncBlogPost(meta, template);
}

if (allMeta.length) {
  syncBlogIndex(allMeta);
}

console.log(`Processed ${allMeta.length} blog markdown file(s).`);
