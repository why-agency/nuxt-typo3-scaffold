<template>
  <div
    class="
      lg:hidden
      fixed
      top-20
      pt-2
      z-50
      w-full
      h-full
      bg-white
      px-6
      pb-20
      overflow-y-scroll
      flex flex-col
    "
  >
    <!--START BACK BUTTON & DIRECT LINK TO CURRENT CATEGORY-->
    <div ref="backButton">
      <div
        v-if="activeCategory"
        class="flex space-between items-center -ml-2 mt-6 mb-12"
      >
        <div class="flex items-center flex-1" @click="goBack">
          <BaseButtonIcon variant="transparent" class="border-none w-6">
            <IconChevronLeftFat />
          </BaseButtonIcon>
          <div
            class="
              text-nav-main-expanded-mobile
              uppercase
              font-secondary font-bold
            "
          >
            {{ currentActiveCategory.title }}
          </div>
        </div>
        <UseDynamicAction :to="activeCategory.link">
          <IconArrowRightMedium />
        </UseDynamicAction>
      </div>
    </div>
    <!--END BACK BUTTON-->

    <!--START NAV LINKS-->
    <div class="flex-1 flex flex-col mt-6 space-y-7">
      <div
        v-for="(navLink, index) in currentNav"
        :key="index"
        ref="navLinks"
        class="invisible"
      >
        <ONavLink
          :item="navLink"
          :level="(activeCategory && currentLevel) || 1"
          :is-direct-link="!navLink.children"
          class="pb-7 w-full"
        >
          {{ navLink.title }}
        </ONavLink>
      </div>
    </div>
    <!--END NAV LINKS-->

    <!--START CONTEXT & SOCIAL NAV-->
    <div
      v-if="!activeCategory"
      ref="navContext"
      class="bg-black mt-10 -mx-6 pt-6 pb-10 invisible"
    >
      <MSocialIconBar
        v-if="navSocial"
        :icons="navSocial"
        variant="transparent"
        color="white"
        class="space-x-10 justify-center mb-8"
      />
      <div
        v-if="navContext"
        class="flex justify-center space-x-6 text-white text-nav-bottom-mobile"
      >
        <UseDynamicAction
          v-for="navContextLink in navContext"
          :key="navContextLink.text"
          :to="navContextLink.link.url"
        >
          {{ navContextLink.text }}
        </UseDynamicAction>
      </div>
    </div>
    <!--END CONTEXT & SOCIAL NAV-->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('ui', [
      'activeCategory',
      'activeSecondaryCategory',
      'activeTertiaryCategory'
    ]),

    ...mapGetters({
      navMain: 'ui/getNavMainInner',
      navContext: 'ui/getNavContext',
      navSocial: 'ui/getNavSocial'
    }),
    currentActiveCategory() {
      return (
        this.activeTertiaryCategory ||
        this.activeSecondaryCategory ||
        this.activeCategory
      )
    },
    currentNav() {
      return this.currentActiveCategory?.children || this.navMain
    },

    currentLevel() {
      return this.activeTertiaryCategory
        ? 4
        : this.activeSecondaryCategory
        ? 3
        : 2
    }
  },
  watch: {
    currentNav(currentNav) {
      if (currentNav) {
        this.initRevealAnimation()
      }
    },
    activeCategory: {
      immediate: true,
      handler() {
        this.focusNextLevel()
      }
    },
    activeSecondaryCategory() {
      this.focusNextLevel()
    },
    activeTertiaryCategory() {
      this.focusNextLevel()
    }
  },
  mounted() {
    this.initRevealAnimation()
  },
  methods: {
    focusNextLevel() {
      const navLinks = this.$refs.navLinks
      if (navLinks && navLinks.length) {
        const firstNavLink = navLinks[0].querySelector('a')
        setTimeout(() => {
          firstNavLink.focus()
        }, 500)
      }
    },
    initRevealAnimation() {
      this.$nextTick(() => {
        this.$gsap.fromTo(
          Object.values(this.$refs),
          {
            opacity: 0,
            autoAlpha: 0,
            x: -30
          },
          {
            opacity: 1,
            autoAlpha: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.06,
            delay: 0.2
          }
        )
      })
    },
    goBack() {
      if (this.activeTertiaryCategory) {
        this.$store.commit('ui/SET_ACTIVE_TERTIARY_CATEGORY')
      } else if (this.activeSecondaryCategory) {
        this.$store.commit('ui/SET_ACTIVE_SECONDARY_CATEGORY')
      } else {
        this.$store.commit('ui/SET_ACTIVE_CATEGORY')
      }
      this.initRevealAnimation()
    }
  }
}
</script>
