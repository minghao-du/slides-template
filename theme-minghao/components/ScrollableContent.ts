import { useNav } from '@slidev/client'
import { defineComponent, h } from 'vue'
import { contentNodes } from './ContentLayout'

// Keep centered compositions for short slides and constrain only overflowing bodies.
export default defineComponent({
  inheritAttrs: false,
  setup(_, { slots, attrs }) {
    const { isPrintMode } = useNav()
    return () => {
      const nodes = contentNodes(slots.default?.() ?? [])
      if (isPrintMode.value)
        return h('div', attrs, nodes)
      const title = nodes[0]?.type === 'h1' ? nodes.shift() : undefined
      return h('div', {
        ...attrs,
        class: [attrs.class, 'minghao-scroll-composition'],
      }, [
        title && h('header', { class: 'minghao-scroll-title' }, [title]),
        h('div', {
          class: ['minghao-scroll-body', { 'minghao-scroll-subtitle': title && nodes[0]?.type === 'p' }],
          tabindex: 0,
          role: 'region',
          'aria-label': 'Slide content',
        }, nodes),
      ])
    }
  },
})
