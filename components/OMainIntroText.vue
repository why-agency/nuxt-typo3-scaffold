<template>
  <div
    ref="textWrapper"
    class="relative z-20 flex flex-col justify-end px-6 pt-8 pb-10 lg:p-16 xl:px-24 xl:pt-24 3xl:pb-20 dark:text-white"
    :class="{
      [backgroundColor]: hasBackground,
      'lg:w-full 2xl:pb-32 3xl:pb-44': isImageFullScreen,
      'lg:order-first 4xl:pl-0': !isTextRight,
      'lg:order-last 4xl:pr-0 items-end': isTextRight,
      'lg:h-full xl:h-[calc(100%-56px)] 2xl:h-[calc(100%-76px)] 5xl:h-[calc(100%-120px)] 5xl:pb-28':
        !isImageFullScreen,
      'frame-default': is4xl && isImageFullScreen,
      invisible: isAnimated
    }"
  >
    <div :class="{ 'max-w-[618px]': isImageFullScreen }" :style="textPadding">
      <div ref="text" :class="{ invisible: isAnimated }">
        <BaseHeadline
          v-if="header"
          v-bind="header"
          tag="h1"
          class="mb-6 3xl:mb-12"
        />
        <BaseSubline v-if="bodytext" v-bind="bodytext" />
      </div>
      <MActionBar
        v-if="actions"
        ref="actions"
        :actions="actions"
        position="left"
        class="mt-16 xl:mt-6 4xl:mt-24"
        :class="{
          invisible: isAnimated,
          'mt-8': !isLg && !isImageFullScreen,
          'lg:gap-6': !isImageFullScreen && isTextRight
        }"
      />
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import {
  useBreakpoints,
  useIntersectionObserver,
  breakpointsTailwind
} from '@vueuse/core'
import { useBackgroundColor } from '@/composables/useBackgroundColor'

export default {
  props: {
    header: {
      type: Object,
      default: undefined
    },
    bodytext: {
      type: Object,
      default: undefined
    },
    actions: {
      type: Array,
      default: undefined
    },
    isTextRight: {
      type: Boolean,
      default: false
    },
    isImageFullScreen: {
      type: Boolean,
      default: false
    },
    isAnimated: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: 'none'
    },
    textPadding: {
      type: [Object, String],
      default: undefined
    }
  },
  setup(props) {
    const backgroundColor = useBackgroundColor(props.background)

    const breakpoints = useBreakpoints({ ...breakpointsTailwind, '4xl': 1920 })
    const isLg = breakpoints.greater('lg')
    const is4xl = breakpoints.greater('4xl')

    const isVisible = ref(false)
    const textWrapper = ref(null)
    const { stop } = useIntersectionObserver(
      textWrapper,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          stop()
        }
        isVisible.value = isIntersecting
      },
      { threshold: 0.5 }
    )

    return {
      backgroundColor,
      breakpoints,
      isLg,
      is4xl,
      textWrapper,
      isVisible
    }
  },
  computed: {
    hasBackground() {
      return !this.isImageFullScreen && this.background !== 'none'
    }
  },
  watch: {
    isVisible(isVisible) {
      if (!this.isAnimated || !isVisible) {
        return
      }
      const { text, actions } = this.$refs
      const tl = this.$gsap.timeline()
      if (this.isLg) {
        this.initDesktopAnimation(tl, text, actions?.$el)
      } else {
        this.initMobileAnimation(tl, text, actions?.$el)
      }
    }
  },
  methods: {
    initDesktopAnimation(tl, text, actions) {
      const offsetText = this.isTextRight ? '-100px' : '100px'
      tl.from(text, {
        opacity: 0,
        autoAlpha: 0,
        duration: 0.8,
        x: offsetText,
        delay: 1.2,
        ease: this.$CustomEase.create('custom', '0.22,0.61,0.36,1')
      })
      if (actions) {
        tl.from(
          actions,
          {
            opacity: 0,
            autoAlpha: 0,
            delay: 0.75,
            duration: 0.6,
            x: this.isTextRight ? '-25px' : '25px',
            ease: this.$CustomEase.create('custom', '0.25,0.46,0.45,0.94')
          },
          '<'
        )
      }
    },
    initMobileAnimation(tl, text, actions) {
      tl.from([text, actions], {
        opacity: 0,
        autoAlpha: 0,
        x: this.isTextRight ? '-25px' : '25px',
        duration: 1,
        delay: 0.6,
        ease: this.$CustomEase.create('custom', '0.25,0.46,0.45,0.94')
      })
    }
  }
}
</script>
