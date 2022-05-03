<template>
  <section
    ref="target"
    class="grid lg:grid-cols-[344px,1fr,488px] 2xl:grid-cols-[344px,1fr,632px] lg:gap-y-24"
  >
    <div ref="tabHeader" class="lg:col-span-2 lg:self-end lg:mr-32">
      <BaseHeadline
        v-if="header.text"
        v-bind="header"
        class="mb-10 invisible"
      />
      <MActionBar
        v-if="actions"
        :actions="actions"
        position="left"
        class="my-8 lg:mt-14 lg:mb-0 invisible"
      />
    </div>
    <div
      v-if="activeTab && hasImage"
      ref="imageWrapper"
      class="hidden lg:block lg:invisible justify-self-end relative"
      :class="
        isLandscape
          ? 'lg:w-[488px] 2xl:w-[632px] transform 4xl:translate-x-20'
          : 'lg:w-[304px] 2xl:w-[368px]'
      "
    >
      <BasePicture
        :images="activeTab.image"
        :srcsets="srcsets"
        class="rounded"
      />
      <div
        ref="overlay"
        class="absolute top-0 left-0 w-full h-full bg-white z-10"
        aria-hidden="true"
      />
      <BaseDecoCircle
        v-if="hasDeco"
        class="!absolute -left-16 -top-16 px-0 w-20 w-28 2xl:w-32 z-20"
      />
    </div>
    <OTabTabbar
      ref="tabbar"
      :tabs="formattedTabs"
      :is-large="isLarge"
      class="lg:row-start-2 invisible"
      @tab-clicked="onTabClicked"
    >
      <template #mobileTabContent>
        <OTabContent
          v-if="activeTab"
          :tab="activeTab"
          :has-image="hasImage"
          :srcsets="srcsets"
          :has-deco="hasDeco"
          class="lg:hidden"
        />
      </template>
    </OTabTabbar>
    <OTabContent
      v-if="activeTab"
      ref="textWrapper"
      :tab="activeTab"
      class="hidden lg:block"
    />
  </section>
</template>

<script setup>
import {
  ref,
  computed,
  watch,
  provide,
  useContext
} from '@nuxtjs/composition-api'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

/** props */
const props = defineProps({
  actions: {
    type: Array,
    default: null
  },
  header: {
    type: Object,
    default: null
  },
  tabs: {
    type: Array,
    required: true
  },
  variant: {
    type: String,
    default: 'images'
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

/** visibility */
const target = ref(null)
const isVisible = useIntersectionObserver({ target })

/** format tabs */
const formattedTabs = computed(() =>
  props.tabs.map(tab => ({ id: tab.id, ...tab.content }))
)

/** SET / TOGGLE ACTIVE TAB */
const activeTab = ref(null)
const hasTabChanged = ref(false)

watch(isVisible, isVisible => {
  activeTab.value = formattedTabs.value[0]
  initRevealAnimation()
})

async function onTabClicked({ tab }) {
  await hideInactiveTab()
  if (!hasTabChanged.value) {
    hasTabChanged.value = true
  }
  activeTab.value = tab
  displayActiveTab()
}

/** IMAGE SETTINGS */
const isLandscape = computed(() => activeTab.value?.image?.[0].ratio === '5:3')
const srcsets = computed(() => ({
  mobileSrc: ['?tr=w-375 375w', '?tr=w-640 640w'],
  tabletSrc: ['?tr=w-768 768w'],
  desktopSrc: [
    `?tr=w-${isLandscape.value ? '488' : '304'} 1440w`,
    `?tr=w-${isLandscape.value ? '632' : '424'}`
  ]
}))

/** MODULE VARIANTS */
const hasImage = computed(() => props.variant === 'images')
const hasDeco = computed(() => activeTab.value?.decor === 'circle')
const isLarge = computed(() => props.tabs.length <= 5 && !hasImage.value)

/** START ANIMATION */
const { $CustomEase } = useContext()
const tl = gsap.timeline()
// "deco" animation settings override:
provide('delay', ref(0))
provide('duration', isLg ? ref(1) : ref(0))

// animated elements:
const overlay = ref(null)
const imageWrapper = ref(null)
const textWrapper = ref(null)
const getTextContent = textWrapper =>
  textWrapper.value.$children.map(child => child.$el)
const tabHeader = ref(null)
const tabbar = ref(null)

// component reveal animation on page load
const initRevealAnimation = () => {
  displayHeaderAndTabbar()
  displayActiveTab()
}

// on load (header, tabbar)
const displayHeaderAndTabbar = () => {
  const interval = setInterval(() => {
    if (tabHeader.value && tabbar.value) {
      tl.fromTo(
        [...tabHeader.value.children, tabbar.value.$el],
        {
          autoAlpha: 0,
          opacity: 0,
          x: -28
        },
        {
          autoAlpha: 1,
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
        },
        '<'
      )
      clearInterval(interval)
    }
  }, 50)
}

// on load & on tab change (active tab content)
const displayActiveTab = () => {
  const revealText = textWrapper => {
    return tl.fromTo(
      getTextContent(textWrapper),
      {
        autoAlpha: 0,
        opacity: 0,
        x: 24
      },
      {
        autoAlpha: 1,
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
      },
      hasImage.value ? '<' : '>'
    )
  }

  const interval = setInterval(() => {
    if (overlay?.value && imageWrapper?.value && textWrapper?.value) {
      tl.to(
        overlay.value,
        {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 0.8,
          ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
        },
        hasTabChanged.value ? '>' : '<'
      ).fromTo(
        imageWrapper.value,
        { scale: 1.05, autoAlpha: 0, opacity: 0 },
        {
          autoAlpha: 1,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          transformOrigin: 'right',
          ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
        },
        '<'
      )
      tl.add(revealText(textWrapper), '>-0.3')
      clearInterval(interval)
    } else if (textWrapper?.value) {
      tl.add(revealText(textWrapper), hasTabChanged.value ? '>-0.3' : '<')
      clearInterval(interval)
    }
  }, 50)
}

// on tab change (previous active tab content)
const hideInactiveTab = () =>
  tl
    .to(overlay.value, {
      scaleX: 1,
      transformOrigin: 'right',
      duration: 0.5,
      ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
    })
    .to(
      imageWrapper.value,
      {
        opacity: 0,
        scale: 1.05,
        transformOrigin: 'right',
        duration: 0.5,
        ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
      },
      '<'
    )
    .to(
      getTextContent(textWrapper),
      {
        autoAlpha: 0,
        opacity: 0,
        x: -24,
        duration: 0.4,
        ease: $CustomEase.create('custom', '0.22,0.61,0.36,1')
      },
      '<'
    )
/** END ANIMATION */
</script>
