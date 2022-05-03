<template>
  <portal to="video-lightbox">
    <div
      class="fixed top-0 left-0 z-50 flex justify-center w-screen h-screen bg-black bg-opacity-50 lg:items-center"
      @click="closeVideoPortal"
    >
      <div
        class="w-full flex items-center lg:max-w-[90vw] 2xl:max-w-[80vw] 3xl:max-w-[75vw]"
      >
        <slot />
        <BaseButtonIcon
          class="relative self-start hidden ml-3 lg:inline-flex -top-10"
          variant="outline"
          @click="closeVideoPortal"
        >
          <IconCloseMedium />
        </BaseButtonIcon>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  methods: {
    closeVideoPortal() {
      this.$emit('close')
    }
  }
}
</script>
