<template>
  <div class="bg-gray-100">
    <OCarousel v-model="activeSlide" v-bind="settings" theme="light">
      <div
        v-for="(slide, index) in 5"
        :key="index"
        class="bg-tertiary h-[800px]"
      >
        <BaseHeadline
          :text="`this is card ${index + 1}`"
          class="uppercase font-bold p-20"
        />
      </div>
    </OCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      settings: {
        type: 'carousel',
        perView: 1,
        bullets: true,
        animationDuration: 1500
      },
      activeSlide: 1
    }
  }
}
</script>
