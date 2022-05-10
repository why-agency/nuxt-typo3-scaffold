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
        type: 'slider',
        rewind: false,
        perView: 3.8,
        bullets: this.cardCount > 1,
        swipeThreshold: this.cardCount > 1 ? 80 : false,
        dragThreshold: this.cardCount > 1 ? 120 : false,
        controls: false,
        slideWidth: { desktop: 260, mobile: 260 },
        perTouch: 1,
        gap: 24,
        peek: { before: 0, after: 50 },
        breakpoints: {
          800: {
            perView: 2.8,
            peek: { before: 0, after: 100 }
          },
          700: {
            perView: 2,
            peek: { before: 0, after: 200 }
          },
          650: {
            perView: 2,
            gap: 24,
            peek: { before: 0, after: 150 }
          },
          585: {
            perView: 2,
            gap: 24,
            peek: { before: 0, after: 120 }
          },
          550: {
            perView: 1.8,
            gap: 24,
            peek: { before: 0, after: 100 }
          },
          499: {
            perView: 1.8,
            gap: 24,
            peek: { before: 0, after: 0 }
          },
          430: {
            perView: 1.5,
            gap: 24,
            peek: { before: 0, after: 50 }
          },
          400: {
            perView: 1.6,
            peek: { before: 0, after: 0 }
          },
          350: {
            perView: 1.4,
            peek: { before: 0, after: 0 }
          }
        }
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
