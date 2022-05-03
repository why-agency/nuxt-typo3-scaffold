<template>
  <section
    ref="target"
    class="grid xl:grid-cols-[minmax(586px,663px),1fr] overflow-hidden"
    :class="{
      'invisible xl:visible xl:items-end xl:bg-transparent': hasHeaderImage,
      [backgroundColor]: backgroundColor,
      'pt-12 md:pt-16 xl:pt-24': backgroundColor && !hasHeaderImage
    }"
  >
    <!--START HEADER-->
    <div
      class="relative flex flex-col mb-12 xl:mb-0"
      :class="{ 'xl:mt-14': !hasHeaderImage, 'xl:visible': hasHeaderImage }"
    >
      <div class="relative flex flex-col">
        <BasePicture
          v-if="image"
          :images="image[0]"
          :srcsets="srcsets"
          :breakpoints="{ tablet: 768, desktop: 1280 }"
          :sizes="sizes"
          :class="imgGradient"
        />
        <BaseHeadline
          v-bind="header"
          ref="headline"
          class="
            invisible
            max-w-[100vw]
            px-6
            xl:max-w-auto xl:px-0 xl:pr-0 xl:pl-24
          "
          :class="{
            'absolute bottom-5 xl:top-16 max-w-[calc(100vw-48px)] xl:max-w-[516px]':
              hasHeaderImage,
            'text-white': hasDarkGradient
          }"
        />
      </div>
      <div
        ref="text"
        class="
          invisible
          mt-8
          max-w-[100vw]
          px-6
          md:max-w-screen-sm
          xl:max-w-[516px] xl:pr-0 xl:pl-24 xl:mt-12
        "
        :class="{
          'xl:absolute xl:bottom-20': hasHeaderImage,
          'xl:text-white': hasDarkGradient
        }"
      >
        <BaseSubline v-if="bodytext.text" v-bind="bodytext" />
        <MActionBar
          v-if="actions"
          :actions="actions"
          position="left"
          class="mt-8"
          :class="{ 'xl:mt-16': !hasHeaderImage }"
        />
      </div>
      <div
        ref="overlay"
        class="hidden xl:block absolute top-0 left-0 w-full h-full bg-white"
        :class="{ 'xl:hidden': !hasHeaderImage }"
      />
    </div>
    <!--END HEADER-->

    <!--START SLIDER-->
    <div
      ref="carousel"
      class="invisible relative overflow-hidden"
      :class="[
        hasHeaderImage
          ? `xl:pl-32 xl:h-[784px] ${backgroundColor} xl:flex flex-col justify-end`
          : 'xl:pl-24'
      ]"
    >
      <OCarousel
        v-bind="settings"
        class="max-w-[100vw] ml-6"
        @change="onChange"
      >
        <MCard
          v-for="(card, index) in formattedCards"
          ref="card"
          :key="card.header.text"
          :is-text-card="hasTextCards"
          :is-active="currentSlide === index"
          v-bind="card"
        />
        <template #bullets="{ go, slidesCount }">
          <portal :to="`${id}-bullets`">
            <OCarouselBullets
              class="!visible !static"
              :slides="slidesCount"
              :current-slide="currentSlide"
              :with-slide-list="withSlideList"
              @slide-updated="go"
            />
          </portal>
        </template>
        <template #controls="{ go }">
          <portal :to="`${id}-controls`">
            <OCarouselControls class="!visible !static" :go="go" />
          </portal>
        </template>
      </OCarousel>
      <div
        ref="controls"
        class="
          invisible
          flex
          justify-between
          xl:space-x-10
          my-12
          mx-6
          xl:mr-24 xl:justify-end xl:mt-20
        "
        :class="{ 'xl:my-20': hasHeaderImage }"
      >
        <portal-target :name="`${id}-bullets`" />
        <portal-target :name="`${id}-controls`" />
      </div>
    </div>
    <!--END SLIDER-->
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ref, computed, watch, useContext } from '@nuxtjs/composition-api'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { useBackgroundColor } from '@/composables/useBackgroundColor'

/** PROPS */
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  actions: {
    type: Array,
    default: undefined
  },
  background: {
    type: String,
    default: 'none'
  },
  bodytext: {
    type: Object,
    default: undefined
  },
  cards: {
    type: Array,
    default: undefined
  },
  header: {
    type: Object,
    default: undefined
  },
  image: {
    type: Array,
    default: undefined
  },
  imagegradient: {
    type: String,
    default: 'light'
  },
  variant: {
    type: String,
    default: 'text'
  }
})

