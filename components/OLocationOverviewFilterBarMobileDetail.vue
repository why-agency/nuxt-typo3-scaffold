<template>
  <div
    class="fixed top-0 left-0 flex flex-col items-end justify-between w-screen h-full min-h-[stretch] grid-cols-1 gap-4 px-6 py-5 overflow-y-scroll bg-white z-60"
  >
    <BaseButtonIcon
      color="lightGray"
      size="sm"
      class="justify-self-end"
      @click="hideFilterBar"
    >
      <IconClose />
    </BaseButtonIcon>

    <!-- START filters -->
    <div class="flex-1 w-full">
      <div class="pb-6 mt-10 border-b border-gray-500">
        <BaseHeadline :level="6" :text="typeFilter.label" />
        <BaseDropdown
          v-model="filterByType"
          :placeholder="$t('Select a location type')"
          :options="typeFilter.options"
          hide-border
          class="!bg-gray-100 w-80 mt-6"
        >
          <template #selectedValue="{ value }">
            <div class="flex h-[53px] items-center pr-6 w-full">
              <IconGeotag class="w-4 h-4 mr-2" />
              <span class="line-clamp-1">{{ value }}</span>
            </div>
          </template>
        </BaseDropdown>
      </div>
      <template v-if="!isCountryWithoutFilter">
        <div class="pb-6 mt-10">
          <BaseHeadline :level="6" :text="countryFilter.label" />
          <BaseDropdown
            v-model="filterByCountry"
            :placeholder="$t('Select a country')"
            :options="countryFilter.options"
            hide-border
            class="!bg-gray-100 w-80 mt-6"
          >
            <template #selectedValue="{ value }">
              <div class="flex h-[53px] items-center pr-6 w-full">
                <IconGeotag class="w-4 h-4 mr-2" />
                <span class="line-clamp-1">{{ value }}</span>
              </div>
            </template>
          </BaseDropdown>
        </div>
      </template>
    </div>

    <BaseButton
      class="mt-6"
      variant="filled"
      color="secondary"
      block
      @click="hideFilterBar"
    >
      {{ $t('Apply filters') }}
      <template #iconSuffix>
        <IconArrowRight class="w-3 h-3" />
      </template>
    </BaseButton>

    <!-- END filters -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { useCountryPage } from '@/composables/countries'
export default {
  setup() {
    const { isCountryWithoutFilter } = useCountryPage()

    return { isCountryWithoutFilter }
  },
  computed: {
    ...mapState('locations', ['activeFilters']),
    ...mapGetters({
      countryFilter: 'locations/getCountryFilter',
      typeFilter: 'locations/getTypeFilter'
    }),
    filterByType: {
      get() {
        return this.activeFilters.find(
          filter => filter.parent === 'locationtype'
        )
      },
      set(value) {
        const activeFilters = this.activeFilters.filter(
          filter => filter.parent !== 'locationtype'
        )
        this.$store.commit('locations/SET_ACTIVE_FILTERS', [
          ...activeFilters,
          value
        ])
      }
    },
    filterByCountry: {
      get() {
        return this.activeFilters.find(filter => filter.parent === 'country')
      },
      set(value) {
        const activeFilters = this.activeFilters.filter(
          filter => filter.parent !== 'country'
        )
        this.$store.commit('locations/SET_ACTIVE_FILTERS', [
          ...activeFilters,
          value
        ])
      }
    }
  },
  methods: {
    hideFilterBar() {
      this.$store.commit('locations/TOGGLE_FILTER_BAR', { isActive: false })
      this.$scrollLock.disable()
    }
  }
}
</script>
