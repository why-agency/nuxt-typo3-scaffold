<template>
  <ul
    ref="container"
    class="pb-10 grid -skew-y-12 gap-12 xxl:gap-24"
    :class="{
      'grid-cols-1': cardCount === 1,
      'grid-cols-2': cardCount === 2 || cardCount === 4,
      'grid-cols-3': cardCount === 3 || cardCount > 4
    }"
  >
    <slot />
  </ul>
</template>

<script>
import { useContext } from '@nuxtjs/composition-api'
export default {
  props: {
    cardCount: {
      type: Number,
      default: 4
    }
  },
  setup() {
    const { $CustomEase } = useContext()
    return { $CustomEase }
  },
  mounted() {
    this.$gsap.to(this.$refs.container, {
      yPercent: -10,
      ease: this.$CustomEase?.create('custom', '0, 0.01, 0, 1'),
      scrollTrigger: {
        trigger: this.$refs.container,
        start: 'top-=50 top', // the default values
        end: '+500px',
        scrub: 2
      }
    })
  }
}
</script>
