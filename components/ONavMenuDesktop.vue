<template>
  <section
    class="fixed z-50 hidden w-full h-full min-h-full overflow-y-scroll bg-black lg:grid grid-cols-[minmax(379px,30%),minmax(345px,29%),1fr] bg-opacity-30"
    @click="handleClick"
  >
    <!-- START close button -->
    <div
      ref="icons"
      class="absolute z-50 top-8 right-8 xxxl:top-14 xxxl:right-14"
    >
      <BaseButtonIcon size="xl" color="black" class="ml-4" @click="closeMenu">
        <IconCloseFat />
      </BaseButtonIcon>
    </div>
    <!-- END close button -->

    <!-- START column 1 -->
    <transition
      enter-class="opacity-0 transform -translate-x-1/3"
      enter-active-class="transition ease-out duration-500"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform -translate-x-1/3"
      leave-active-class="transition ease-in duration-300"
    >
      <ONavMenuDesktopColumn
        v-if="isMenuVisible"
        ref="level1"
        :level="1"
        class="bg-white"
        :active-category="{ children: navMain }"
        :active-item="activeCategory"
      >
        <template #header>
          <BaseLogo @click.native="closeMenu" />
        </template>

        <template #footer>
          <div
            class="flex flex-col pt-4 border-t border-gray-500 xxxl:pt-8"
            @click="closeMenu"
          >
            <BaseAction
              v-for="navItem in navContext"
              :key="navItem.text"
              variant="text"
              color="gray"
              :to="navItem.link.url"
            >
              {{ navItem.text }}
            </BaseAction>

            <MSocialIconBar :icons="navSocial" variant="transparent" />
          </div>
        </template>
      </ONavMenuDesktopColumn>
    </transition>
    <!-- END column 1 -->

    <!-- START column 2 -->
    <transition
      enter-class="opacity-0 transform -translate-x-1/3"
      enter-active-class="transition ease-out duration-500"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform -translate-x-1/3"
      leave-active-class="transition ease-in duration-300"
    >
      <ONavMenuDesktopColumn
        v-if="activeCategory"
        ref="level2"
        :active-category="activeCategory"
        :active-item="activeSecondaryCategory"
        class="bg-gray-100"
      />
    </transition>
    <!-- END column 2 -->

    <!-- START column 3 -->
    <transition
      enter-class="opacity-0 transform -translate-x-1/3"
      enter-active-class="transition ease-out duration-500"
      enter-to-class="opacity-100 transform translate-x-0"
      leave-to-class="opacity-0 transform -translate-x-1/3"
      leave-active-class="transition ease-in duration-300"
    >
      <ONavMenuDesktopColumn
        v-if="activeSecondaryCategory"
        ref="level3"
        :active-category="activeSecondaryCategory"
        :level="3"
        class="bg-gray-200"
      />
    </transition>
    <!-- END column 3 -->
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      isMenuVisible: false
    }
  },
  computed: {
    ...mapGetters({
      navMain: 'ui/getNavMainInner',
      navContext: 'ui/getNavContext',
      navSocial: 'ui/getNavSocial'
    }),
    ...mapState('ui', ['activeCategory', 'activeSecondaryCategory'])
  },
  watch: {
    isMenuVisible(isVisible) {
      if (isVisible) {
        this.focusNextLevel('level1')
      }
    },
    activeCategory: {
      immediate: true,
      handler() {
        this.focusNextLevel('level2')
      }
    },
    activeSecondaryCategory() {
      this.focusNextLevel('level3')
    }
  },
  mounted() {
    this.isMenuVisible = true
  },
  methods: {
    closeMenu() {
      this.$store.dispatch('ui/resetAllCategories')
      this.isMenuVisible = false
      setTimeout(() => {
        this.$store.dispatch('ui/closeMenu')
      }, 400)
    },
    handleClick(event) {
      if (!event.target.closest('.o-nav-menu-desktop__column')) {
        this.closeMenu()
      }
    },
    focusNextLevel(ref) {
      const interval = setInterval(() => {
        const col = this.$refs[ref]?.$el
        if (col) {
          col.querySelector('a')?.focus()
          clearInterval(interval)
        }
      }, 50)
    }
  }
}
</script>
