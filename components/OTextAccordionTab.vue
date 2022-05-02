/* eslint-disable no-undef */
<template>
  <li class="py-6 lg:py-8 border-b border-gray-400 border-primary-hover">
    <UseDynamicAction
      :class="{
        'text-secondary': isActive
      }"
      class="flex w-full justify-between text-left"
      @click.native="handleTabClick"
    >
      <BaseHeadline v-if="header" v-bind="header" />
      <component :is="isActive ? 'IconMinus' : 'IconPlus'" class="min-w-max" />
    </UseDynamicAction>
    <div ref="contentWrapper" class="h-0 overflow-hidden">
      <BaseSubline
        v-if="bodytext"
        v-bind="bodytext"
        class="invisible mt-6 lg:mt-10 lg:mb-4"
      />
      <MActionBar
        v-if="actions"
        :actions="actions"
        position="left"
        class="mt-7 lg:mt-14 lg:mb-4"
      />
    </div>
  </li>
</template>
<script setup>
import {
  ref,
  computed,
  useContext,
  watch,
  onMounted
} from '@nuxtjs/composition-api'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  actions: {
    type: Array,
    default: null
  },
  bodytext: {
    type: Object,
    default: null
  },
  header: {
    type: Object,
    default: null
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

/** notify parent of click event */
const emit = defineEmits(['tab-clicked'])
const handleTabClick = () => {
  emit('tab-clicked', { id: props.id })
}

/** init animation on mounted */
const { $gsap, $CustomEase } = useContext()
const tl = $gsap.timeline({
  paused: true
})

const contentWrapper = ref(null)
const content = computed(() => contentWrapper.value?.children)
const initTimeline = () => {
  const ease = $CustomEase?.create('custom', '0.65,0.05,0.36,1')
  tl.fromTo(
    contentWrapper.value,
    {
      height: 0
    },
    {
      height: 'auto',
      duration: 1,
      ease
    },
    0.15
  ).fromTo(
    content.value,
    {
      opacity: 0,
      autoAlpha: 0,
      y: -12
    },
    {
      opacity: 1,
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease
    },
    '-=0.2'
  )
}

onMounted(() => {
  const interval = setInterval(() => {
    if (content.value) {
      initTimeline()
      clearInterval(interval)
    }
  }, 50)
})

/** watch active state to trigger opening / closing animation */
watch(
  () => props.isActive,
  isActive => {
    if (isActive) {
      openTab()
    } else {
      closeTab()
    }
  }
)

const openTab = () => {
  $gsap.to(window, {
    scrollTo: { y: contentWrapper.value, offsetY: isLg.value ? 300 : 200 }
  })
  tl.play()
}

const closeTab = () => {
  tl.timeScale(1.5).reverse()
}
</script>
