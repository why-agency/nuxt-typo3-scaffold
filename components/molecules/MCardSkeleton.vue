<template>
  <div
    aria-role="hidden"
    class="bg-white mb-6 p-6 w-full lg:max-w-[480px]"
    :style="height"
  >
    <div class="flex flex-col justify-between h-full animate-pulse">
      <div>
        <div class="w-full h-6 mb-2 bg-gray-100" />
        <div class="w-3/4 h-6 mb-2 bg-gray-100" />
        <div class="w-1/3 h-6 bg-gray-100" />
      </div>

      <div>
        <div class="w-3/4 h-6 mb-4 bg-gray-100" />
        <div class="w-1/2 h-6 bg-gray-100" />
      </div>

      <div class="flex w-full gap-8">
        <slot name="actions">
          <div class="flex-1 h-6 bg-secondary/20" />
          <div class="flex-1 h-6 bg-secondary/20" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean
  },
  computed: {
    height() {
      const px = this.small ? 320 : 480

      return `height: ${px}px`
    }
  }
}
</script>
