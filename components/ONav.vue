<template>
  <section v-if="hasNav">
    <!-- START TOP NAV -->
    <ONavTopMobile />
    <transition
      enter-class="opacity-0"
      enter-active-class="transition duration-700"
      enter-to-class="opacity-100"
    >
      <ONavTop />
    </transition>
    <!-- END TOP NAV -->

    <!-- START DROPDOWN NAV -->
    <ONavMenuDesktop v-if="isMenuVisible" />
    <transition
      enter-class="opacity-0 transform -translate-x-1/3"
      enter-active-class="transition ease-out duration-500"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform -translate-x-1/3"
      leave-active-class="transition ease-in duration-300"
    >
      <ONavMenuMobile v-if="isMenuVisible" />
    </transition>
    <!-- END DROPDOWN NAV -->
  </section>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { watch, useStore, computed } from '@nuxtjs/composition-api'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

const store = useStore()
const activeCategory = computed(() => store.state.ui.activeCategory)
const isMenuVisible = computed(() => store.state.ui.isMenuVisible)
const hasNav = computed(() => store.getters['ui/getNavObject'])

// hide overlay & disable scroll-lock when switching from mobile 1st level expanded (no active category!) to desktop
watch(isLg, isLg => {
  if (isMenuVisible.value && isLg && !activeCategory.value) {
    store.dispatch('ui/closeMenu')
  }
})
</script>
