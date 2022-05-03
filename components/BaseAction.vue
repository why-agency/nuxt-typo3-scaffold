<template>
  <UseDynamicAction
    :to="to"
    class="
      inline-flex
      items-center
      cursor-pointer
      disabled:opacity-30 disabled:pointer-events-none
      focus:outline-none
      transition
      duration-500
      text-button
      font-secondary font-medium
      uppercase
      w-max
    "
    :class="[...classes, $_color, $_size, $_border, $_focus]"
  >
    <div
      class="inline-flex gap-1 items-center"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <!-- @slot Insert an icon in front of the label -->
      <slot name="iconPrefix" />
      <!-- @slot Default slot to label the link -->
      <slot />
      <!-- @slot Insert an icon after the label -->
      <slot name="iconSuffix" />
    </div>
  </UseDynamicAction>
</template>

<script>
const Color = {
  primary: 'primary',
  secondary: 'secondary',
  white: 'white',
  gray: 'gray'
}

const Variant = {
  filled: 'filled',
  outline: 'outline',
  text: 'text'
}

const Size = {
  default: 'default',
  large: 'large'
}

export default {
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    color: {
      type: String,
      default: Color.primary
    },
    variant: {
      type: String,
      default: Variant.filled
    },
    size: {
      type: String,
      default: Size.default
    }
  },
  data() {
    return {
      classes: []
    }
  },
  computed: {
    $_color() {
      return {
        // Filled
        'bg-primary text-primary-inverse hover:bg-primary-hover active:bg-primary-inverse active:ring-1 active:ring-primary active:text-primary active:ring-inset':
          this.color === 'primary' && this.variant === 'filled',
        'bg-secondary text-secondary-inverse hover:bg-secondary-hover hover:text-black active:bg-secondary-inverse active:ring-1 active:ring-secondary active:text-secondary active:ring-inset':
          this.color === 'secondary' && this.variant === 'filled',

        // Outline
        'border-primary text-primary hover:bg-primary/20 active:bg-primary active:text-primary-inverse':
          this.color === 'primary' && this.variant === 'outline',
        'border-white text-white hover:bg-white/20 active:bg-white active:text-black':
          this.color === 'secondary' && this.variant === 'outline',

        // Text
        'text-primary hover:text-primary-hover active:text-tertiary':
          this.color === 'primary' && this.variant === 'text',
        'text-secondary hover:text-secondary-hover active:text-tertiary':
          this.color === 'secondary' && this.variant === 'text',
        'text-tertiary hover:text-tertiary-hover active:text-primary':
          this.color === 'tertiary' && this.variant === 'text',
        'text-white hover:text-tertiary active:text-primary':
          this.color === 'white' && this.variant === 'text'
      }
    },
    $_size() {
      return {
        'h-10 px-5': this.variant !== 'text' && this.size === 'default',
        'h-12 lg:h-14 px-5': this.variant !== 'text' && this.size === 'large',
        'h-8': this.variant === 'text'
      }
    },
    $_border() {
      return {
        border: this.variant === 'outline',
        'border-b-2 border-opacity-0': this.variant === 'text'
      }
    },
    $_focus() {
      return {
        'focus-visible:ring-2 focus-visible:ring-focus':
          this.variant !== 'text',
        'focus-visible:border-opacity-100 focus-visible:border-focus':
          this.variant === 'text'
      }
    }
  },
  methods: {
    onMouseEnter() {
      this.classes = ['ease-in']
    },
    onMouseLeave() {
      this.classes = ['ease-out']
      setTimeout(() => {
        this.classes = []
      }, 500)
    }
  }
}
</script>
