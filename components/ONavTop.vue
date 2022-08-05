<template>
  <div
    ref="navWrapper"
    class="hidden lg:block fixed top-0 z-40 w-full"
    :class="{ 'lg:hidden': isMenuVisible }"
  >
    <div
      ref="navbar"
      class="flex items-center justify-between space-x-14 bg-white px-14 py-7 shadow-light relative z-10"
    >
      <!--START NAV LEFT-->
      <BaseLogo ref="logo" @click.native="closeMenu" />
      <!--END NAV LEFT-->

      <!--START NAV CENTER-->
      <nav ref="nav" class="flex-1">
        <ul class="flex items-center space-x-6 2xl:space-x-10">
          <li v-for="navLink in navMain" :key="navLink.link" ref="navLink">
            <ONavLink
              :item="navLink"
              :is-active="activeCategory === navLink"
              :is-direct-link="!navLink.children"
            >
              <BaseButtonIcon
                v-if="navLink.style === 'icon'"
                variant="transparent"
                color="grayDark"
              >
                <IconCalendar class="w-4" />
              </BaseButtonIcon>
              <span v-else>{{ navLink.title }}</span>
            </ONavLink>
          </li>
        </ul>
      </nav>
      <!--END NAV CENTER-->

      <!--START NAV RIGHT-->
      <div class="flex items-center space-x-6 2xl:space-x-10">
        <BaseAction
          ref="menuBtn"
          variant="text"
          size="large"
          color="black"
          @click.native="openMenu"
        >
          <template #iconPrefix>
            <IconMenuFat />
          </template>
          <div class="font-bold text-nav ml-1">MENU</div>
        </BaseAction>
      </div>
      <!--END NAV RIGHT-->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const tl = ref(null)
    return { tl }
  },
  computed: {
    ...mapState('ui', ['activeCategory', 'isMenuVisible']),
    ...mapGetters({
      navMain: 'ui/getNavMainOuter',
      breadcrumbs: 'ui/getBreadcrumbs'
    })
  },
  watch: {
    isMenuVisible(newVal) {
      if (!newVal) {
        this.revealNav()
      }
    }
  },
  mounted() {
    this.revealNav()
    this.initScrollAnimation()
  },
  methods: {
    openMenu() {
      this.$store.dispatch('ui/openMenu', { activeCategory: null })
    },
    closeMenu() {
      this.$store.dispatch('ui/closeMenu')
    },
    revealNav() {
      this.$gsap.fromTo(
        this.$refs.navWrapper,
        {
          y: -100
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: this.$CustomEase?.create('custom', '0,0.01,0,1')
        }
      )
    },
    initScrollAnimation() {
      const { navWrapper, navbar } = this.$refs
      this.tl = this.$gsap.timeline({
        scrollTrigger: {
          start: 'top top-=100',
          end: 9999,
          trigger: navWrapper,
          invalidateOnRefresh: true,
          onEnter: () => {
            this.tl.to(navbar, {
              paddingTop: 20,
              paddingBottom: 20,
              duration: 0.6,
              ease: this.$CustomEase?.create('custom', '0.88,0.00,0.35,0.99')
            })
          },
          onUpdate: ({ direction }) => {
            if (direction === -1 && !this.tl.reversed()) {
              this.tl.reverse()
            }
            if (direction === 1 && this.tl.reversed()) {
              this.tl.play()
            }
          }
        }
      })
    }
  }
}
</script>
