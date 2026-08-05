(function () {
  function isEmpty(value) {
    return value === undefined || value === null || String(value).trim() === '';
  }

  CMS.registerEventListener({
    name: 'preSave',
    handler: function ({ entry }) {
      if (entry.get('collection') !== 'blog') return entry;

      var body = entry.getIn(['data', 'tr', 'body']);
      if (typeof body !== 'string' || !body.trim().startsWith('---')) return entry;

      var imported = window.parseImportedMarkdown(body);
      if (!imported) return entry;

      var updated = entry;

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
      return updated;
    },
  });
})();
