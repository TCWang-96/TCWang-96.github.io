# Website project notes

Personal page + future blog of TC Wang. Built with **Hugo** now; the user may move it to
**Astro** later (and possibly to a host other than GitHub Pages). Keep everything easy to migrate.

## Portability rules
- Content lives in `content/` as plain Markdown. Frontmatter uses only portable keys:
  `title`, `description`, `date`, `draft`, `math`, `tags` (Astro content collections read these as-is).
- Avoid Hugo shortcodes inside content. When a page needs interactive HTML, keep it as one
  shortcode whose only job is to output markup, with logic in a plain JS file under `static/js/`
  (example: `layouts/shortcodes/mcmillan.html` + `static/js/mcmillan.js`).
- No external Hugo theme or Hugo modules; templates in `layouts/` stay small (they're rewritten
  as Astro layouts on migration).
- Stand-alone pages/apps go in `static/` and are copied verbatim (Astro: `public/`).
- Images for a post: put them next to it as a page bundle (`content/posts/slug/index.md` + images)
  or in `static/images/`.
- Output must stay plain static HTML (no server code), so any host works.

## Commands
- Preview: `hugo server` (http://localhost:1313); build: `hugo --gc --minify` → `public/`
- New post: `hugo new content posts/<slug>.md`
- Deploy: push to `main` (GitHub Actions, `.github/workflows/hugo.yml`).

## History
Pre-2026 site in tags `legacy-master` and `legacy-main`. Quantum notes moved to `~/working/quantum-chemistry`.
Personal links moved to `~/working/zatsu`; food inventory tracker dropped.
