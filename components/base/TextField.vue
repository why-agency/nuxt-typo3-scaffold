<template>
  <div :class="{ 'opacity-40': disabled }" class="w-full">
    <label
      :for="uid"
      :class="$_label"
      class="block pl-4 uppercase text-forms-label font-bold"
    >
      {{ label }}
    </label>
    <div class="ml-2 w-full relative">
      <div
        v-if="hasIconPrefix"
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      >
        <slot name="iconPrefix" />
      </div>

      <input
        :id="uid"
        v-model="internalValue"
        :class="$_textField"
        class="
          w-full
          h-10
          focus:outline-none
          focus:ring
          focus:ring-focus
          focus:ring-2
          focus:ring-offset-0
          pr-10
          border border-gray-200
          bg-gray-200
          text-form-value
        "
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        v-bind="$attrs"
        @blur="onBlur"
        @focus="onFocus"
      />

      <div
        v-if="internalValue"
        class="absolute inset-y-0 right-10 flex items-center cursor-pointer"
        role="button"
        @click="clearInput"
      >
        <IconCloseFat class="h-3 w-3 text-gray-800" />
      </div>
    </div>
    <BaseValidationMessage
      v-if="isInvalid"
      class="pl-4 my-2"
      :conditions="conditions"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    hideLabel: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean
    },
    conditions: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Label'
    }
  },
  data() {
    return {
      val: this.value,
      isFocused: false
    }
  },
  computed: {
    uid() {
      return this.id && this.id.length ? this.id : this.$_uid
    },
    hasIconPrefix() {
      return !!this.$slots.iconPrefix
    },
    hasConditions() {
      return this.conditions.length > 0
    },
    isInvalid() {
      return this.conditions.some(c => c.isInvalid)
    },
    internalValue: {
      get() {
        return this.val
      },
      set(val) {
        this.val = val
        this.$emit('input', val)
      }
    },
    $_textField() {
      return {
        'pl-12': this.hasIconPrefix,
        'pl-4': !this.hasIconPrefix,
        'text-gray-800 bg-gray-100 ': this.internalValue,
        'text-gary-200': !this.internalValue,
        'border-error': this.isInvalid
      }
    },
    $_label() {
      return {
        'sr-only': this.hideLabel,
        'text-primary': this.isFocused,
        'text-gray-500': !this.isFocused,
        '!text-error': this.isInvalid
      }
    }
  },
  methods: {
    clearInput() {
      this.internalValue = ''
    },
    onBlur() {
      this.$emit('blur')
      this.isFocused = false
    },
    onFocus() {
      this.isFocused = true
    }
  }
}
</script>
