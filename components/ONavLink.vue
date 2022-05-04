<template>
  <component
    :is="type"
    :href="item.link"
    :to="item.link"
    :rel="isAnchor ? 'noopener noreferrer' : false"
    :target="isAnchor ? '_blank' : false"
    role="menuitem"
    class="
      font-secondary
      hover:text-primary-hover
      border-b border-gray-200
      lg:border-transparent lg:border-b-2
      flex
      justify-between
      items-center
      cursor-pointer
      disabled:opacity-30 disabled:pointer-events-none
      focus:outline-none
      focus-visible:border-focus
      active:ring-0
      transition
      duration-300
      ease-hover
    "
    :class="$_linkStyle"
    :event="isDirectLink ? 'click' : ''"
    @click.native="handleClick"
  >
    <slot />
    <template v-if="isMenuVisible">
      <IconArrowRightMedium v-if="isDirectLink || isAnchor" class="w-5" />
      <IconChevronRightMedium v-else />
    </template>
  </component>
</template>

<script>
import { mapState } from 'vuex'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useActionType } from '@/composables/useActionType'

const Variant = {
  level1: 1,
  level2: 2
}
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    level: {
      type: Number,
      default: Variant.level1
    },
    isDirectLink: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isAnchor, type } = useActionType(props.item.link)

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isXl = breakpoints.greater('xl')

    return { isAnchor, type, isXl }
  },
  computed: {
    ...mapState('ui', ['isMenuVisible', 'activeCategory']),
    isSelectedTopNavLink() {
      return this.level === 1 && this.item.active === 1
    },
    isSelectedMenuNavLink() {
      return this.level !== 1 && this.item.active === 1
    },
    isInactiveTopNavLink() {
      return (
        !this.isActive &&
        this.level === 1 &&
        this.activeCategory &&
        this.item.active !== 1
      )
    },
    $_linkStyle() {
      return {
        'font-secondary font-bold': this.level === 1,
        'lg:uppercase': this.level === 1 && !this.isMenuVisible,
        'text-secondary': this.isActive || this.isSelectedTopNavLink,
        'font-bold': this.isSelectedMenuNavLink
      }
    }
  },
  methods: {
    handleClick() {
      if (!this.isDirectLink) {
        this.setActiveCategory(this.item)
        if (!this.isMenuVisible) {
          this.$store.dispatch('ui/openMenu', { activeCategory: this.item })
        }
        return
      }
      this.$store.dispatch('ui/closeMenu')
    },
    setActiveCategory(category) {
      if (this.level !== 2) {
        this.$store.commit(`ui/SET_ACTIVE_CATEGORY`, category)
        this.$store.commit(`ui/SET_ACTIVE_SECONDARY_CATEGORY`, null) // hide 3rd column if visible
        return
      }
      this.$store.commit(`ui/SET_ACTIVE_SECONDARY_CATEGORY`, category)
    }
  }
}
</script>