/** breakpoints */
const breakpoints = useBreakpoints(breakpointsTailwind)
const isXl = breakpoints.greater('xl')

/** slider type based on CARD TYPE */
const hasTextCards = computed(
  () => props.variant === 'text' || props.variant === 'm_01_02__card_text'
)

/** slider type based on HEADER TYPE */
const hasHeaderImage = computed(() => props.image)

/** slider settings */
const settings = {
  perView: 1,
  perTouch: 1,
  gap: 72,
  bullets: true,
  animationTimingFunc: 'cubic-bezier(0.23, 1, 0.32, 1)',
  animationDuration: 700,
  breakpoints: {
    1023: {
      gap: 40
    }
  },
  slideWidth: { mobile: 272, desktop: 344 }
}

/** UPDATE CURRENT SLIDE */
const currentSlide = ref(0)
const onChange = payload => {
  currentSlide.value = payload
}

/** should slider "DOTS" display? */
const withSlideList = computed(
  () =>
    !!(
      (isXl.value && props.cards.length < 7) ||
      (!isXl.value && props.cards.length < 5)
    )
)

/** format slides */
const formattedCards = computed(() => {
  const cards = props.cards?.map(card => ({
    ...card.content
  }))
  if (props.variant !== 'projectlist' && props.variant !== 'projectcategory') {
    return cards
  }
  return cards.map(card => ({
    id: card.id,
    image: card.image,
    imageCropVariant: 'portrait',
    header: { text: card.title, layout: 5 },
    link: { url: card.url },
    overline: [card.location?.city, card.location?.country]
      .filter(item => item)
      .join(', ')
  }))
})

/** HEADER IMAGE SETTINGS */
const srcsets = {
  mobileSrc: ['?tr=w-375 375w', '?tr=w-640 640w'],
  tabletSrc: ['?tr=w-768 768w', '?tr=w-1024 1024w', '?tr=w-1280 1280w'],
  desktopSrc: ['?tr=w-663']
}
const sizes = '(max-width: 1279px) 100vw, 663px'

/** slider STYLES */
const hasDarkGradient = computed(
  () => hasHeaderImage.value && props.imagegradient === 'dark'
)
const imgGradient = computed(() => [
  "before:block before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-transparent",
  {
    'xl:before:from-white/20 before:to-white/80':
      props.imagegradient === 'light',
    'xl:before:from-primary/20 before:to-primary/80':
      props.imagegradient === 'dark'
  }
])
const backgroundColor = useBackgroundColor(props.background)

/** animated elements */
const target = ref(null)
const isVisible = useIntersectionObserver({ target })
const carousel = ref(null)
const controls = ref(null)
const overlay = ref(null)
const card = ref(null)
const headline = ref(null)
const text = ref(null)

/** REVEAL module */
const { $CustomEase } = useContext()
const reveal = () => {
  const tl = gsap.timeline({
    ease: $CustomEase?.create('custom', '0.22,0.61,0.36,1')
  })
  const cards = card.value.map(card => card.$el)

  if (props.image && isXl.value) {
    tl.to(overlay.value, {
      scaleX: 0,
      transformOrigin: 'right',
      duration: 1
    })
    tl.set(target.value, { autoAlpha: 1 })
  } else {
    tl.set(overlay.value, { display: 'none' })
  }
  if (props.image && !isXl.value) {
    tl.from(target.value, {
      opacity: 0,
      autoAlpha: 0,
      duration: 0.8
    })
  }
  tl.from(
    [headline?.value.$el, text?.value].filter(el => el),
    {
      opacity: 0,
      autoAlpha: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.3
    }
  )
    .from(
      cards,
      {
        autoAlpha: 0,
        duration: 0.6,
        opacity: 0,
        x: 30,
        stagger: 0.3
      },
      '<+=0.4'
    )
    .from(
      carousel.value,
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 1
      },
      0.5
    )
    .from(
      controls?.value,
      {
        opacity: 0,
        autoAlpha: 0,
        duration: 0.8
      },
      '<+=1.1'
    )
}
watch(isVisible, reveal)
</script>
