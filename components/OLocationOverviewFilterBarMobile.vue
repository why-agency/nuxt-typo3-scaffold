<template>
  <div>
    <!-- START collapsed filter bar -->
    <transition
      enter-class="transform translate-y-10 opacity-0"
      enter-active-class="transition duration-300 ease-out"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
      leave-active-class="transition duration-100 ease-in"
    >
      <div
        v-if="!isFilterBarActive && reveal"
        class="fixed flex w-full h-12 px-8 bottom-10 z-60 drop-shadow-2xl"
      >
        <div class="flex items-center flex-1 px-4 bg-white">
          <BaseButton
            v-if="numberOfActiveFilters > 0"
            variant="text"
            color="gray"
            @click="$store.commit('locations/SET_ACTIVE_FILTERS', [])"
          >
            {{
              $tc('activeFilters', numberOfActiveFilters, {
                filters: numberOfActiveFilters
              })
            }}
            <template #iconSuffix>
              <IconClose class="w-2 h-2" />
            </template>
          </BaseButton>
          <span v-else>
            {{ $t('No filters selected') }}
          </span>
        </div>
        <BaseButtonIcon
          size="lg"
          :color="numberOfActiveFilters > 0 ? 'secondary' : 'darkGray'"
          @click="showFilterBar"
        >
          <IconFilter v-if="numberOfActiveFilters > 0" />
          <IconChevronDown v-else />
        </BaseButtonIcon>
      </div>
    </transition>
    <!-- END collapsed filter bar -->

    <!-- START active filter bar -->
    <transition
      enter-class="transform opacity-0 translate-y-80"
      enter-active-class="transition duration-300 ease-out"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full"
      leave-active-class="transition duration-300 ease-in"
    >
      <OLocationOverviewFilterBarMobileDetail v-if="isFilterBarActive" />
    </transition>
    <!-- END active filter bar -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  props: {
    reveal: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      numberOfActiveFilters: 'locations/getNumberOfActiveFilters'
    }),
    ...mapState('locations', ['isFilterBarActive'])
  },
  methods: {
    showFilterBar() {
      this.$store.commit('locations/TOGGLE_FILTER_BAR', { isActive: true })
      this.$scrollLock.enable()
    }
  }
}
</script>
