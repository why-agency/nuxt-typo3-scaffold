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
import { useStore, computed } from '@nuxtjs/composition-api'
const store = useStore()
const isMenuVisible = computed(() => store.state.ui.isMenuVisible)
const hasNav = computed(() => store.getters['ui/getNavObject'])
</script>
