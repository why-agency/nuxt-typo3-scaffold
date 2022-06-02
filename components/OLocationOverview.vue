<template>
  <div class="relative">
    <!-- START locations map -->
    <OLocationOverviewMap
      :header="locationMap.header"
      :text="locationMap.text"
    />
    <!-- END locations map -->

    <!-- START filter bar -->
    <OLocationOverviewFilterBarDesktop v-if="isLg" />
    <OLocationOverviewFilterBarMobile v-else />
    <!-- END filter bar -->

    <!-- START locations grid -->
    <div
      v-if="isRequestPending"
      class="grid gap-6 mt-10 frame-default md:grid-cols-2 lg:grid-cols-3 md:mt-16 xl:mt-20 xxl:mt-32 xl:gap-10 xxl:grid-cols-4 xxxl:gap-20"
      aria-hidden="true"
    >
      <div class="col-span-full animate-pulse">
        <div class="w-1/3 mb-4 bg-gray-100 h-7" />
        <div class="hidden w-1/4 mb-2 bg-gray-100 md:block h-7" />
      </div>
      <MCardSkeleton
        v-for="card in 8"
        :key="card"
        class="border border-gray-200 w-[298px]"
      >
        <template #actions>
          <div class="w-1/2 h-6 bg-gray-100" />
        </template>
      </MCardSkeleton>
    </div>

    <div v-else class="frame-default">
      <OLocationOverviewGrid
        v-if="locations.length"
        :locations="locations"
        headline="Locations"
      />

      <OLocationOverviewGrid
        v-if="GSEs.length"
        :locations="GSEs"
        headline="GSE"
      />

      <OLocationOverviewGrid
        v-if="dsGroupLocations.length"
        :locations="dsGroupLocations"
        headline="DS Groups"
      />

      <OLocationOverviewGrid
        v-if="factories.length"
        :locations="factories"
        headline="Factories"
      />
    </div>
    <!-- END locations grid -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default {
  props: {
    documents: {
      type: Object,
      required: true
    },
    currentSearch: {
      type: String,
      default: ''
    },
    facets: {
      type: Array,
      default: () => []
    },
    locationMap: {
      type: Object,
      default: undefined
    }
  },
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind)

    const isLg = breakpoints.greater('lg')

    return { isLg }
  },
  data() {
    return {
      unsubscribeFromLocationUpdates: null
    }
  },
  computed: {
    ...mapState('locations', ['isRequestPending']),
    ...mapGetters({
      markers: 'locations/getMarkers',
      factories: 'locations/getFactories',
      GSEs: 'locations/getGSEs',
      locations: 'locations/getLocations',
      dsGroupLocations: 'locations/getDsGroupLocations'
    })
  },
  mounted() {
    this.initLocations()
    this.initFilters()
  },
  created() {
    this.subscribeToLocationUpdates()
  },
  beforeDestroy() {
    this.unsubscribeFromLocationUpdates()
  },
  methods: {
    initLocations() {
      const locations =
        this.documents?.list?.results.map(
          rawLocations => rawLocations.content
        ) || []
      const url = new URL(this.currentSearch)

      this.$store.commit('locations/SET_LOCATIONS', locations)
      this.$store.commit('locations/SET_REQUEST_URL', url.origin + url.pathname)
    },
    initFilters() {
      if (!this.facets || !this.facets.length) {
        return
      }

      const filters = this.facets.map(filter => ({
        ...filter,
        options: filter.options.map(option => ({
          link: option.link,
          value: option.value,
          label: option.label,
          parent: filter.name
        }))
      }))

      this.$store.commit('locations/SET_AVAILABLE_FILTERS', filters)
    },
    subscribeToLocationUpdates() {
      const subscribedMutations = ['locations/SET_ACTIVE_FILTERS']
      this.unsubscribeFromLocationUpdates = this.$store.subscribe(
        async mutation => {
          if (subscribedMutations.includes(mutation.type)) {
            await this.$store.dispatch('locations/getLocations')
          }
        }
      )
    }
  }
}
</script>
