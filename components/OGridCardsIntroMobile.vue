<template>
  <OCarousel v-bind="settings" class="mb-20" @change="onChange">
    <slot :currentSlide="currentSlide" />
    <template #bullets="{ go }">
      <OCarouselBullets
        :slides="cardCount"
        :current-slide="currentSlide"
        class="mt-6 ml-6"
        :theme="theme"
        @slide-updated="go"
      />
    </template>
  </OCarousel>
</template>

<script>
export default {
  props: {
    cardCount: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {
      currentSlide: 0,
      settings: {
        rewind: false,
        bullets: this.cardCount > 1,
        swipeThreshold: this.cardCount > 1 ? 80 : false,
        dragThreshold: this.cardCount > 1 ? 120 : false,
        controls: false,
        slideWidth: { desktop: 260, mobile: 260 },
        gap: 24
      }
    }
  },
  methods: {
    onChange(payload) {
      this.currentSlide = payload
    }
  }
}
</script>
