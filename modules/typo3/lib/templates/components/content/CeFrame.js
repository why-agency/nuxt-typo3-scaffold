// Content element wrapper - Section Frame
// All props are returned from appearance
export default {
  functional: true,
  props: {
    frameClass: {
      type: String,
      required: false,
      default: ''
    },
    layout: {
      type: String,
      required: false,
      default: 'default'
    },
    spaceAfter: {
      type: String,
      required: false,
      default: 'default'
    },
    spaceBefore: {
      type: String,
      required: false,
      default: 'default'
    },
    background: {
      type: String,
      default: 'none'
    }
  },
  render(createElement, ctx) {
    const frame = createElement(
      'div',
      {
        class: [
          'ce-frame',
          `frame-${ctx.props.frameClass}`,
          `layout-${ctx.props.layout}`,
          `space-before-${
            ctx.props.spaceBefore.length ? ctx.props.spaceBefore : 'default'
          }`,
          `space-after-${
            ctx.props.spaceAfter.length ? ctx.props.spaceAfter : 'default'
          }`
        ]
      },
     ctx.children
    )
    return ctx.props.background === 'none' || !ctx.props.background ? frame : createElement('div', { class: ctx.props.background }, [frame])
  }
}
