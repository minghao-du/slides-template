# Minghao Theme

Minghao's personal Slidev theme, derived from Seriph by Anthony Fu and the Slidev.js Team. The theme provides reusable layouts and styles; the [separate example project](../examples/minghao/) demonstrates their use.

## Use

Install this directory from an existing Slidev project:

```sh
npm install /path/to/slides-template/theme-minghao
```

```yaml
---
theme: minghao
themeConfig:
  primary: '#4d7534'
---
```

Requires Slidev 53 or later and Node.js 22.18+ (22.x) or 24.11+. Layouts include `cover`, `intro`, `section`, `statement`, `fact`, and `quote`, alongside Slidev's built-in layouts.

## Drawing Shortcut

Press `P` to toggle drawing mode in any presentation using this theme. Press `Esc` to exit drawing mode. Existing strokes remain visible when drawing mode is closed. The theme preserves Slidev's default shortcuts and disables key repeat for this toggle.

The shortcut is defined in [`setup/shortcuts.ts`](./setup/shortcuts.ts). Restart the development server after adding the setup file, or rebuild a static preview to include it.

## Fonts and Backgrounds

All layouts use Helvetica for Latin text, with Arial as the first fallback. Chinese text uses the bundled **STKaiti Regular v1.02**, followed by system Kai fonts for any missing glyphs. No system font installation is required for STKaiti. PT Mono is bundled through Fontsource for code. Remote font loading is disabled.

The unmodified font and provenance notes are stored in [`fonts/stkaiti/`](./fonts/stkaiti/). Vite copies the font into each production build. This is a proprietary font from the user-selected source, which supplies no redistribution license; it is not covered by this repository's MIT license. Public redistribution or web hosting requires appropriate rights. Regular is bundled; browsers synthesize bold or italic as needed. Latin typography can still differ on systems without Helvetica or Arial.

## Content Titles

`default`, `image-left`, and `image-right` share an automatic full-width title band. Only an opening, top-level Markdown `#` heading is a page title. A page without that heading has no band; later or nested headings stay in the body. Use `##` for body headings. A paragraph immediately after the title is treated as a subtitle below the band.

Titles wrap naturally without shrinking. Two lines are supported; shorten titles that need three or more lines. Longer titles move the band and body down, reducing space for content. Image layouts place the full-width title above both columns; the image starts below the band. The `image` and `backgroundSize` options remain available.

Disable the band on one slide using its frontmatter:

```yaml
---
titleBand: false
---
```

The title area remains when its band is disabled. `cover`, `intro`, `section`, `statement`, `fact`, and `quote`, along with `center`, retain their compositions and have no automatic band. Fonts remain unified across layouts.

Override these variables in a deck's `style.css` to tune the design. Values refer to the slide canvas before display scaling:

```css
:root {
  --slidev-theme-title-band: #dceef7;
  --slidev-theme-title-band-height: 8px;
  --slidev-theme-title-band-gap: 10px;
  --slidev-theme-title-band-offset-y: -3px;
  --slidev-theme-content-gap: 0px;
  --slidev-theme-content-padding-x: 3.5rem;
  --slidev-theme-content-padding-y: 2.5rem;
  --slidev-theme-title-padding-top: 29px;
}
```

The band offset moves only the decoration without changing title or body positions. Negative values move it upward.

The content gap supports signed values. Positive values add padding above the body; negative values move the body upward relative to the title area. The current gap is 0px.

The example uses `colorSchema: light`. The current design is validated in light mode; dark mode color adaptation is outside this version's scope.

## Overflow Scrolling

All theme layouts allow vertical scrolling when the body exceeds the available height in browser previews and presentations. The opening top-level title stays fixed. On image layouts, only the text column scrolls; the image stays in place. Slides without an opening title scroll their entire body. Short slides keep their layout and do not show a scrollbar.

Use the mouse wheel or trackpad over the body to scroll. Print and Slidev PDF export keep the original layout and pagination; scrollable content is not expanded into additional PDF pages.

## Validation and PDF Export

From the repository root, run `npm ci`, `npm run dev`, then `npm run build` and `npm run preview`. The showcase covers mixed Chinese and English, tables, code, two-line titles, subtitles, image layouts, missing titles, multiple headings, the band opt-out, and special layouts.

On the reference Mac, export with `npm run export --workspace @minghao/slides-example`. The example includes `playwright-chromium` as a development dependency. Install its browser with `npx playwright install chromium` if it is missing. To use an existing Chrome installation instead, append `-- --executable-path "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"` to the export command. Inspect the exported PDF for font substitution, title wrapping, edge alignment, and overlap. Runtime rendering and building use local assets; installing dependencies or Chromium for the first time requires network access.

The cover uses a solid green background by default. Override `background` with a color or a local asset path. Place presentation-specific artwork in the presentation project rather than in the theme.

## Attribution and License

Based on the Seriph theme. MIT License © 2021 Anthony Fu and the Slidev.js Team. See the repository [LICENSE](../LICENSE). [CHANGELOG.md](./CHANGELOG.md) preserves upstream history and original names; it does not describe releases of this personal fork.
