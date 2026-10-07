# Project notes

What has been done on this site and what's planned. Newest first.
(Day-to-day logs: `~/working/working-notes/`.)

## Done

### 2026-10-07: rebuild as a Hugo site
- **Starting point:** two unrelated branches.
  - `master` was the live site: hand-written HTML plus Markdown notes (quantum computing, quantum chemistry, tools, personal links, a food inventory tracker).
  - `main` (GitHub's default) held the McMillan and NMR calculators.
  - Both are preserved as tags: `legacy-master` and `legacy-main`.
- **Rebuilt on `main` with Hugo 0.167:** no external theme; small templates in `layouts/`; one stylesheet with light/dark mode; KaTeX math on pages that set `math: true`.
- **Sections:**
  - Home: short intro. **Written by Claude from the old notes; review it and rewrite it in your own words.**
  - Research: short summary of quantum chemistry with quantum computing.
  - Tools: McMillan–Allen–Dynes Tc calculator.
    - Rebuilt from the old `MAD.html`, with the same formula.
    - Adds unit choice (K / meV / cm⁻¹ / THz), input checks and a "no superconductivity" case.
    - Logic is in `static/js/mcmillan.js`. Checked against an independent Python calculation (λ=1, μ*=0.1, ω_log=300 K gives 20.89 K).
  - Blog: empty, with RSS ready.
- **Moved out:**
  - Quantum notes → `~/working/quantum-chemistry` (`notes/`).
  - Personal links → `~/working/zatsu` (`links.json` + simple viewer).
- **Dropped:** NMR calculator, old tools/links page, food inventory tracker. All are still in the legacy tags.
- **Deploy:** `.github/workflows/hugo.yml` (GitHub Actions → Pages on every push to `main`).
- **Checked:** every page builds without warnings; layout checked at desktop and phone (390 px) widths.
- **Kept portable for a possible move to Astro;** see the rules in `CLAUDE.md`.

## To do

### Publishing (next)
- [x] Pushed `main` + tags `legacy-master`, `legacy-main` (2026-10-07). First workflow run: build OK; deploy failed because Pages still serves the `master` branch (expected until the next step)
- [x] Pages source switched to **GitHub Actions**. The `github-pages` environment only allowed deploys from `master` (a leftover rule), so it now allows `main` only. Run 3 deployed; site live 2026-10-07
- [x] Live site checked (all pages 200). Deleted the local `master` branch (its history is in tag `legacy-master`)
- [x] Default branch switched to `main`, then deleted the remote `master` (2026-10-07). The repo now has only `main` + tags `legacy-master`, `legacy-main`

### Content
- [ ] Rewrite the home page intro in your own words (name, affiliation, interests)
- [ ] Research page: projects, publications/preprints, talks; link to code once public
- [ ] First blog post (`hugo new content posts/<slug>.md`, set `draft: false`)
- [ ] Optional: About/CV page, contact (email or other profiles)

### Site
- [ ] Optional: favicon and an Open Graph image (link previews when shared)
- [ ] Optional: tags for blog posts once there are several
- [ ] Optional: custom domain (would also make moving hosts easier)
- [ ] Later, if wanted: migrate to Astro (content is portable Markdown) and/or move off GitHub Pages
