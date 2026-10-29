import { Comment, Fragment, Text, defineComponent, h, isVNode } from 'vue'
import type { VNode } from 'vue'
import { handleBackground } from '../layoutHelper'

// Flatten Markdown fragments without treating headings inside containers as page titles.
function contentNodes(nodes: VNode[]): VNode[] {
  return nodes.flatMap((node) => {
    if (node.type === Fragment && Array.isArray(node.children))
      return contentNodes(node.children.filter(isVNode))
    if (node.type === Comment || (node.type === Text && !String(node.children ?? '').trim()))
      return []
    return [node]
  })
}

export default defineComponent({
  inheritAttrs: false,
  props: {
    titleBand: { type: Boolean, default: true },
    image: String,
    imageSide: String,
    backgroundSize: { type: String, default: 'cover' },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const nodes = contentNodes(slots.default?.() ?? [])
      const title = nodes[0]?.type === 'h1' ? nodes.shift() : undefined
      const subtitle = title && nodes[0]?.type === 'p'
      const body = h('div', {
        class: ['minghao-content-body', { 'minghao-has-subtitle': subtitle }],
      }, nodes)
      const imageStyle = {
        ...handleBackground(props.image),
        backgroundSize: props.backgroundSize,
      }
      const image = h('div', { class: 'minghao-content-image', style: imageStyle, 'aria-hidden': 'true' })
      return h('div', {
        ...attrs,
        class: ['slidev-layout', 'minghao-content', attrs.class, {
          'minghao-with-title': !!title,
          'minghao-with-image': !!props.imageSide,
        }],
      }, [
        title && h('header', { class: 'minghao-content-header' }, [
          title,
          props.titleBand && h('div', { class: 'minghao-title-band', 'aria-hidden': 'true' }),
        ]),
        h('div', { class: 'minghao-content-main' }, props.imageSide
          ? props.imageSide === 'left' ? [image, body] : [body, image]
          : [body]),
      ])
    }
  },
})
