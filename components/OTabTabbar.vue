<template>
  <ul class="flex flex-col lg:mr-24 3xl:mr-20">
    <li v-for="tab in tabs" :key="tab.id" class="border-b border-primary-hover">
      <UseDynamicAction
        :class="{
          'text-secondary': isActive(tab.id),
          'text-gray-400': !isLarge && !isActive(tab.id),
          'border-gray-400 py-6': isLarge,
          'py-4': !isLarge
        }"
        class="flex w-full justify-between items-center text-left"
        @click.native="handleTabClick(tab)"
      >
        <BaseHeadline v-if="isLarge" :layout="5" :text="tab.title" />
        <BaseSubline
          v-else
          :layout="2"
          :text="tab.title"
          class="font-semibold"
        />
        <component
          :is="isActive(tab.id) ? 'IconMinus' : 'IconPlus'"
          class="lg:hidden"
        />
      </UseDynamicAction>
      <div v-if="isActive(tab.id)" ref="contentWrapper" class="h-0">
        <slot name="mobileTabContent" />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, watch, computed, useContext } from '@nuxtjs/composition-api'
import { gsap } from 'gsap'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
/** props */
const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  isLarge: {
    type: Boolean,
    default: true
  }
})
/** emits */
const emit = defineEmits(['tab-clicked'])
/** breakpoints */
const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')
/** set active tab on page load / resize */
const activeTab = ref(null)
const isActive = id => id === activeTab.value?.id
const activateTab = tab => (activeTab.value = tab)
watch(isLg, isLg => {
  activeTab.value = isLg ? props.tabs[0] : null
})
/** TOGGLE ACTIVE TAB */
const handleTabClick = async tab => {
  if (isLg.value) {
    activateTab(tab)
  } else if (!isLg.value && tab.id !== activeTab.value?.id) {
    // inactive tab clicked on mobile
    await openMobileTab(tab)
  } else {
    // active tab clicked on mobile
    closeMobileTab()
  }
  emit('tab-clicked', { tab: activeTab.value })
}
/** START MOBILE ACCORDION ANIMATION */
const { $CustomEase } = useContext()
const tl = gsap.timeline({
  ease: $CustomEase?.create('custom', '0.65,0.05,0.36,1')
})
const contentWrapper = ref(null)
const content = computed(() => contentWrapper.value?.[0]?.children)
const initTimeline = () => {
  tl.fromTo(
    contentWrapper.value,
    {
      height: 0
    },
    {
      height: 'auto',
      duration: 1
    },
    0.15
  ).from(
    content.value,
    {
      opacity: 0,
      autoAlpha: 0,
      duration: 0.7,
      y: -12
    },
    '-=0.2'
  )
}
const resetTimeline = async () => {
  tl.reverse().timeScale(1.5)
  await tl.reverse()
  return tl.clear()
}
const openMobileTab = async tab => {
  if (activeTab.value) {
    await resetTimeline()
  }
  activateTab(tab)
  const interval = setInterval(() => {
    if (content.value) {
      initTimeline()
      gsap.to(window, { scrollTo: { y: content.value, offsetY: 132 } })
      tl.play()
      clearInterval(interval)
    }
  }, 50)
}
const closeMobileTab = async () => {
  await resetTimeline()
  activeTab.value = null
}
/** END MOBILE ACCORDION ANIMATION */
</script>
