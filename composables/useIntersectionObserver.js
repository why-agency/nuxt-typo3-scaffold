import { useIntersectionObserver as _useIntersectionObserver } from '@vueuse/core'
import { ref } from '@nuxtjs/composition-api'

export const useIntersectionObserver = ({
  target,
  threshold = 0.25,
  once = true
} = {}) => {
  const isVisible = ref(false)

  const { stop } = _useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting && once) {
        stop()
      }
      isVisible.value = isIntersecting
    },
    { threshold }
  )

  return isVisible
}
