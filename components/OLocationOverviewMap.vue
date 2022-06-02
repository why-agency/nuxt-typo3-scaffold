<template>
  <div class="relative">
    <!-- START locations map -->
    <MGoogleMapsLoader
      class="w-screen h-screen"
      :map-config="mapConfig"
      :marker-data="markersWithCustomIcon"
      @drag="isDragged = true"
    >
      <template #zoom="{ zoomOut, zoomIn }">
        <div
          class="absolute left-0 right-0 flex-col hidden gap-4 frame-default lg:flex bottom-40"
        >
          <BaseButtonIcon color="white" class="!p-2" @click="zoomIn">
            <IconPlus />
          </BaseButtonIcon>

          <BaseButtonIcon color="white" class="!p-2" @click="zoomOut">
            <IconMinus />
          </BaseButtonIcon>
        </div>
      </template>
    </MGoogleMapsLoader>
    <!-- END locations map -->

    <!-- START text -->
    <transition
      leave-to-class="opacity-0"
      leave-active-class="transition duration-700 ease-in"
    >
      <div
        v-if="!isDragged"
        class="absolute bottom-0 left-0 right-0 z-10 xl:w-full text-white h-[max-content] top-44 frame-default pointer-events-none"
      >
        <BaseHeadline
          v-bind="header"
          :level="4"
          tag="h1"
          animate
          :delay="1"
          class="md:max-w-xl"
        />
        <BaseTextTransition class="md:hidden xl:block" :delay="1.5">
          <BaseHtmlParser class="mt-6 md:max-w-xl" :content="text" />
        </BaseTextTransition>
      </div>
    </transition>
    <!-- END text -->

    <!-- START overlay -->
    <OLocationOverviewMapOverlay />
    <!-- END overlay -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    header: {
      type: Object,
      default: () => {}
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      mapConfig: {
        mapId: '419ff1d6dfe684ea',
        center: { lat: 52.519325, lng: 13.392709 },
        zoom: 5,
        disableDefaultUI: true
      },
      isDragged: false,
      markerIcons: {
        location:
          this.$config.cdnEndpoint +
          '/Locations/standorte_default_qJhozmYng.png',
        factory:
          this.$config.cdnEndpoint + '/Locations/werke_default_tr6-YLGSdTP.png',
        gse:
          this.$config.cdnEndpoint +
          '/Locations/standorteWerke_default_lAcM2nZB5N.png',
        dsgroups:
          this.$config.cdnEndpoint + '/Locations/dsgroup-default_-zM-EdVpv.png',
        default:
          this.$config.cdnEndpoint +
          '/Locations/standorte_default_qJhozmYng.png'
      }
    }
  },
  computed: {
    ...mapGetters({ markers: 'locations/getMarkers' }),
    markersWithCustomIcon() {
      return this.markers.map(marker => ({
        icon: this.markerIcons[marker.type] || this.markerIcons.default,
        listeners: [
          {
            event: 'click',
            callback: this.$store.commit,
            params: ['locations/SET_SELECTED_LOCATION', marker]
          }
        ],
        ...marker
      }))
    }
  }
}
</script>
