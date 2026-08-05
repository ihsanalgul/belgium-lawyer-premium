(function (global) {
  function parseImportedMarkdown(text) {
    if (!text || typeof text !== 'string') return null;
    const match = text.trim().match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return null;

    const imported = {};
    for (const line of match[1].split('\n')) {
      const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
      if (kv) {
        imported[kv[1]] = kv[2].replace(/^['"]|['"]$/g, '').trim();
      }
    }

    const title = imported.title || '';
    const description = imported.description || imported.excerpt || '';
    const date = normalizeDate(imported.date);
    let cleanBody = stripLeadingH1(match[2].trim(), title);

    return { title, description, date, cleanBody };
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

  global.parseImportedMarkdown = parseImportedMarkdown;
  global.slugifyBlogTitle = slugify;
})(window);
