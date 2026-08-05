# Cabinet Juridique International

Premium single-page landing site for an international law firm (Ankara · Brussels).

## Stack

- Vite
- Vanilla HTML
- Tailwind CSS v4
- Netlify Forms
- Client-side i18n (EN / FR / NL)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Netlify Forms

The contact form uses `data-netlify="true"`. Form submissions work on Netlify deploy. For local testing with form handling:

```bash
netlify dev
```

## i18n

Translations live in `src/data/translations.js`. Language preference is stored in `localStorage`. URL parameter `?lang=fr` is also supported.

## Design

See [PRODUCT.md](./PRODUCT.md) and [DESIGN.md](./DESIGN.md) for brand and visual system documentation.

## CMS (Decap)

Admin panel: `/admin/` on the deployed Netlify site. Content is stored in `content/` and synced to Git via Netlify Git Gateway.

Local CMS editing (optional):

```bash
# Uncomment local_backend in public/admin/config.yml, then:
npx decap-server
npm run dev
```

### Blog content pipeline

1. Create or edit posts in `/admin/` (saved to `content/blog/*.md`).
2. On deploy, `npm run build` runs [`scripts/build-blog.js`](scripts/build-blog.js), which:
   - Converts markdown to HTML (tables, lists, bold, links supported via `marked`)
   - Creates or updates `blog/{slug}.html` from [`blog/_post.template.html`](blog/_post.template.html)
   - Regenerates the post list in [`blog/index.html`](blog/index.html)
3. Published URL: `/blog/{slug}.html`

Required frontmatter fields per post: `slug`, `date`, `tags`, and `tr` (title, excerpt, metaDescription, body). Other languages (`en`, `fr`, `nl`) are optional in CMS but only `tr.body` is rendered on the site today.

### CMS preview vs published appearance

The Decap CMS markdown editor preview uses default styling — it does **not** match the live site typography. That is expected.

To see the real layout locally:

```bash
npm run build
npm run preview
```

Then open `/blog/{slug}.html`.

## CMS Security

CMS write access is protected by **Netlify Identity (invite-only)** and the **`cms` role**. Repo config enforces roles via `accept_roles` in [`public/admin/config.yml`](public/admin/config.yml).

### Netlify Dashboard checklist (required once)

Complete these in **Netlify → Site → Identity** before inviting editors:

1. **Registration → Invite only** — disable public sign-up at `/admin/`.
2. **External providers** — turn off Google/GitHub OAuth unless you explicitly need them.
3. **Services → Git Gateway → Roles** — set to `cms` (do not leave blank).
4. **Users** — delete any accounts you did not invite.
5. **User metadata** — for each allowed editor, set `app_metadata`:
   ```json
   { "roles": ["cms"] }
   ```

### Adding an editor

1. Identity → **Invite users** → send invite.
2. User opens the invite link, sets a password at `/admin/`.
3. Assign `"roles": ["cms"]` in user metadata if not already set.
4. User logs in at `/admin/` and edits blog posts or KVKK content.

### After deploy — verify

| Check | Expected |
|-------|----------|
| `/admin/` login screen | No “Sign up” / public registration |
| Random email sign-up attempt | Rejected |
| User without `cms` role | CMS access denied |
| Invited user with `cms` role | Can edit and publish via Git Gateway |

### Notes

- `/admin/` URL visibility is normal; security is authentication + roles, not obscurity.
- Keep `local_backend` commented out in production config.
- Identity invite links land on `/` first; [`index.html`](index.html) redirects `#invite_token` to `/admin/`.
