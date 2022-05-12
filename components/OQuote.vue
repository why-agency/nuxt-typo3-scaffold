<template>
  <section
    ref="target"
    class="grid xl:mx-auto"
    :class="[
      { 'xl:grid-flow-col': sourcename },
      sourcename ? 'max-w-[1440px]' : 'max-w-[1100px]'
    ]"
  >
    <base-headline
      ref="headline"
      class="invisible min-w-0 font-bold"
      :level="quoteLayout"
      :animate="isMd && animate"
    >
      <BaseHtmlParser :content="quoteHtml" />
    </base-headline>
    <div
      v-if="sourcename"
      ref="source"
      class="self-end invisible mt-12 xl:row-start-2 xl:col-start-2 justify-self-end text-body1-mobile xl:text-body1 leading-7 w-36 xl:w-48 xl:-mt-10"
    >
      <div v-if="sourcename" class="font-bold">{{ sourcename }}</div>
      <div v-if="sourceposition">{{ sourceposition }}</div>
    </div>
  </section>
</template>

<script>
import {
  useIntersectionObserver,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import { ref } from '@nuxtjs/composition-api'
import { useHighlightText } from '@/composables/useHighlightText'

export default {
  props: {
    overline: {
      type: String,
      default: ''
    },
    overlineSecondary: {
      type: Boolean,
      default: false
    },
    quote: {
      type: Object,
      required: true
    },
    sourcename: {
      type: String,
      default: ''
    },
    sourceposition: {
      type: String,
      default: ''
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const target = ref(null)
    const targetIsVisible = ref(false)

    const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        stop()
      }
      targetIsVisible.value = isIntersecting
    })

    const quoteText = useHighlightText(props.quote.text)

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isMd = breakpoints.greater('md')

    return { target, targetIsVisible, quoteText, breakpoints, isMd }
  },
  computed: {
    quoteLayout() {
      if (this.quote.text.length > 160) {
        return 12
      }
      return this.quote.layout
    },
    $_quoteStyle() {
      return this.quoteLayout === 11 ? 'quote1' : 'quote2'
    },
    quoteHtml() {
      if (!this.overline) {
        return this.quoteText
      }
      if (this.overlineSecondary) {
        return `<span class="inline-block pr-10 align-text-top text-secondary font-primary text-overline3 md:pr-16 xl:pr-16 xxl:pr-32">${this.overline}</span>${this.quoteText}`
      }
      return `<span class="inline-block pr-10 align-text-top text-primary font-primary text-overline3 md:pr-16 xl:pr-16 xxl:pr-32">${this.overline}</span>${this.quoteText}`
    }
  },
  watch: {
    targetIsVisible(isVisible) {
      if (isVisible) {
        const { headline, source } = this.$refs
        const tl = this.$gsap.timeline()
        const values = {
          autoAlpha: 0,
          opacity: 0,
          translateY: '1rem',
          duration: 1
        }
        tl.from(headline.$el, values)
        if (source) {
          tl.from(source, values, '>-0.5')
        }
      }
    }
  }
}
</script>
