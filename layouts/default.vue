<template>
  <div class="flex flex-col h-screen">
    <ONav />
    <nuxt class="flex-1" />

    <!-- START lightbox -->
    <portal-target name="video-lightbox"></portal-target>
    <!-- END lightbox -->
  </div>
</template>

<script>
import ONav from '@/components/ONav'
export default {
  components: { ONav }
}
</script>
