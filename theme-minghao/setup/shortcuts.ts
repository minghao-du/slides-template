import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav, base) => [
  ...base,
  {
    name: 'toggle_drawing',
    key: 'p',
    fn: () => nav.toggleDrawing(),
    autoRepeat: false,
  },
])
