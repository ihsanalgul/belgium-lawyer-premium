(function () {
  var SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  function isEmpty(value) {
    return value === undefined || value === null || String(value).trim() === '';
  }

  function isValidSlug(value) {
    return typeof value === 'string' && SLUG_PATTERN.test(value);
  }

  function sanitizeSlug(value) {
    if (typeof value !== 'string') return '';
    var slug = value.trim().toLowerCase();
    if (slug.indexOf('map-') === 0 || slug.indexOf('partial-') === 0) return '';
    return window.slugifyBlogTitle
      ? window.slugifyBlogTitle(slug)
      : slug
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
  }

  function resolveSlug(entry) {
    var slug = entry.getIn(['data', 'slug']);
    if (isValidSlug(slug)) return slug;

    var title = entry.getIn(['data', 'tr', 'title']);
    if (!isEmpty(title)) {
      var generated = window.slugifyBlogTitle ? window.slugifyBlogTitle(title) : sanitizeSlug(title);
      if (isValidSlug(generated)) return generated;
    }

    var sanitized = sanitizeSlug(slug);
    return isValidSlug(sanitized) ? sanitized : '';
  }

  CMS.registerEventListener({
    name: 'preSave',
    handler: function ({ entry }) {
      if (entry.get('collection') !== 'blog') return entry;

      var updated = entry;
      var body = entry.getIn(['data', 'tr', 'body']);

      if (typeof body === 'string' && body.trim().startsWith('---')) {
        var imported = window.parseImportedMarkdown(body);
        if (imported) {
          if (isEmpty(entry.getIn(['data', 'slug'])) && imported.title) {
            updated = updated.setIn(['data', 'slug'], window.slugifyBlogTitle(imported.title));
          }
          if (isEmpty(entry.getIn(['data', 'date'])) && imported.date) {
            updated = updated.setIn(['data', 'date'], imported.date);
          }
          if (isEmpty(entry.getIn(['data', 'tr', 'title'])) && imported.title) {
            updated = updated.setIn(['data', 'tr', 'title'], imported.title);
          }
          if (isEmpty(entry.getIn(['data', 'tr', 'metaDescription'])) && imported.description) {
            updated = updated.setIn(['data', 'tr', 'metaDescription'], imported.description);
          }
          if (isEmpty(entry.getIn(['data', 'tr', 'excerpt'])) && imported.description) {
            updated = updated.setIn(['data', 'tr', 'excerpt'], imported.description);
          }
          updated = updated.setIn(['data', 'tr', 'body'], imported.cleanBody);
        }
      }

      var slug = resolveSlug(updated);
      if (!slug) {
        throw new Error('Geçerli bir slug gerekli. Slug alanını doldurun veya Türkçe başlık girin.');
      }
      updated = updated.setIn(['data', 'slug'], slug);

      return updated;
    },
  });
})();
