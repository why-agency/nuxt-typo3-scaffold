<template>
  <div class="relative flex overflow-hidden flex-end">
    <div
      ref="marquee"
      class="relative flex mx-12 whitespace-nowrap"
      aria-hidden="true"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { horizontalLoop } from '@/utils/horizontal-loop'

export default {
  props: {
    isHovered: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      marqueeTimeline: null
    }
  },
  watch: {
    isHovered() {
      if (this.isHovered) {
        this.marqueeTimeline.resume()
      } else {
        this.marqueeTimeline.pause()
      }
    }
  },
  mounted() {
    this.createMarqueeTimeline()
  },
  methods: {
    createMarqueeTimeline() {
      const texts = this.$gsap.utils.toArray(this.$refs.marquee.childNodes)
      this.marqueeTimeline = horizontalLoop(texts, {
        repeat: -1,
        speed: 1.5,
        paddingRight: 24
      })
      this.marqueeTimeline.pause()
    }
  }
}
</script>
