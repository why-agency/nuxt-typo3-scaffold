<template>
  <div class="w-full aspect-w-16 aspect-h-9">
    <iframe class="w-full h-full" :name="video.title" :src="src" />
  </div>
</template>

<script>
const YOUTUBE_URL = 'https://www.youtube.com/embed'
export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  computed: {
    src() {
      const { id, start, end } = this.video
      return `${YOUTUBE_URL}/${id}?autoplay=0&start=${start}&end=${end}`
    }
  }
}
</script>
