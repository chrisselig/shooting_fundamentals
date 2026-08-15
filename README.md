# Shooting Fundamentals

A new shooter's notes on 22LR fundamentals, built around NRL22-style positional shooting. Plain static site — no framework, installs to an Android home screen and works fully offline once opened once with a connection.

## Structure

```
src/pages/        page content fragments (front-matter + HTML)
src/partials/     shared layout wrapper
scripts/build.mjs builds src/pages/* -> public/*/index.html + service-worker.js
public/           the deployable static site (css, js, icons, manifest, print card)
```

## Editing content

Each file in `src/pages/` starts with a front-matter comment block:

```html
<!--
title: Page Title | Shooting Fundamentals
description: One line for meta description.
nav: slug-matching-scripts/build.mjs-NAV-array
-->
<p>page content...</p>
```

To add a new page: create `src/pages/your-page.html`, add a matching entry to the `NAV` array in `scripts/build.mjs`, then rebuild.

## Build & preview locally

```bash
npm run build   # writes public/
npm run serve   # builds, then serves public/ at http://localhost:3000
```

Rebuild after any edit to `src/` — the service worker's precache list and cache-busting version are regenerated on every build.

## Deploying to Vercel

`vercel.json` sets `buildCommand: node scripts/build.mjs` and `outputDirectory: public`, so Vercel rebuilds fresh on every push — no need to remember to build before committing.

**Git-connected (recommended):** push this repo to GitHub, import it at vercel.com, every push to `main` deploys automatically.

**CLI:** `npm i -g vercel`, then `vercel` from the project root for a preview deploy, `vercel --prod` to promote.

## Installing on Android for offline use at the range

1. Open the deployed site once while you have a connection.
2. Chrome should prompt to install, or use the menu → **Add to Home screen**.
3. That fetches and caches every page. After that, the app icon works with zero signal.

If you add pages later, reopen the app with a connection once so the new pages get cached too.
