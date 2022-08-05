<template>
  <div
    ref="target"
    class="group relative px-0 overline3 items-center hover:text-black focus-visible:ring"
    :class="$_color"
    @blur.capture="handleBlur"
  >
    <span
      v-if="label"
      :id="`${uid}-label`"
      class="inline-block mb-3 lg:mb-0.75"
      :class="{ 'text-danger': isInvalid }"
    >
      {{ label }}
    </span>
    <div
      :id="`${uid}-button`"
      ref="button"
      role="button"
      class="h-10 py-0 flex items-center w-full cursor-pointer group-hover:border-2 focus:outline-none focus:ring focus:ring-focus focus:ring-2 focus:ring-offset-0"
      aria-haspopup="listbox"
      :aria-labelledby="`${uid}-label ${uid}-button`"
      :aria-expanded="optionsVisible"
      tabindex="0"
      @click="toggleOptions"
      @keyup.up.down.space.prevent="showOptions"
      @keyup.up.prevent="focusOnPrevOption"
      @keyup.down.prevent="focusOnNextOption"
    >
      <div
        v-if="hasIconPrefix"
        class="flex absolute items-center h-3 w-3 text-gray-400 left-4 group-hover:text-black"
      >
        <slot name="iconPrefix" />
      </div>
      <slot
        name="selectedValue"
        :value="selected.label || selected || placeholder"
      >
        <p
          class="inset-y-0 items-center text-gray-400 focus:outline-none focus:ring focus:ring-focus focus:ring-2 focus:ring-offset-0 group-hover:text-black text-form-value px-10"
        >
          {{ selected.label || selected || placeholder }}
        </p>
      </slot>
      <div>
        <div
          class="absolute flex inset-y-0 right-0 w-10 items-center padding-left: pl-8 group-hover:text-black"
        >
          <IconChevronUpFat
            v-if="optionsVisible"
            class="mr-1 ml-3 w-3 items-center"
          />
          <IconChevronDownFat v-else class="mr-1 ml-3 w-3 items-center" />
        </div>
      </div>
    </div>
    <ul
      ref="optionsList"
      class="absolute z-10 w-full px-0 overflow-y-scroll overflow-x-scroll text-lg max-h-40 focus:outline-none"
      :class="[{ hidden: !optionsVisible }, $_color]"
      :style="{ top: openUp ? -height + 'px' : false }"
      role="listbox"
      tabindex="-1"
      :aria-labelledby="`${uid}-label`"
      :aria-activedescendant="activeDescendant"
      @focus="onFocus"
      @keyup.up.prevent="focusOnPrevOption"
      @keyup.down.prevent="focusOnNextOption"
      @keydown.up.down.prevent
      @keydown.enter.prevent="handleSelect(options[focused])"
      @keyup.space.esc.prevent="reset"
      @keypress="onKeyPress"
    >
      <li
        v-if="placeholder && selected"
        class="items-center h-8 pl-3 text-gray-500 hover:text-gray-300 flex left-3"
        @click="handleSelect('')"
      >
        {{ placeholder }}
      </li>
      <li
        v-for="(option, index) in options"
        :id="`${uid}-option-${index}`"
        :key="option.label || option"
        role="option"
        :aria-selected="activeOptionIndex === index"
        class="text-gray-500 bg-gray-100 cursor-pointer hover:bg-white hover:text-black active:bg-white text-black w-full"
        :class="{
          '!bg-white': index === focused
        }"
        @click="handleSelect(option)"
      >
        <slot name="option" :value="option">
          <div class="flex relative left-2.5 items-center h-8">
            {{ option.label || option }}
            <IconCheck
              v-show="selected == option"
              class="ml-auto mr-10 w-3 h-3"
            />
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { onClickOutside, useElementSize } from '@vueuse/core'
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Object],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: [String, Number],
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    conditions: {
      type: Array,
      default: () => []
    },
    openUp: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'gray'
    },
    hideBorder: {
      type: Boolean
    },
    hasIconSuffix: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const optionsVisible = ref(false)
    const focused = ref('')
    const target = ref(null)
    onClickOutside(target, () => {
      optionsVisible.value = false
      focused.value = ''
    })
    const optionsList = ref(null)
    const { height } = useElementSize(optionsList)
    return { target, optionsList, height, optionsVisible, focused }
  },
  data() {
    return {
      selected: ''
    }
  },
  computed: {
    uid() {
      return this.id && this.id.length ? this.id : this.$_uid
    },
    hasIconPrefix() {
      return !!this.$slots.iconPrefix
    },
    activeOptionIndex() {
      return this.options.findIndex(option => {
        return option === this.selected || option.label === this.selected.label
      })
    },
    activeDescendant() {
      return `${this.uid}-option-${this.activeOptionIndex}`
    },
    isInvalid() {
      return this.conditions.some(c => c.isInvalid)
    },
    $_color() {
      return {
        'bg-gray-100': this.color === 'gray',
        'bg-white': this.color === 'white'
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        // prevent val from being set to an empty object (because it evaluates to true and would be displayed in the template instead of the placeholder)
        if (typeof val === 'object' && Object.keys(val).length === 0) {
          return
        }
        this.selected = val
      }
    }
  },
  methods: {
    toggleOptions() {
      this.optionsVisible = !this.optionsVisible
    },
    hideOptions() {
      this.optionsVisible = false
      this.focused = ''
    },
    async showOptions() {
      this.optionsVisible = true
      await this.$nextTick()
      this.$refs.optionsList.focus()
    },
    handleSelect(option) {
      this.$emit('input', option)
      this.selected = option
      this.reset()
    },
    handleBlur(e) {
      if (this.$el.contains(e.relatedTarget)) return
      this.hideOptions()
    },
    focusOnPrevOption() {
      const next = this.focused - 1
      this.focused = next >= 0 ? next : this.focused
    },
    focusOnNextOption() {
      const next = this.focused + 1
      this.focused = next <= this.options.length - 1 ? next : this.focused
    },
    onFocus() {
      this.focused = 0
    },
    onKeyPress(event) {
      event.preventDefault()
    },
    async reset() {
      this.hideOptions()
      await this.$nextTick()
      this.$refs.button.focus()
    }
  }
}
</script>
