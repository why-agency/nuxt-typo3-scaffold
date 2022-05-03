<template>
  <section
    ref="intro"
    class="relative grid overflow-hidden"
    :class="$_gridStyle"
  >
    <div ref="imageWrapper" :class="$_imgWrapperStyle">
      <div
        v-if="!isImageFullScreen && isAnimated"
        ref="overlay"
        class="absolute top-0 left-0 hidden w-full h-full bg-white lg:block"
      />
      <img
        v-if="defaultImage"
        :alt="defaultImage.properties.alternative"
        :src="defaultImage.cdn.publicUrl"
        :srcset="srcset"
        sizes="100vw"
        :width="defaultImage.properties.dimensions.width"
        :height="defaultImage.properties.dimensions.height"
        class="object-cover lg:h-full"
        :class="$_imgStyle"
      />
    </div>
    <OMainIntroText
      ref="textWrapper"
      :header="header"
      :bodytext="bodytext"
      :actions="actions"
      :is-text-right="isTextRight"
      :is-image-full-screen="isImageFullScreen"
      :is-animated="isAnimated"
      :background="background"
      :text-padding="$_textPadding"
    />
    <slot />
  </section>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import {
  useBreakpoints,
  breakpointsTailwind,
  useElementSize,
  useIntersectionObserver
} from '@vueuse/core'

