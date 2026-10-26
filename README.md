# Minghao Slides Template

Minghao's personal Slidev theme and layout reference. Reusable design lives in the theme; example content and its offline preview live in a separate project.

## Repository Structure

- [`theme-minghao/`](./theme-minghao/): Reusable layouts, styles, and bundled font imports.
- [`examples/minghao/example.md`](./examples/minghao/example.md): A layout showcase to consult when writing a presentation.
- [`examples/minghao/public/assets/`](./examples/minghao/public/assets/): Local example artwork, copied into the preview during a build.
- `examples/minghao/preview/`: Generated HTML, JavaScript, CSS, images, and fonts. Ignored by Git.

## View the Example Offline

Requires Node.js 22.18+ (22.x) or 24.11+ and npm. Run these commands from the repository root:

```sh
npm ci
npm run build
npm run preview
```

Open <http://127.0.0.1:4173>. Installation needs internet access the first time. After installation and building, the preview works without internet access. Keep the server running while browsing; stop it with Ctrl+C.

The preview is a complete static website directory, not a standalone HTML file. Serve it locally rather than double-clicking `index.html`. Generated files are never committed. After changing the example or theme, run `npm run build` again and refresh the browser.

For editing with live reload:

```sh
npm run dev
```

See the [example guide](./examples/minghao/README.md) for asset handling and reuse.

## Use the Theme in Another Presentation

In an existing Slidev project, install the theme from this checkout:

```sh
npm install /path/to/slides-template/theme-minghao
```

Set the presentation's frontmatter:

```yaml
---
theme: minghao
themeConfig:
  primary: '#4d7534'
---
```

The theme bundles PT Serif and PT Mono through Fontsource and disables remote font loading by default. Keep new images, fonts, and other runtime assets local if the presentation must work offline. The bundled fonts cover Latin text; add appropriate local fonts for other writing systems.

Use the example as a design reference. Keep presentation-specific content in each deck and reusable design changes in the theme.

## Attribution and License

Derived from the Seriph theme by Anthony Fu and the Slidev.js Team. Upstream history remains in [CHANGELOG.md](./theme-minghao/CHANGELOG.md). See [LICENSE](./LICENSE) for the MIT license. Fontsource packages include their own font licenses.
