<template>
  <div
    ref="navWrapper"
    class="lg:hidden fixed top-0 z-50 w-full px-6 h-20 bg-white shadow-light flex justify-between items-center"
  >
    <BaseLogo @click.native="closeMenu" />
    <BaseButtonIcon
      variant="transparent"
      color="gray"
      class="ml-5"
      @click="toggleMenu"
    >
      <IconCloseFat v-if="isMenuVisible" />
      <IconMenuFat v-else />
    </BaseButtonIcon>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('ui', ['isMenuVisible'])
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
    closeMenu() {
      this.$store.dispatch('ui/closeMenu')
    },
    toggleMenu() {
      if (this.isMenuVisible) {
        this.closeMenu()
      } else {
        this.$store.dispatch('ui/openMenu', { activeCategory: null })
      }
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
      const { navWrapper } = this.$refs
      this.tl = this.$gsap.timeline({
        scrollTrigger: {
          start: 'top top-=100',
          end: 9999,
          trigger: navWrapper,
          invalidateOnRefresh: true,
          onEnter: () => {
            this.tl.to(navWrapper, {
              height: 64,
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
