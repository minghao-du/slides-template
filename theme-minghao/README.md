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

PT Serif and PT Mono are bundled through Fontsource. Remote font loading is disabled by default. Included subsets cover Latin text. Add local font imports for other writing systems when needed.

The cover uses a solid green background by default. Override `background` with a color or a local asset path. Place presentation-specific artwork in the presentation project rather than in the theme.

## Attribution and License

Based on the Seriph theme. MIT License © 2021 Anthony Fu and the Slidev.js Team. See the repository [LICENSE](../LICENSE). [CHANGELOG.md](./CHANGELOG.md) preserves upstream history and original names; it does not describe releases of this personal fork.
