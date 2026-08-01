import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const blogContentDir = join(root, 'content/blog');
const blogHtmlDir = join(root, 'blog');

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

function mdToHtml(md) {
  if (!md) return '';
  return md
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return `<h2>${escapeHtml(trimmed.slice(3))}</h2>`;
      }
      if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        return `<p><em>${escapeHtml(trimmed.slice(1, -1))}</em></p>`;
      }
      return `<p>${escapeHtml(trimmed.replace(/\n/g, ' '))}</p>`;
    })
    .join('\n          ');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDateTr(dateStr) {
  const d = new Date(dateStr);
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function syncBlogPost(meta) {
  const slug = meta.slug;
  const htmlPath = join(blogHtmlDir, `${slug}.html`);
  if (!existsSync(htmlPath)) {
    console.warn(`Skip ${slug}: ${htmlPath} not found`);
    return;
  }

  const tr = meta.tr || {};
  let html = readFileSync(htmlPath, 'utf8');
  const bodyHtml = mdToHtml(tr.body);
  const tags = (meta.tags || []).join(' · ');
  const dateFormatted = formatDateTr(meta.date);

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(tr.title)} | Av. Yusuf Ziya KAHYA</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeHtml(tr.metaDescription || tr.excerpt || '')}"`
  );
  html = html.replace(
    /<h1 class="text-display-lg">[^<]*<\/h1>/,
    `<h1 class="text-display-lg">${escapeHtml(tr.title)}</h1>`
  );
  html = html.replace(
    /<p class="article-meta">[\s\S]*?<\/p>/,
    `<p class="article-meta"><time datetime="${meta.date}">${dateFormatted}</time> · ${escapeHtml(tags)}</p>`
  );
  html = html.replace(
    /<div class="article-body text-prose">[\s\S]*?<\/div>/,
    `<div class="article-body text-prose">\n          ${bodyHtml}\n        </div>`
  );

  writeFileSync(htmlPath, html);
  console.log(`Updated blog/${slug}.html`);
}

const files = readdirSync(blogContentDir).filter((f) => f.endsWith('.md'));
for (const file of files) {
  const raw = readFileSync(join(blogContentDir, file), 'utf8');
  const meta = parseFrontmatter(raw);
  if (meta?.slug) syncBlogPost(meta);
}

console.log(`Processed ${files.length} blog markdown file(s).`);
