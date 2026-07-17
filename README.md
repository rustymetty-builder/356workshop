# The 356 Workshop — Astro site

Static site for the 356A restoration knowledge base, seeded by VIN 108689.

## Run locally

```
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Netlify: connect the repo, or drag-drop `dist/` at app.netlify.com. `netlify.toml` sets build command and publish dir. Production domain: **356workshop.com** (registered at Porkbun; point DNS to Netlify — add the domain in Netlify → Domain settings, then set the ALIAS/CNAME records Netlify shows you in Porkbun's DNS panel. Netlify provisions HTTPS automatically).

## Structure

- `src/content/guides/` — guide articles (Markdown + frontmatter schema in `src/content.config.ts`). Frontmatter drives the parts block (affiliate links), sources block, status badge, and by-system navigation.
- `src/content/log/` — build log entries (frontmatter only).
- `public/photos/` — web-sized copies of selected photos (originals stay in `../photos/`).
- Guide status values: `verified` (done on the shop car), `research`, `planned`.

## Editorial rules (from the concept doc)

- Nothing unverified presented as verified. No specs without sources.
- Redact owner names/addresses (title) and never publish `photos/03-documents/private/` unredacted.
- Part numbers marked "from build invoice to be added" need confirming before affiliate links go live.

## TODO before launch

- Affiliate accounts (Pelican, Amazon, eBay) → fill `url:` fields in guide `parts:` frontmatter
- Newsletter form is Netlify-forms-ready but unwired to a provider
- Build log entry dates are placeholders — set real dates
- Gearbox stamping photo to close the transmission match
