<template>
  <div
    class="flex h-10 items-center absolute lg:bottom-20 text-body4 invisible"
  >
    <span v-if="withSlideList" class="dark:text-white">01</span>
    <div
      v-if="withSlideList"
      class="w-max flex items-center lg:justify-center px-6 lg:px-10 space-x-2"
    >
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="h-0.5 w-8 transition-all"
        :class="[
          index === currentSlide
            ? 'dark:bg-white bg-primary h-1'
            : 'dark:bg-white bg-gray-500'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
        @click="$emit('slide-updated', `=${index}`)"
      />
    </div>
    <div v-else class="flex">
      <span class="text-body3 dark:text-white">
        {{ currentSlide + 1 }}/{{ slideCount }}
      </span>
    </div>
    <span v-if="withSlideList" class="dark:text-white">
      {{ slideCount > 9 ? slideCount : `0${slideCount}` }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: [Array, Number],
      required: true
    },
    currentSlide: {
      type: Number,
      default: 0
    },
    withSlideList: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    slideCount() {
      return this.slides.length || this.slides
    }
  }
}
</script>
