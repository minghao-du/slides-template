# Minghao Layout Showcase

A design reference for Minghao's personal Slidev theme. This project demonstrates cover, text, table, section, statement, fact, quote, image, and code layouts. It references `../../theme-minghao` directly, so theme changes are visible during authoring.

## Commands

From the repository root, using Node.js 22.18+ (22.x) or 24.11+:

```sh
npm ci
npm run dev
```

To build and view the saved preview:

```sh
npm run build
npm run preview
```

Open <http://127.0.0.1:4173>. Stop the server with Ctrl+C. Commands also work from this example directory after installing dependencies at the repository root.

The build writes a complete static website into `preview/`. This directory is ignored by Git regardless of its size. Rebuild manually after editing the example or theme, then refresh the browser. A fresh checkout needs installation and a first build before a saved preview is available.

## Offline Assets

- `public/assets/landscape.svg` is original, text-based example artwork and is committed with the source. Slidev copies `public/` into the preview. Reference these files as `/assets/landscape.svg` in frontmatter.
- PT Mono is bundled through Fontsource. Helvetica, Arial, and Chinese Kai fonts come from the local system; no fonts load from a CDN. Other devices may render different fallback fonts.
- Documentation links on the last slide require internet access only if opened. They are not required to render the presentation.

Installation requires network access. After installation, both rebuilding this example and viewing its saved preview can run offline. Keep the full `preview/` directory together and serve it locally; opening `index.html` directly is not supported. You can also serve that directory using another local static web server with SPA fallback.

When adding content, use local images and bundled fonts instead of remote URLs. Keep example artwork here and reusable layouts/styles in `theme-minghao/`. Large original media can be kept outside Git when necessary, but must be available locally before building.

## Reuse

Copy the layouts or Markdown patterns you need into your own presentation. Install the local `slidev-theme-minghao` package as described in the [repository guide](../../README.md), then use `theme: minghao`. This example is a layout showcase rather than a finished talk.
