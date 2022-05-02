<template>
  <div ref="text">
    <transition
      name="copytextFadeIn"
      enter-class="opacity-0 translate-y-8"
      enter-active-class="transition duration-1000 ease-intro"
    >
      <div v-show="isVisible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  props: {
    delay: {
      type: Number,
      default: 0
    }
  },
  setup(observer) {
    const text = ref(null)
    const targetIsVisible = ref(false)
    const { stop } = useIntersectionObserver(
      text,
      ([{ isIntersecting }]) => {
        targetIsVisible.value = isIntersecting
        if (isIntersecting) {
          stop()
        }
      },
      {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.5
      }
    )

    return {
      text,
      targetIsVisible,
      stop
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  watch: {
    targetIsVisible(isVisible) {
      if (isVisible) {
        setTimeout(() => {
          this.isVisible = true
        }, this.delay * 1000)
      }
    }
  }
}
</script>
