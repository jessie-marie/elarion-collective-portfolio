# Deploy — free hosting (GitHub Pages + Netlify)

This is a **static site, no build step**. Both hosts below are free.

## Option A — Netlify (recommended, easiest)

1. Push this folder to GitHub as e.g. `elarion-collective-portfolio`.
2. Go to https://app.netlify.com → **Add new site → Import an existing project** → pick the repo.
3. Settings are already in `netlify.toml` (publish = `.`, no build command).
4. Deploy → you get `https://<name>.netlify.app` free. Add a custom domain later if you want.

## Option B — GitHub Pages (free)

1. Push to GitHub.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/ (root)`.
3. Wait ~1 min → live at `https://<username>.github.io/elarion-collective-portfolio/`.
4. `.nojekyll` is included so `assets/` serves as-is.

## You can use BOTH

Push once to GitHub, connect the same repo to Netlify, and enable Pages — same code, two free URLs. Point `jessiemarie.me` at whichever you prefer later.

## Wiring project links

Edit `assets/script.js` — each project has `repo` + `demo` fields currently set to `"#"`. Replace with real GitHub repo URLs and live demo URLs as you publish them, then push (both hosts redeploy automatically).
