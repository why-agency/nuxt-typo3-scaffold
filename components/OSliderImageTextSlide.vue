<template>
  <li
    ref="target"
    class="
      invisible
      h-[calc(100vh-64px)]
      w-screen
      lg:h-screen
      whitespace-normal
    "
    :class="[
      { dark: isDark && !isBoxed },
      isActive ? 'relative z-20 order-1' : 'absolute top-0 left-0 order-2'
    ]"
  >
    <div class="frame-default block">
      <div
        ref="textBox"
        class="
          relative
          flex flex-col
          z-10
          px-4
          py-6
          my-6
          md:px-10 md:py-12
          lg:mt-20
          dark:text-white
          rounded-lg
          lg:w-[416px]
        "
        :class="{
          'lg:invisible bg-white box-shadow': isBoxed,
          'lg:w-[800px]': !isBoxed
        }"
      >
        <nuxt-link
          v-if="url"
          :to="url"
          class="absolute left-0 top-0 h-full w-full z-10"
        />
        <BaseOverline
          v-if="slide.overline"
          :text="slide.overline"
          class="mb-4 lg:invisible"
        />
        <BaseHeadline
          v-if="slide.header.text"
          v-bind="slide.header"
          class="mb-6 md:mb-10 invisible"
        />
        <BaseSubline
          v-if="slide.subline"
          :text="slide.subline"
          :layout="2"
          class="mb-10 lg:invisible"
        />
        <div
          v-if="slide.actions"
          class="lg:invisible"
          :class="{ 'self-end relative z-10': isBoxed }"
        >
          <BaseAction v-if="isBoxed" :to="action.url" variant="text">
            <BaseButtonIcon :color="action.color" :variant="action.variant">
              <component :is="action.icon" />
            </BaseButtonIcon>
          </BaseAction>
          <MActionBar v-else :actions="slide.actions" position="left" />
        </div>
      </div>
    </div>
    <div
      ref="imageWrapper"
      class="absolute w-screen h-screen top-0 z-0 lg:invisible"
      :class="{
        'before:block before:content-[\'\'] before:w-screen before:h-full before:absolute before:z-20 before:top-0 before:left-0 before:bg-gradient-to-b before:from-primary/20 lg:before:bg-gradient-to-l':
          hasGradient,
        'before:to-white/75': hasGradient && !isDark,
        'before:to-primary/75': hasGradient && isDark
      }"
    >
      <img
        :src="image"
        :srcset="srcset"
        class="w-screen h-screen object-cover"
      />
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
      required: true
    },
    variant: {
      type: String,
      default: 'boxed'
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
      return this.isLg
        ? this.slide.image[0].cdn?.publicUrl
        : this.slide.image[2].cdn?.publicUrl
    },
    srcset() {
      if (this.slide.image) {
        const mobileSrc = this.slide.image[2]?.cdn?.publicUrl
        const src = this.slide.image[0].cdn?.publicUrl

        return `
          ${mobileSrc}?tr=fo-auto,w-375 375w,
          ${mobileSrc}?tr=fo-auto,w-768 768w,
          ${this.isLg ? src : mobileSrc}?tr=fo-auto,w-1024 1024w,
          ${src}?tr=fo-auto,w-1920
          `
      }

      return ''
    },
    isBoxed() {
      return this.variant === 'boxed'
    },
    isDark() {
      return this.slide.gradient === 'dark'
    },
    action() {
      const { actions } = this.slide
      if (!actions || !actions.length || !actions[0].content?.link?.url) {
        return null
      }
      const { content } = actions[0]
      return {
        url: content.link?.url,
        color: content.color,
        variant: content.variant,
        icon: content.icon ? `Icon${content.icon?.name}` : 'IconArrowRight'
      }
    },
    url() {
      return this.isBoxed && this.action?.url
    },
    hasGradient() {
      return this.slide.gradient !== 'none'
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
    initSlideDesktopAnimation({ isActive, isSlideChange }) {
      const tl = this.$gsap.timeline()
      const { target, imageWrapper, textBox } = this.$refs
      this.$gsap.set(target, { autoAlpha: 1, opacity: 1 })
      if (isActive) {
        tl.fromTo(
          imageWrapper,
          {
            opacity: 0,
            autoAlpha: 0,
            scale: 1.05
          },
          {
            opacity: 1,
            autoAlpha: 1,
            scale: 1,
            duration: 1.2,
            delay: this.isBoxed && isSlideChange ? 0.4 : 0.4,
            ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
          }
        )
        if (this.isBoxed) {
          tl.fromTo(
            textBox,
            {
              autoAlpha: 0,
              scaleX: 0,
              transformOrigin: 'left'
            },
            {
              autoAlpha: 1,
              scaleX: 1,
              duration: 0.8,
              ease: this.$CustomEase?.create('custom', '0.08,0.82,0.17,1')
            },
            '<+=0.5'
          )
        }
        tl.fromTo(
          textBox.children,
          {
            autoAlpha: 0,
            opacity: 0,
            x: -30
          },
          {
            autoAlpha: 1,
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
          },
          '<+=0.25'
        )
      }
      if (!isActive && isSlideChange) {
        tl.to(imageWrapper, {
          opacity: 0,
          autoAlpha: 0,
          scale: 1.05,
          duration: 0.8,
          ease: this.$CustomEase?.create('custom', '0.55,0.08,0.68,0.53')
        })
        tl.to(
          textBox.children,
          {
            autoAlpha: 0,
            opacity: 0,
            x: this.isLg ? -30 : -10,
            stagger: 0.1,
            duration: 0.3,
            ease: this.$CustomEase?.create('custom', '0.55,0.08,0.68,0.53')
          },
          '<'
        )
        if (this.isBoxed) {
          tl.to(
            textBox,
            {
              autoAlpha: 0,
              scaleX: 0,
              transformOrigin: 'right',
              duration: 0.4,
              ease: this.$CustomEase?.create('custom', '0.55,0.08,0.68,0.53')
            },
            '<+=0.5'
          )
        }
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
        }).fromTo(
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
            delay: isSlideChange ? 0.25 : 0,
            ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
          },
          '<'
        )
        if (this.isBoxed) {
          tl.fromTo(
            textBox,
            {
              autoAlpha: 0,
              scaleX: 0,
              transformOrigin: 'left'
            },
            {
              autoAlpha: 1,
              scaleX: 1,
              duration: 0.8,
              ease: this.$CustomEase?.create('custom', '0.08,0.82,0.17,1')
            },
            '<+=0.5'
          )
        }
        tl.fromTo(
          textBox.children,
          {
            autoAlpha: 0,
            opacity: 0,
            x: -8
          },
          {
            autoAlpha: 1,
            opacity: 1,
            x: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: this.$CustomEase?.create('custom', '0.25,0.46,0.45,0.94')
          },
          '<+=0.25'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0 31px 70px rgba(0, 0, 0, 0.15);
}
</style>
