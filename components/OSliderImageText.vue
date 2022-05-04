<template>
  <section ref="target" :class="{ '-mx-6 xl:mx-auto mb-20 lg:mb-0': isDeco }">
    <OCarousel
      v-bind="settings"
      :bullets="true"
      class="relative"
      @change="onChange"
    >
      <template v-if="isDeco">
        <OSliderImageTextSlideDeco
          v-for="(slide, index) in formattedSlides"
          :key="index"
          :slide="slide"
          :variant="variant"
          :is-active="index === currentSlide"
        />
      </template>
      <template v-else>
        <OSliderImageTextSlide
          v-for="(slide, index) in formattedSlides"
          :key="index"
          :slide="slide"
          :variant="variant"
          :is-active="index === currentSlide"
        />
      </template>
      <template v-if="isSlider" #bullets="{ go, slidesCount }">
        <OCarouselBullets
          ref="bullets"
          :slides="slidesCount"
          :current-slide="currentSlide"
          :with-slide-list="withSlideList"
          :class="{
            dark: isDark,
            'lg:pl-10': !isBoxed,
            '-bottom-16 lg:bottom-8 right-6 lg:right-40': isDeco,
            'bottom-6 right-0 lg:left-40 xl:left-60 frame-default': !isDeco
          }"
          @slide-updated="go"
        />
      </template>
      <template v-if="isSlider" #controls="{ go }">
        <OCarouselControls
          ref="controls"
          :class="{
            'bottom-6 frame-default xl:w-full xl:left-1/2 xl:transform xl:-translate-x-1/2':
              !isDeco,
            '-bottom-16 lg:bottom-8 lg:left-auto lg:right-6': isDeco
          }"
          :isDark="isDark"
          :go="go"
        />
      </template>
    </OCarousel>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ref, computed, watch } from '@nuxtjs/composition-api'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

/** breakpoints */
const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

/** props */
const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  variant: {
    type: String,
    default: 'boxed'
  }
})

/** update current slide */
const currentSlide = ref(0)
const onChange = payload => {
  currentSlide.value = payload
}

/** carousel settings */
const settings = {
  type: 'slider',
  perView: 1,
  perTouch: 1,
  peek: 0,
  gap: 0,
  animationDuration: 2000
}
const withSlideList = computed(() => !!(isLg.value || props.slides.length < 5))
const formattedSlides = computed(() =>
  props.slides.map(slide => ({ ...slide.content }))
)

/** imageText variants */
const isDark = computed(
  () =>
    formattedSlides.value[currentSlide.value].gradient === 'dark' &&
    (!isDeco.value || (isDeco.value && isLg.value))
)
const isDeco = computed(() => props.variant === 'text-deco')
const isBoxed = computed(() => props.variant === 'boxed')
const isSlider = computed(() => props.slides?.length > 1)

/** animate carousel controls on visibility change */
const target = ref(null)
const bullets = ref(null)
const controls = ref(null)
const isVisible = useIntersectionObserver({ target })
watch(isVisible, () => {
  const timer = setInterval(() => {
    if (bullets?.value?.$el && controls?.value?.$el) {
      gsap.from([bullets?.value?.$el, controls?.value?.$el], {
        autoAlpha: 0,
        opacity: 0,
        duration: 0.8
      })
      clearInterval(timer)
    }
  }, 500)
})
</script>

<style lang="scss" scoped>
::v-deep {
  .glide__slides {
    transform: translate3d(0, 0, 0) !important;
  }
}
</style>
