<template>
  <component :is="tag" class="font-secondary" :class="$_textStyle">
    <slot>
      <BaseHtmlParser tag="div" :content="text" />
    </slot>
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    layout: {
      type: Number,
      default: 1
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    $_textStyle() {
      return {
        'font-secondary text-overline1-mobile md:text-overline1 font-medium uppercase':
          this.layout === 1,
        'font-secondary md:text-overline2 font-medium uppercase':
          this.layout === 2,
        'font-secondary md:text-overline3 font-medium uppercase':
          this.layout === 3
      }
    },
    overlineTag() {
      return this.tag ? this.tag : `h${this.layout}`
    }
  }
}
</script>
