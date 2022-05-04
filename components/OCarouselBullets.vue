<template>
  <div
    class="flex items-center w-max lg:justify-center space-x-2"
    :class="{ dark: theme === 'dark' }"
  >
    <!-- START numeric counter -->
    <div
      v-if="numeric && _slides >= numericCount"
      class="flex items-center font-semibold dark:text-white"
    >
      {{ currentSlideText }}
      <span
        class="block mx-2 h-6 w-0.5 bg-black dark:bg-white transform -skew-x-12"
      />
      {{ slideCounterText }}
    </div>
    <!-- END numeric counter -->

    <!-- START bullets -->
    <div v-else class="flex items-center h-6 space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="transition-all focus:outline-none"
        :class="[
          currentSlide === index
            ? 'bg-black dark:bg-secondary w-16 h-1'
            : 'bg-gray-300  w-8 h-0.5'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
        @click="$emit('slide-updated', `=${index}`)"
      />
    </div>
    <!-- END bullets -->
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: [Number, Array],
      required: true
    },
    currentSlide: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'dark'
    },
    numeric: {
      type: Boolean,
      default: true
    },
    numericCount: {
      type: Number,
      default: 5
    }
  },
  computed: {
    _slides() {
      return Array.isArray(this.slides) ? this.slides.length : this.slides
    },
    currentSlideText() {
      const slide = this.currentSlide + 1
      return slide < 10 ? '0' + slide : slide
    },
    slideCounterText() {
      return this._slides < 10 ? '0' + this._slides : this._slides
    }
  },
  methods: {
    $_bulletStylings(index) {
      if (this.theme === 'dark') {
        return index === this.currentSlide
          ? 'bg-secondary w-16 h-1'
          : 'bg-gray-300  w-8'
      }

      return index === this.currentSlide
        ? 'bg-black w-16 h-1'
        : 'bg-gray-500 w-8'
    }
  }
}
</script>
