# GOONS Design Recovered Site

This is a maintainable recovery of the deployed homepage at https://goonsdesign.com/.

## Run

```bash
npm install
npm run dev
```

Open the local address shown by Vite.

## Build

```bash
npm run build
```

## Recovery evidence

The parent folder contains captured evidence:

- `analysis/01-online-recon.md` — target URL and recon notes
- `analysis/02-section-map.md` — recovered section structure
- `analysis/03-assets-inventory.md` — production asset inventory
- `analysis/04-implementation-notes.md` — implementation summary
- `evidence/screenshots/` — online and local comparison screenshots
- `evidence/source/index.html` — deployed HTML snapshot
- `evidence/nuxt/` — downloaded Nuxt production assets

## Notes

The live homepage did not expose a canvas/WebGL surface during inspection. The recovered version recreates the visual expression with React, CSS, video assets, and production media.
