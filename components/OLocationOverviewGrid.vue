<template>
  <div class="mt-10 md:mt-16 xl:mt-20 xxl:mt-32">
    <BaseHeadline :level="4" tag="h2">
      {{ $t(headline) }}
    </BaseHeadline>

    <!-- START grid -->
    <template v-if="isMd">
      <ul
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 xl:gap-10 xxl:grid-cols-4 xxxl:gap-20"
      >
        <OLocationOverviewGridCard
          v-for="(location, index) in locationsToDisplay"
          :key="location.title + index"
          v-bind="location"
        />
      </ul>

      <div class="flex mt-10 gap-6">
        <BaseButton
          v-if="isMoreToDisplay"
          variant="text"
          color="black"
          @click="currentPage++"
        >
          {{ $t('Show more results') }}
        </BaseButton>

        <BaseButton
          v-if="currentPage > 1"
          variant="text"
          color="black"
          @click="currentPage--"
        >
          {{ $t('Show less') }}
        </BaseButton>
      </div>
    </template>
    <!-- END grid -->

    <!-- START mobile slider -->
    <OCarousel v-else v-bind="carouselSettings" class="mt-6 -mr-6">
      <OLocationOverviewGridCard
        v-for="(location, index) in locations"
        :key="location.title + index"
        v-bind="location"
        class="glide_slide"
      />
    </OCarousel>
    <!-- END mobile slider -->
  </div>
</template>

<script setup>
import { computed, ref } from '@nuxtjs/composition-api'

import { useBreakpoints } from '@vueuse/core'

const props = defineProps({
  locations: {
    type: Array,
    default: () => []
  },
  headline: {
    type: String,
    default: ''
  }
})

const breakpoints = useBreakpoints({ sm: 640, xl: 1280, '2xl': 1440 })
const isMd = breakpoints.greater('sm')
const isXl = breakpoints.greater('xl')
const is2xl = breakpoints.greater('2xl')

const carouselSettings = {
  perView: 1,
  startAt: 0,
  gap: 24,
  peek: { before: 0, after: 160 },
  controls: false,
  bound: true,
  breakpoints: {
    479: {
      peek: { before: 0, after: 80 },
      gap: 16
    }
  }
}

const currentPage = ref(1)

const locationsToDisplay = computed(() => {
  if (is2xl.value) {
    return props.locations.slice(0, 12 * currentPage.value)
  }

  if (isXl.value) {
    return props.locations.slice(0, 9 * currentPage.value)
  }

  if (isMd.value) {
    return props.locations.slice(0, 6 * currentPage.value)
  }

  return props.locations
})

const isMoreToDisplay = computed(
  () => props.locations.length > locationsToDisplay.value.length
)
</script>
