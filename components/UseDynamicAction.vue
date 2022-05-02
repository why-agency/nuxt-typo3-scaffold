<template>
  <component
    :is="type"
    :href="to ? to : false"
    :to="to ? to : false"
    :rel="isAnchor ? 'noopener noreferrer' : false"
    :target="isAnchor ? '_blank' : false"
    @click="handleClick"
  >
    <slot :isAnchor="isAnchor" />
  </component>
</template>

<script>
import { useActionType } from '@/composables/useActionType'

export default {
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'button'
    }
  },
  setup(props, { emit }) {
    const { isAnchor, type } = useActionType(props.to, props.tag)

    const handleClick = () => {
      if (!props.to) {
        emit('click')
      }
    }
    return { isAnchor, type, handleClick }
  }
}
</script>
