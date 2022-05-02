<template>
  <section :class="[frame, theme, backgroundColor]">
    <div class="dark:text-white" :class="backgroundColor && contentFrame">
      <BaseHeadline v-if="header.text" v-bind="header" class="mb-6 lg:mb-12" />
      <MActionBar v-if="actions" :actions="actions" position="left" />
      <ul class="flex flex-col mt-6 lg:mt-24">
        <OTextAccordionTab
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
import { useBackgroundColor } from '@/composables/useBackgroundColor'


const props = defineProps({
  actions: {
    type: Array,
    default: null
  },
  background: {
    type: String,
    default: 'none'
  },
  header: {
    type: Object,
    default: null
  },
  tabs: {
    type: Array,
    required: true
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
/** set content width */
const contentFrame = computed(() =>
  props.appearance?.frameClass === 'default' ? 'frame-default' : 'frame-small'
)
/** set frame, background, theme */
const backgroundColor = computed(() => useBackgroundColor(props.background))
const theme = computed(() => ({ dark: props.background === 'primary' }))
const frame = computed(() => ({ 'frame-full-bg': props.background !== 'none' }))



</script>