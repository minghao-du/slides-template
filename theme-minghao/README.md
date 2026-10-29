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

## Fonts and Backgrounds

All layouts use Helvetica for Latin text, with Arial as the first fallback. Chinese characters fall through to `Kaiti SC`, `STKaiti`, `KaiTi`, or `楷体`, then the system sans-serif font. Install or enable a Kai font on the presenting Mac. PT Mono is bundled through Fontsource for code. Remote font loading is disabled; no proprietary font files are distributed.

The primary acceptance environment is Minghao's Mac. Other systems may use different fallback fonts; identical typography across devices is not guaranteed. Check actual rendered fonts in browser developer tools, including Chinese glyphs, before presenting or exporting. Missing Kai fonts may produce ordinary system Chinese text.

## Content Titles

`default`, `image-left`, and `image-right` share an automatic full-width title band. Only an opening, top-level Markdown `#` heading is a page title. A page without that heading has no band; later or nested headings stay in the body. Use `##` for body headings. A paragraph immediately after the title is treated as a subtitle below the band.

Titles wrap naturally without shrinking. Two lines are supported; shorten titles that need three or more lines. Longer titles move the band and body down, reducing space for content. Image layouts place the full-width title above both columns; the image starts below the band. The `image` and `backgroundSize` options remain available.

Disable the band on one slide using its frontmatter:

```yaml
---
titleBand: false
---
```

The title area remains when its band is disabled. `cover`, `intro`, `section`, `statement`, `fact`, and `quote`, along with built-in layouts such as `center`, retain their compositions and have no automatic band. Fonts remain unified across layouts.

Override these variables in a deck's `style.css` to tune the design. Values refer to the slide canvas before display scaling:

```css
:root {
  --slidev-theme-title-band: #dceef7;
  --slidev-theme-title-band-height: 8px;
  --slidev-theme-title-band-gap: 10px;
  --slidev-theme-content-gap: 20px;
  --slidev-theme-content-padding-x: 3.5rem;
  --slidev-theme-content-padding-y: 2.5rem;
  --slidev-theme-title-padding-top: 14px;
}
```

The example uses `colorSchema: light`. The current design is validated in light mode; dark mode color adaptation is outside this version's scope.

## Validation and PDF Export

From the repository root, run `npm ci`, `npm run dev`, then `npm run build` and `npm run preview`. The showcase covers mixed Chinese and English, tables, code, two-line titles, subtitles, image layouts, missing titles, multiple headings, the band opt-out, and special layouts.

On the reference Mac, export with `npm run export --workspace @minghao/slides-example`. The example includes `playwright-chromium` as a development dependency. Install its browser with `npx playwright install chromium` if it is missing. To use an existing Chrome installation instead, append `-- --executable-path "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"` to the export command. Inspect the exported PDF for font substitution, title wrapping, edge alignment, and overlap. Runtime rendering and building use local assets; installing dependencies or Chromium for the first time requires network access.

The cover uses a solid green background by default. Override `background` with a color or a local asset path. Place presentation-specific artwork in the presentation project rather than in the theme.

## Attribution and License

Based on the Seriph theme. MIT License © 2021 Anthony Fu and the Slidev.js Team. See the repository [LICENSE](../LICENSE). [CHANGELOG.md](./CHANGELOG.md) preserves upstream history and original names; it does not describe releases of this personal fork.

## Font Verification on the Reference Mac

During the 2026-10-29 implementation check, Chrome rendered Latin text in Helvetica and Chinese text in PingFang SC because no configured Kai font was available. Enable or install a licensed Kai font and rerun the browser/PDF checks before accepting the Chinese typography. This fallback preserves readable text but does not satisfy the intended Kai appearance.
