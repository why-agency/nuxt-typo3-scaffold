<template>
  <div
    class="flex frame-default space-x-2 absolute lg:bottom-20 left-0 invisible"
  >
    <BaseButtonIcon
      :color="isDark ? 'white' : 'primary'"
      variant="outline"
      @click="go('<')"
    >
      <IconArrowLeftMedium />
    </BaseButtonIcon>
    <BaseButtonIcon
      :color="isDark ? 'white' : 'primary'"
      variant="outline"
      @click="go('>')"
    >
      <IconArrowRightMedium />
    </BaseButtonIcon>
  </div>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      default: false
    },
    go: {
      type: Function,
      default: undefined
    }
  }
}
</script>
