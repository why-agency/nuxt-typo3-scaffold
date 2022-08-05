<template>
  <div
    class="relative row-start-1 flex flex-col h-full px-8 2xl:px-16 py-6 bg-white o-nav-menu-desktop__column focus-visible:outline-none"
    tabindex="0"
    :class="$_zIndex"
  >
    <slot name="header">
      <div style="height: 24px" role="presentation" />
    </slot>
    <transition-group
      tag="div"
      class="flex flex-col flex-1 pb-12 space-y-8 pt-24 xxxl:pt-32"
      appear
      @before-appear="beforeTransition"
      @appear="slideInLeft"
      @before-enter="beforeTransition"
      @enter="slideInLeft"
      @leave="leave"
    >
      <ONavLink
        v-if="level > 1"
        key="header"
        :item="activeCategory"
        is-direct-link
        class="font-bold max-w-sm mb-8 transform flex items-end"
        :data-index="0"
        :to="activeCategory.link"
      >
        {{ activeCategory.title }}
      </ONavLink>
      <ONavLink
        v-for="(navItem, index) in activeCategory.children"
        :key="navItem.title"
        :data-index="index + 1"
        :item="navItem"
        :tabindex="0"
        :is-direct-link="!navItem.children"
        :level="level"
        :is-active="navItem === activeItem"
        class="max-w-sm transform"
        @keyup.native.up.prevent="focusPrev"
        @keyup.native.down.prevent="focusNext"
      >
        {{ navItem.title }}
      </ONavLink>
    </transition-group>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  props: {
    activeCategory: {
      type: Object,
      default: null
    },
    activeItem: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 2
    }
  },
  computed: {
    $_zIndex() {
      if (this.level === 2) {
        return 'z-30'
      }

      if (this.level === 3) {
        return 'z-20'
      }

      return 'z-40'
    }
  },

  methods: {
    beforeTransition(el, done) {
      el.style.opacity = 0
      el.style.transform = 'translateX(-20px)'
    },
    slideInLeft(el, done) {
      const delay = el.dataset.index * 0.07
      const tl = this.$gsap.timeline({ ease: 'circ.easeOut' })
      tl.to(el, {
        x: 0,
        delay,
        duration: 0.5
      }).to(
        el,
        {
          opacity: 1,
          delay,
          duration: 0.5
        },
        0.1
      )
    },
    leave(el, done) {
      el.remove()
    }
  }
}
</script>
