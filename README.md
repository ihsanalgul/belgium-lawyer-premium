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
