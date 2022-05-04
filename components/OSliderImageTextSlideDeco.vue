<template>
  <li
    ref="target"
    class="lg:grid lg:grid-cols-[minmax(auto,440px),auto] lg:gap-x-16 3xl:gap-x-28 w-screen whitespace-normal invisible lg:visible"
    :class="
      isActive ? 'relative z-10 order-1' : 'absolute top-0 left-0 order-2'
    "
  >
    <div
      ref="textBox"
      class="mx-6 xl:mx-auto flex flex-col lg:justify-center lg:pl-6"
    >
      <BaseOverline
        v-if="slide.overline"
        :text="slide.overline"
        class="mb-4 lg:invisible"
      />
      <BaseHeadline
        v-if="slide.header.text"
        v-bind="slide.header"
        class="mb-6 md:mb-10 lg:invisible"
      />
      <BaseSubline
        v-if="slide.subline"
        :text="slide.subline"
        :layout="2"
        class="mb-6 lg:invisible"
      />
      <MActionBar
        v-if="slide.actions"
        :actions="slide.actions"
        position="left"
        class="mb-10 lg:invisible"
      />
      <div v-if="hasArrow" class="lg:invisible self-end mb-4 lg:mb-0">
        <BaseDecoArrowRight v-if="isLg" :delay="1.6" />
        <BaseDecoArrowLeft v-else :delay="0.8" />
      </div>
    </div>
    <div
      ref="imageWrapper"
      class="relative lg:invisible lg:flex"
      :class="{
        'before:hidden lg:before:block lg:before:rounded-lg before:content-[\'\'] before:w-full before:h-full before:absolute before:z-20 before:top-0 before:left-0 before:bg-gradient-to-b before:from-transparent before:via-transparent':
          hasGradient,
        'before:to-white/75': hasGradient && !isDark,
        'before:to-primary/50': hasGradient && isDark
      }"
    >
      <div
        ref="overlay"
        class="hidden lg:block absolute top-0 left-0 w-full h-full bg-white z-30"
      />
      <img :src="image" :srcset="srcset" class="lg:rounded-lg" />
    </div>
  </li>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
export default {
  props: {
    slide: {
      type: Object,
      default: undefined
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isLg = breakpoints.greater('lg')

    const target = ref(null)
    const isVisible = useIntersectionObserver({ target })

    return { breakpoints, isLg, target, isVisible }
  },
  computed: {
    image() {
      if (!this.slide.image || this.slide.image.length === 0) {
        return ''
      }
      return this.slide.image[1].cdn?.publicUrl
    },
    srcset() {
      if (this.slide.image) {
        const src = this.slide.image[1].cdn?.publicUrl

        return `
          ${src}?tr=fo-auto,w-375 375w,
          ${src}?tr=fo-auto,w-768 768w,
          ${src}?tr=fo-auto,w-1024 1024w,
          ${src}?tr=fo-auto,w-1920
          `
      }

      return ''
    },
    hasGradient() {
      return this.slide.gradient !== 'none'
    },
    isDark() {
      return this.slide.gradient === 'dark'
    },
    hasArrow() {
      return this.slide.decor && this.slide.decor === 'arrow'
    }
  },
  watch: {
    isActive(isActive) {
      this.initSlideAnimation({ isActive, isSlideChange: true })
    },
    isVisible() {
      this.initSlideAnimation()
    },
    isLg(isLg) {
      if (!this.isVisible) return
      this.initSlideAnimation({ isSlideChange: true })
    }
  },
  methods: {
    initSlideAnimation({
      isActive = this.isActive,
      isSlideChange = false
    } = {}) {
      if (this.isLg) {
        this.initSlideDesktopAnimation({ isActive, isSlideChange })
      } else {
        this.initSlideMobileAnimation({ isActive, isSlideChange })
      }
    },
    initSlideMobileAnimation({ isActive, isSlideChange }) {
      const tl = this.$gsap.timeline()
      const { target, imageWrapper, textBox } = this.$refs
      this.$gsap.set(target, {
        autoAlpha: 0,
        opacity: 0
      })
      if (isActive) {
        tl.to(target, {
          opacity: 1,
          autoAlpha: 1
        })
          .fromTo(
            textBox.children,
            {
              autoAlpha: 0,
              opacity: 0,
              x: -24
            },
            {
              autoAlpha: 1,
              opacity: 1,
              x: 0,
              stagger: 0.2,
              duration: 0.8,
              delay: 0.3,
              ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
            },
            '<'
          )
          .fromTo(
            imageWrapper,
            {
              opacity: 0,
              autoAlpha: 0,
              scale: 1.05
            },
            {
              opacity: 1,
              autoAlpha: 1,
              duration: 1,
              scale: 1,
              delay: isSlideChange ? 0.5 : 0,
              ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
            },
            '0'
          )
      }
      if (!isActive && isSlideChange) {
        this.$gsap.to(target, {
          opacity: 0,
          autoAlpha: 0,
          duration: 0.3,
          ease: this.$CustomEase?.create('custom', '0.55,0.08,0.68,0.53')
        })
      }
    },
    initSlideDesktopAnimation({ isActive, isSlideChange }) {
      const tl = this.$gsap.timeline()
      const { target, overlay, imageWrapper, textBox } = this.$refs
      this.$gsap.set(target, { autoAlpha: 1, opacity: 1 })
      if (isActive) {
        tl.to(overlay, {
          scaleX: 0,
          transformOrigin: 'right',
          duration: 1,
          delay: 0.5,
          ease: this.$CustomEase?.create('custom', '0.22,0.61,0.36,1')
        })
        tl.fromTo(
          imageWrapper,
          { scale: 1.05, autoAlpha: 0, opacity: 0 },
          {
            autoAlpha: 1,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            transformOrigin: 'left',
            ease: this.$CustomEase?.create('custom', '0.22,0.61,0.36,1')
          },
          '<'
        )
        this.$gsap.fromTo(
          textBox.children,
          {
            autoAlpha: 0,
            opacity: 0,
            x: -24
          },
          {
            autoAlpha: 1,
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.8,
            delay: 0.6,
            ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
          },
          '<'
        )
      }
      if (!isActive && isSlideChange) {
        tl.to(overlay, {
          scaleX: 1,
          transformOrigin: 'left',
          duration: 0.8,
          ease: this.$CustomEase?.create('custom', '0.22,0.61,0.36,1')
        })
        tl.to(
          imageWrapper,
          {
            opacity: 0,
            scale: 1.05,
            transformOrigin: 'left',
            duration: 0.8,
            ease: this.$CustomEase?.create('custom', '0.22,0.61,0.36,1')
          },
          '<'
        )
        this.$gsap.to(
          textBox.children,
          {
            autoAlpha: 0,
            opacity: 0,
            x: -24,
            stagger: 0.1,
            duration: 0.3,
            ease: this.$CustomEase?.create('custom', '0.55,0.08,0.68,0.53')
          },
          '<'
        )
      }
    }
  }
}
</script>
