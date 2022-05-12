<template>
  <component :is="tag" class="uppercase min-h-safari" :class="$_headlineStyle">
    <div ref="headline" :class="{ invisible: animate && !isVisible }">
      <slot>
        <BaseHtmlParser tag="span" :content="text" class="hyphens" />
      </slot>
    </div>
  </component>
</template>

<script>
/* eslint-ignore */
import { ref, onMounted } from '@nuxtjs/composition-api'
import { useIntersectionObserver } from '@vueuse/core'

const getAnimatableText = tag => {
  if (!tag) {
    return null
  }

  if (tag.childElementCount > 0) {
    return tag.childNodes[0]
  }

  return tag
}

export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'div'
    },
    layout: {
      type: Number,
      default: 1
    },
    animate: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const headline = ref(null)
    const isVisible = ref(false)

    const { stop } = useIntersectionObserver(
      headline,
      ([{ isIntersecting }], observerElement) => {
        isVisible.value = isIntersecting
        if (isIntersecting) {
          stop()
        }
      },
      { threshold: 0.5 }
    )

    const headlineText = ref(null)

    onMounted(() => {
      headlineText.value = getAnimatableText(headline.value)
    })

    return {
      headline,
      isVisible,
      headlineText
    }
  },
  computed: {
    headlineTag() {
      return this.tag ? this.tag : `h${this.layout}`
    },
    $_headlineStyle() {
      return {
        'font-secondary text-h1': this.layout === 1,
        'font-secondary text-h2': this.layout === 2,
        'font-secondary text-h3': this.layout === 3,
        'font-primary text-h4': this.layout === 4,
        'font-primary text-h5': this.layout === 5,
        'font-primary text-h6': this.layout === 6,
        'font-secondary text-quote1-mobile xl:text-quote1': this.layout === 11,
        'font-secondary text-quote2-mobile xl:text-quote2': this.layout === 12
      }
    }
  },
  watch: {
    isVisible() {
      if (this.isVisible && this.layout !== 6 && this.animate) {
        this.animateText()
      }
    }
  },
  methods: {
    animateText() {
      const splitChild = new this.$SplitText(this.headlineText, {
        type: 'lines'
      })
      const splitParent = new this.$SplitText(this.headlineText, {
        type: 'lines, words',
        linesClass: 'overflow-hidden'
      })
      const lines = splitChild.lines
      const textHeight = splitParent.lines[0].clientHeight
      const tl = this.$gsap.timeline({ defaults: { opacity: 0 } })
      tl.from(
        lines,
        {
          y: textHeight,
          duration: 0.5,
          stagger: 0.12,
          ease: 'cubic-bezier(0, 0.01, 0, 1)'
        },
        this.delay
      )
    }
  }
}
</script>
