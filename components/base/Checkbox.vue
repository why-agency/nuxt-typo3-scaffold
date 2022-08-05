<template>
  <div>
    <div
      class="relative flex items-center group focus-within"
      :class="{ 'opacity-0 pointer-events-none': disabled }"
    >
      <input
        :id="uid"
        class="absolute z-10 w-4 h-4 outline-none opacity-0 cursor-pointer"
        type="checkbox"
        :disabled="disabled"
        :checked="isChecked"
        :aria-checked="isChecked"
        v-bind="$attrs"
        :value="value"
        @change="onChange"
        @blur="onBlur"
        @keyUp="onKeyup"
        @focus="onFocus"
      />
      <span
        class="relative flex items-center justify-center w-4 h-4 border border-gray-200 group-hover:bg-primary-hover/25 rounded"
        :class="$_checkbox"
      >
        <IconChevronUpFat
          v-if="isChecked"
          aria-hidden="true"
          class="w-3 h-3 group-hover:text-gray-600"
        />
      </span>
      <label
        class="flex-1 ml-4 text-primary cursor-pointer select-none group-hover:text-primary text-notification"
        :class="{ 'text-primary': isFocused }"
        :for="uid"
      >
        <slot />
      </label>
    </div>
    <BaseValidationMessage
      v-if="isInvalid"
      class="my-2"
      :conditions="conditions"
    />
  </div>
</template>

<script>
import { Keys } from '@/utils/keyboard'
export default {
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type: [Boolean, Array],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    conditions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    uid() {
      return this.id && this.id.length ? this.id : this.$_uid
    },
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue
    },
    isInvalid() {
      return this.conditions.some(c => c.isInvalid)
    },
    $_checkbox() {
      return {
        'border-error': this.isInvalid,
        'outline-none ring ring-primary ring-1 ring-offset-0': this.isFocused,
        'bg-white border-primary': this.isChecked,
        'bg-primary-hover/25': this.isFocused && !this.isChecked,
        'bg-primary': this.isFocused && this.isChecked
      }
    }
  },
  methods: {
    toggleValue(event) {
      const isChecked = event.target.checked
      if (Array.isArray(this.modelValue)) {
        const newValue = isChecked
          ? [...this.modelValue, this.value]
          : this.modelValue.filter(val => val !== this.value)
        return this.$emit('change', newValue)
      }
      this.$emit('change', isChecked)
    },
    onChange(event) {
      this.toggleValue(event)
    },
    onBlur() {
      this.isFocused = false
      this.$emit('blur')
    },
    onFocus() {
      this.isFocused = true
    },
    onKeyup(event) {
      if (event.key === Keys.Space) {
        this.toggleValue(event)
      }
    }
  }
}
</script>
