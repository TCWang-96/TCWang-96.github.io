# TCWang-96.github.io

Personal website of TC Wang, built with [Hugo](https://gohugo.io) and published at
<https://tcwang-96.github.io/> by GitHub Actions on every push to `main`.

The output is plain static HTML, so the same site can move to another host
(Netlify, Cloudflare Pages, any web server) by uploading the `public/` folder.
A later move to [Astro](https://astro.build) is planned for as a possibility: content stays
portable Markdown; see the rules in `CLAUDE.md`.

## Everyday use

```sh
hugo server                         # live preview at http://localhost:1313 (Ctrl-c to stop)
hugo new content posts/my-post.md   # new blog post (set draft: false to publish)
hugo server -D                      # preview including drafts
hugo --gc --minify                  # build the site into public/
```

Publish: commit and `git push` to `main`. The workflow in `.github/workflows/hugo.yml` builds and deploys.

## Layout

| Path | Contents |
|---|---|
| `hugo.toml` | Site title, menu, math settings |
| `content/_index.md` | Home page |
| `content/research/` | Research section |
| `content/tools/` | Calculators (`mcmillan.md` = McMillan–Allen–Dynes Tc) |
| `content/posts/` | Blog posts (Markdown; add `math: true` for LaTeX via KaTeX) |
| `content/links.md` | Personal links |
| `layouts/` | HTML templates (no external theme) |
| `layouts/shortcodes/mcmillan.html` | Tc calculator markup |
| `static/js/mcmillan.js` | Tc calculator logic (plain JS, reusable in Astro) |
| `assets/css/main.css` | Styles (light/dark) |
| `static/apps/` | Stand-alone pages copied as-is (food inventory tracker) |

## History

The pre-2026 site lives in the tags `legacy-master` (old live site: notes, tools, links)
and `legacy-main` (old MAD/NMR calculators). The quantum computing / chemistry notes moved
to a separate research repo (`~/working/quantum-chemistry`).
