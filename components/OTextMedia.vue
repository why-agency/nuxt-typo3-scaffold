<template>
  <section ref="wrapper" class="lg:pb-20">
    <div
      class="grid lg:justify-center lg:gap-x-10 2xl:gap-x-0"
      :class="[$_gridStyle, $_theme]"
    >
      <div
        class="mb-14 lg:mb-0 lg:relative"
        :class="{
          'row-start-3 lg:row-start-1 lg:col-start-2 mt-16 lg:mt-0':
            isMediumRight
        }"
      >
        <div
          ref="imageCol"
          class="relative invisible 2xl:mr-28 4xl:mr-48"
          :class="{
            ' lg:max-w-full': isImageHigher,
            '2xl:mr-0 2xl:ml-28 4xl:mr-0 4xl:ml-48': isMediumRight
          }"
        >
          <BasePicture
            :images="image || previewImage"
            :sizes="sizes"
            :srcsets="srcsets"
            class="w-full"
          />
          <BaseButtonIcon
            v-if="previewImageSrc"
            color="secondary"
            class="absolute bottom-4 right-4"
            @click="openVideoPortal"
          >
            <IconVideoPlayFilled />
          </BaseButtonIcon>
        </div>
      </div>
      <div
        class="lg:row-start-1 lg:col-start-2 lg:relative"
        :class="[
          isMediumRight
            ? 'lg:col-start-1 row-start-2 2xl:ml-20'
            : 'row-start-3 2xl:mr-20'
        ]"
      >
        <div
          ref="textCol"
          class="dark:text-white max-w-[calc(100vw-48px)] lg:max-w-full"
        >
          <BaseHeadline
            v-if="header.text"
            ref="headline"
            v-bind="header"
            class="invisible max-w-full mb-6 break-words hyphens"
          />
          <div ref="text" class="invisible">
            <BaseSubline v-bind="bodytext" />
            <MActionBar
              v-if="actions"
              :actions="actions"
              class="flex-wrap mt-8 lg:flex"
              position="left"
            />
          </div>
        </div>
      </div>
    </div>
    <OLightboxPortal v-if="isLightboxVisible" @close="onClose">
      <div v-if="videoSrc" class="flex justify-center w-full">
        <BaseVideo
          :src="videoSrc"
          autoplay
          muted
          controls
          class="w-full lg:object-cover"
          style="max-height: 75vh"
        />
      </div>
      <BaseYouTubeVideo
        v-if="youTubeVideo"
        :video="youTubeVideo"
        class="w-full"
      />
    </OLightboxPortal>
  </section>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import {
  useBreakpoints,
  useElementSize,
  breakpointsTailwind,
  useIntersectionObserver
} from '@vueuse/core'
export default {
  props: {
    variant: {
      type: String,
      default: 'image'
    },
    position: {
      type: String,
      default: 'media-left'
    },
    image: {
      type: Array,
      default: () => {}
    },
    previewImage: {
      type: Array,
      default: () => {}
    },
    media: {
      type: Array,
      default: () => {}
    },
    videoStream: {
      type: Array,
      default: () => {}
    },
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
      default: () => {}
    },
    id: {
      type: String,
      default: ''
    },
    animation: {
      type: String,
      default: 'yes'
    },
    appearance: {
      type: Object,
      default: () => ({ background: 'none' })
    }
  },
  setup(props) {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isLg = breakpoints.greater('lg')
    const textCol = ref(null)
    const imageCol = ref(null)
    const { height: textHeight } = useElementSize(textCol)
    const { height: imageHeight } = useElementSize(imageCol)
    const wrapper = ref(null)
    const isVisible = ref(false)
    const { stop } = useIntersectionObserver(
      wrapper,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          stop()
        }
        isVisible.value = isIntersecting
      },
      { threshold: 0.25 }
    )
    return {
      isLg,
      textCol,
      textHeight,
      imageCol,
      imageHeight,
      wrapper,
      isVisible
    }
  },
  data() {
    return {
      isLightboxVisible: false,
      srcsets: {
        mobileSrc: ['?tr=w-640 640w'],
        tabletSrc: ['?tr=w-768 768w'],
        desktopSrc: ['?tr=w-780 1024w']
      }
    }
  },
  computed: {
    isMediumRight() {
      return this.position === 'media-right'
    },
    imageSrc() {
      if (
        !this.image ||
        this.image.length === 0 ||
        this.image[0].length === 0
      ) {
        return ''
      }
      return this.image[0][0].cdn?.publicUrl || ''
    },
    previewImageSrc() {
      if (
        !this.previewImage ||
        this.previewImage.length === 0 ||
        this.previewImage[0].length === 0
      ) {
        return ''
      }
      return this.previewImage[0][0].cdn?.publicUrl || ''
    },
    sizes() {
      return `(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 780px`
    },
    videoSrc() {
      if (
        this.variant !== 'video-upload' ||
        !this.media ||
        this.media.length === 0
      ) {
        return ''
      }
      return this.media[0]?.publicUrl || ''
    },
    youTubeVideo() {
      if (
        this.variant !== 'video-stream' ||
        !this.videoStream ||
        this.videoStream.length === 0
      ) {
        return
      }
      return this.videoStream[0].content
    },
    $_gridStyle() {
      return this.isMediumRight
        ? 'lg:grid-cols-[minmax(400px,580px),minmax(460px,780px)]'
        : 'lg:grid-cols-[minmax(460px,780px),minmax(400px,580px)]'
    },
    $_theme() {
      return {
        dark: this.appearance.background === 'bg-primary'
      }
    },
    isImageHigher() {
      return this.imageHeight > this.textHeight
    },
    columnScrolling() {
      return this.isImageHigher ? this.$refs.imageCol : this.$refs.textCol
    },
    columnFixed() {
      return this.isImageHigher ? this.$refs.textCol : this.$refs.imageCol
    },
    hasAnimation() {
      return this.animation === 'yes'
    }
  },
  watch: {
    isVisible(isVisible) {
      if (isVisible) {
        this.initRevealAnimation()
      }
    },
    imageHeight: {
      immediate: true,
      handler() {
        if (!this.hasAnimation) return
        const scrollTriggers = this.$ScrollTrigger?.getAll()
        if (scrollTriggers && scrollTriggers.length) {
          scrollTriggers.forEach(st => {
            if (st.vars.id && st.vars.id.includes(this.id)) {
              st.kill()
            }
          })
        }
        setTimeout(this.initScrollAnimation, 1000)
      }
    }
  },
  mounted() {
    this.setParentOverflow()
  },
  methods: {
    openVideoPortal() {
      this.isLightboxVisible = true
    },
    onClose() {
      this.isLightboxVisible = false
    },
    initRevealAnimation() {
      const tl = this.$gsap.timeline()
      const offsetImage = this.isMediumRight ? 30 : -30
      const offsetText = this.isMediumRight ? -30 : 30
      const { imageCol, headline, text } = this.$refs
      if (this.isLg) {
        tl.from(imageCol, {
          opacity: 0,
          autoAlpha: 0,
          x: offsetImage,
          duration: 0.6
        })
        tl.from(
          headline?.$el,
          { opacity: 0, autoAlpha: 0, x: offsetText, duration: 0.6 },
          '<'
        )
        tl.from(text, {
          opacity: 0,
          autoAlpha: 0,
          x: offsetText,
          duration: 0.6
        })
      } else {
        this.$gsap.utils
          .toArray([imageCol, headline?.$el, text])
          .forEach(element => {
            tl.from(element, {
              opacity: 0,
              autoAlpha: 0,
              y: 30,
              duration: 1,
              ease: 'power2.out'
            })
          })
      }
    },
    initScrollAnimation() {
      const {
        $gsap,
        columnScrolling,
        columnFixed,
        $refs: { wrapper },
        id
      } = this
      if (!this.$ScrollTrigger) {
        return
      }
      this.$ScrollTrigger.matchMedia({
        '(min-width: 1024px)'() {
          const offset = columnScrolling.clientHeight - columnFixed.clientHeight
          // pull the longer colum up by offset (difference between columns' height) to vertically align the bottom of both columns
          $gsap.fromTo(
            columnScrolling,
            { y: 0 },
            {
              y: -offset,
              ease: 'none',
              scrollTrigger: {
                id: `${id}-scroller`,
                trigger: columnFixed,
                start: 'top bottom-=200',
                scrub: 1
              }
            }
          )
          // at the same time push the component down by offset to prevent overlapping with th``e previous module
          $gsap.fromTo(
            wrapper,
            { y: 0 },
            {
              y: offset + 80,
              ease: 'none',
              scrollTrigger: {
                id: `${id}-wrapper`,
                trigger: columnFixed,
                start: 'top bottom-=200',
                scrub: 1
              }
            }
          )
        }
      })
    },
    setParentOverflow() {
      const wrapper = this.$refs?.wrapper
      const frame = wrapper?.parentElement
      frame.classList.add('lg:overflow-y-hidden')
    }
  }
}
</script>
<style scoped>
iframe {
  min-height: 30vh;
}
@media (orientation: landscape) {
  iframe {
    min-height: 75vh;
  }
}
</style>
