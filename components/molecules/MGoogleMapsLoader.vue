<template>
  <div>
    <div ref="map" class="w-full h-full" />
    <template v-if="google && map">
      <slot name="zoom" :zoom="zoom" :zoomOut="zoomOut" :zoomIn="zoomIn" />
    </template>
  </div>
</template>

<script>
function call(callback, args) {
  callback.apply(this, args)
}
export default {
  props: {
    mapConfig: {
      type: Object,
      default: () => {}
    },
    markerData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: null,
      google: null,
      markers: []
    }
  },
  computed: {
    zoom() {
      if (this.map && this.map.getZoom) {
        return this.map.getZoom()
      }
      return 5
    }
  },
  watch: {
    markerData() {
      if (this.google && this.map) {
        this.updateMarkers()
      }
    }
  },
  async mounted() {
    this.google = await this.$googleMaps.loadApi()
    this.initializeMap()
    this.drawMarkers()
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.map
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
      if (this.map && this.map.addListener) {
        this.map.addListener('drag', () => {
          this.$emit('drag')
        })
      }
    },
    zoomOut() {
      this.map.setZoom(this.zoom - 1)
    },
    zoomIn() {
      this.map.setZoom(this.zoom + 1)
    },
    drawMarkers() {
      if (!this.google || !this.map) {
        return []
      }
      this.markers = this.markerData.map(marker => {
        const markerReference = new this.google.maps.Marker({
          position: marker.position,
          title: marker.title?.replace('<br />', ' | '),
          map: this.map,
          icon: marker.icon
        })
        this.addListeners(marker, markerReference)
        return markerReference
      })
    },
    addListeners(marker, markerReference) {
      marker.listeners.forEach(listener => {
        if (markerReference && markerReference.addListener) {
          markerReference.addListener(listener.event, () => {
            call(listener.callback, listener.params)
          })
        }
      })
    },
    clearMarkers() {
      this.markers.forEach(marker => {
        marker.setMap(null)
      })
    },
    updateMarkers() {
      this.clearMarkers()
      this.drawMarkers()
    }
  }
}
</script>