export default {
  props: {
    variant: {
      type: String,
      default: 'dark'
    },
    alignment: {
      type: String,
      default: 'text-left'
    },
    imagevariant: {
      type: String,
      default: 'image-cropped'
    },
    background: {
      type: String,
      default: 'none'
    },
    animation: {
      type: String,
      default: 'no'
    },
    header: {
      type: Object,
      default: undefined
    },
    bodytext: {
      type: Object,
      default: undefined
    },
    image: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: undefined
    }
  },
  setup(props) {
    const breakpoints = useBreakpoints({ ...breakpointsTailwind, '4xl': 1920 })
    const isMd = breakpoints.greater('md')
    const isLg = breakpoints.greater('lg')
    const is4xl = breakpoints.greater('4xl')

    const intro = ref(null)
    const { width } = useElementSize(intro)

    const isVisible = ref(false)
    const { stop } = useIntersectionObserver(
      intro,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          stop()
        }
        isVisible.value = isIntersecting
      },
      { threshold: 0.5 }
    )

    return {
      breakpoints,
      isMd,
      isLg,
      is4xl,
      intro,
      width,
      isVisible
    }
  },
  computed: {
    defaultImage() {
      return this.image && this.image.length
        ? this.image.find(variant =>
            this.cropVariantDefault.includes(variant.useCase)
          )
        : null
    },
    cropVariantDefault() {
      if (this.isImageFullScreen) {
        return ['desktop']
      } else if (!this.isImageFullScreen && !this.isTextRight) {
        return ['crop']
      } else {
        return ['wide', 'default']
      }
    },
    cropVariantMobile() {
      return !this.isMd && !this.isImageFullScreen
        ? ['mobil', 'mobile']
        : ['desktop']
    },
    srcset() {
      if (this.image) {
        const src = this.defaultImage?.cdn.publicUrl
        const mobileSrc =
          this.image.find(variant =>
            this.cropVariantMobile.includes(variant.useCase)
          )?.cdn.publicUrl || src

        return `
        ${mobileSrc}?tr=w-375 375w,
        ${mobileSrc}?tr=w-640 640w,
        ${mobileSrc}?tr=w-768 768w,
        ${src}?tr=w-1280 1280w,
        ${src}?tr=w-1600 1600w,
        ${src}?tr=w-1920 1920w,
        ${src} 2600w
        `
      }

      return ''
    },
    isImageFullScreen() {
      return this.imagevariant === 'image-fullscreen'
    },
    isTextRight() {
      return this.alignment === 'text-right'
    },
    isAnimated() {
      return this.animation === 'yes'
    },
    $_gridStyle() {
      return {
        dark: this.variant === 'dark' && this.isImageFullScreen,
        'h-screen lg:h-auto w-screen lg:aspect-w-16 lg:aspect-h-9':
          this.isImageFullScreen,
        'lg:grid-cols-[minmax(50%,55%),auto] 3xl:grid-cols-[minmax(55%,60%),auto] 4xl:grid-cols-[minmax(1314px,1fr),1fr]':
          !this.isImageFullScreen && this.isTextRight,
        'lg:grid-cols-[auto,minmax(50%,55%)] 4xl:grid-cols-[1fr,minmax(1025px,1fr)]':
          !this.isImageFullScreen && !this.isTextRight
      }
    },
    $_imgStyle() {
      return {
        'xl:rounded-bl-lg': !this.isImageFullScreen && !this.isTextRight,
        'xl:rounded-br-lg': !this.isImageFullScreen && this.isTextRight,
        'h-full w-full object-cover': this.isImageFullScreen,
        'max-h-screen 2xl:h-auto': !this.isImageFullScreen
      }
    },
    $_imgWrapperStyle() {
      return [
        ...this.$_imgGradient,
        {
          'h-screen w-screen absolute left-0': this.isImageFullScreen,
          invisible: this.isAnimated,
          relative: !this.isImageFullScreen,
          'lg:row-start-1 lg:row-end-3':
            !this.isImageFullScreen && this.isTextRight && this.$slots?.default
        }
      ]
    },
    $_imgGradient() {
      return this.isImageFullScreen
        ? [
            "before:block before:content-[''] before:w-screen before:h-full before:absolute before:z-20 before:top-0 before:left-0 before:bg-gradient-to-b before:from-primary/20",
            {
              'lg:before:bg-gradient-to-r': this.isTextRight,
              'lg:before:bg-gradient-to-l': !this.isTextRight,
              'before:to-white/75 lg:before:via-white/75 4xl:before:via-white/50 4xl:before:to-white/75':
                this.variant === 'light',
              'before:to-primary/75 lg:before:via-primary/75 4xl:before:via-primary/50 4xl:before:to-primary/75':
                this.variant === 'dark'
            }
          ]
        : ''
    },
    // "align" text content with default frame
    $_textPadding() {
      const contentPadding = (this.width - 1720) / 2 + 'px'
      if (this.is4xl && !this.isImageFullScreen) {
        return {
          paddingRight: this.isTextRight ? contentPadding : 0,
          paddingLeft: this.isTextRight ? 0 : contentPadding
        }
      }
      return ''
    }
  },
  watch: {
    isVisible(isVisible) {
      if (!this.isAnimated || !isVisible) {
        return
      }
      const { imageWrapper, overlay, textWrapper } = this.$refs
      const tl = this.$gsap.timeline()
      if (this.isLg) {
        this.initDesktopAnimation(tl, imageWrapper, textWrapper?.$el, overlay)
      } else {
        this.initMobileAnimation(tl, imageWrapper, textWrapper?.$el, overlay)
      }
    }
  },
  methods: {
    initDesktopAnimation(tl, imageWrapper, textWrapper, overlay) {
      if (!this.isImageFullScreen) {
        tl.set(imageWrapper, { zIndex: 30 })
        tl.to(overlay, {
          scaleX: 0,
          transformOrigin: this.isTextRight ? 'right' : 'left',
          duration: 1.4,
          delay: 0.1,
          ease: this.$CustomEase.create('custom', '0.08,0.82,0.17,1')
        })
        tl.to(
          overlay,
          {
            autoAlpha: 0,
            duration: 0.1,
            delay: 1.4,
            ease: this.$CustomEase.create('custom', '0.08,0.82,0.17,1')
          },
          0
        )
        tl.from(
          imageWrapper,
          {
            autoAlpha: 0,
            opacity: 0,
            scale: 1.3,
            transformOrigin: this.isTextRight ? 'right' : 'left',
            duration: 1.2,
            ease: this.$CustomEase.create('custom', '0.08,0.82,0.17,1')
          },
          0
        )
      } else {
        tl.from(imageWrapper, {
          opacity: 0,
          autoAlpha: 0,
          scale: 1.1,
          duration: 1.5,
          ease: this.$CustomEase.create('custom', '0.46,0.03,0.52,0.96')
        })
      }
      tl.from(
        textWrapper,
        {
          opacity: 0,
          autoAlpha: 0,
          delay: 1.2,
          duration: this.isImageFullScreen ? 0.6 : 0.4,
          ease: this.$CustomEase.create('custom', '0.46,0.03,0.52,0.96')
        },
        0
      )
    },
    initMobileAnimation(tl, imageWrapper, textWrapper, overlay) {
      tl.set(overlay, { display: 'none' })
      tl.from(imageWrapper, {
        opacity: 0,
        autoAlpha: 0,
        scale: 1.1,
        duration: 1,
        ease: this.$CustomEase.create('custom', '0.08,0.82,0.17,1')
      })
      tl.from(textWrapper, {
        opacity: 0,
        autoAlpha: 0,
        duration: 1
      })
    }
  }
}
</script>
