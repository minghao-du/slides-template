import { defineShortcutsSetup } from '@slidev/types'

let registered = false

export default defineShortcutsSetup((nav, base) => {
  // Register a raw keydown listener to toggle drawing with 'P'.
  // This bypasses Slidev's `enabled` guard which blocks shortcuts
  // when a <button> in DrawingControls has focus (isOnFocus = true).
  if (typeof window !== 'undefined' && !registered) {
    registered = true
    window.addEventListener('keydown', (e) => {
      if (e.code !== 'KeyP' || e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || e.repeat)
        return
      // Skip if user is typing in an input/textarea
      const tag = (document.activeElement?.tagName || '').toUpperCase()
      if (tag === 'INPUT' || tag === 'TEXTAREA')
        return

      nav.toggleDrawing()

      // Blur any focused button so subsequent presses also work
      if (document.activeElement instanceof HTMLElement)
        document.activeElement.blur()

      e.preventDefault()
      e.stopPropagation()
    }, true) // useCapture = true to fire before other listeners
  }

  return [...base]
})
