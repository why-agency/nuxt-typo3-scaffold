<template>
  <section :class="theme">
    <div class="dark:text-white">
      <BaseHeadline v-if="header.text" v-bind="header" class="mb-6 lg:mb-12" />
      <MActionBar v-if="actions" :actions="actions" position="left" />
      <ul class="flex flex-col mt-6 lg:mt-24">
        <o-03-04-TextAccordionTab
          v-for="tab in formattedTabs"
          :key="tab.id"
          v-bind="tab"
          :is-active="tab.id === isActive"
          @tab-clicked="toggleActiveTab"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from '@nuxtjs/composition-api'

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
  appearance: {
    type: Object,
    default: () => ({ background: 'none' })
  }
})
/** format tabs */
const formattedTabs = computed(() =>
  props.tabs.map(tab => ({ id: tab.id, ...tab.content }))
)

/** toggle active tab */
const isActive = ref(null)
const toggleActiveTab = ({ id }) => {
  if (isActive.value !== id && isActive.value) {
    // delay opening tab while another tab is closing
    isActive.value = null
    setTimeout(() => {
      isActive.value = id
    }, 1100)
  } else {
    // no delay needed to open tab if there are no open tabs or to close tab
    isActive.value = isActive.value === id ? null : id
  }
}

/** set frame, background, theme */
const theme = computed(() => ({
  dark: props.appearance?.background === 'bg-primary'
}))
</script>
