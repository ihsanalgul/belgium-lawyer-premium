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

The contact form on the homepage (`name="contact"`) uses:

- `data-netlify="true"`
- Honeypot field `bot-field`
- Netlify reCAPTCHA (`data-netlify-recaptcha="true"`)

Submissions appear in **Netlify → Site → Forms**. Email delivery is **not** automatic from code.

### Required once after deploy

1. Open **Netlify → Site configuration → Forms → Form notifications**
2. Add an **Email notification** for form `contact`
3. Set the recipient to **`av.ziyakahya@gmail.com`**
4. Confirm the inbox (Netlify sends a verification mail)

Local testing with form handling:

```bash
netlify dev
```

Field names in the notification (`ad_soyad`, `eposta`, `telefon`, `konu`, `mesaj`) are Turkish so the lawyer can read submissions clearly. Subject line: `Yeni iletişim talebi — Av. Yusuf Ziya Kahya sitesi`.

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

Required frontmatter fields per post: `slug`, `date`, `tags`, and **Türkçe** (`tr.title`, `tr.excerpt`, `tr.metaDescription`, `tr.body`). You can publish with Turkish only — **English, Français, and Nederlands are optional** in the CMS form and may be left blank. Only `tr.body` is rendered on the live blog today; other languages are stored for future use.

### Pasting a full .md file

You can paste a complete markdown file (with `---` frontmatter and `#` title) into **Türkçe → İçerik**. On **Save** or **Publish**, the CMS automatically:

- Extracts `title`, `date`, and `description` into the form fields (when empty)
- Generates `slug` from the title (when empty)
- Removes frontmatter and duplicate `#` heading from the body

After saving, the preview shows only the article content. The live site applies the same cleanup during `npm run build`.

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
