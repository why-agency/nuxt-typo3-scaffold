<template>
  <div
    ref="target"
    class="relative flex items-center justify-center px-4 w-max"
    :class="$_color"
  >
    <slot />
    <slot name="text">
      <span
        v-if="text"
        class="px-4 pt-3 font-semibold transform text-body2-mobile lg:text-body2 whitespace-nowrap lg:-rotate-90"
      >
        {{ text }}
      </span>
    </slot>
  </div>
</template>

<script>
import { ref, inject } from '@nuxtjs/composition-api'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const target = ref(null)
    const isVisible = ref(false)

    const once = inject('once', true)
    const color = inject('color', 'secondary')
    const delay = inject('delay', 0.2)
    const duration = inject('duration', 1.2)
    const ease = inject('ease', null)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        isVisible.value = isIntersecting
        if (isIntersecting && !once.value) {
          stop()
        }
      },
      { threshold: 0.5 }
    )

    return {
      target,
      isVisible,
      once,
      color,
      delay,
      duration,
      ease
    }
  },
  computed: {
    $_color() {
      return this.color === 'secondary' ? 'text-secondary' : 'text-primary'
    }
  },
  watch: {
    isVisible() {
      const path = this.target.querySelector('.mask')
      const pathLength = path.getTotalLength()
      this.$gsap.fromTo(
        path,
        {
          strokeDasharray: pathLength,
          strokeDashoffset: this.arrow ? pathLength * 2 : 0
        },
        {
          strokeDashoffset: pathLength,
          duration: this.arrow ? 0.8 : this.duration,
          delay: this.delay,
          ease:
            this.ease || this.$CustomEase?.create('custom', '0.08,0.82,0.17,1')
        }
      )
    }
  }
}
</script>
