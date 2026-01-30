# PortFolio
Portfolio of Omkar Salve.

Preview locally:

```bash
# from repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Next steps:
- Replace placeholder summary, projects and contact email in `index.html`.
- Add screenshots or project assets in an `assets/` folder and update the project cards.
- Tell me if you want me to extract text from your LinkedIn profile and populate the site.

React + GitHub Pages

This repository is now configured as a Vite + React app and includes a GitHub Action to deploy automatically to `gh-pages`.

Quick start:

```bash
npm install
npm run dev        # run local dev server
npm run build      # produce optimized build in ./dist
```

When you push to `main`, the GitHub Action will build and publish the `dist` directory to the `gh-pages` branch. The site will be available at:

`https://<your-username>.github.io/PortFolio/`

If you want the site at `https://<your-username>.github.io/` instead, rename the repo to `<your-username>.github.io` and update `vite.config.js` `base` to `"/"`.

Let me know if you want me to populate the About/Projects sections from your LinkedIn now.
