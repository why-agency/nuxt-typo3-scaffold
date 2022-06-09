<template>
  <MGoogleMapsLoader v-bind="data1" />
</template>
<script>
export default {
  data() {
    return {
      data1: {
        mapConfig: {
          mapId: '419ff1d6dfe684ea',
          center: { lat: 52.519325, lng: 13.392709 },
          zoom: 5,
          disableDefaultUI: true
        },
        isDragged: false,
        markerData: [
          {
            id: 1,
            position: { lat: -25.344, lng: 131.031 },
            icon: {
              path: 'M53.5167 27.0688C53.5167 40.8596 39.0532 68.1318 28.4516 84.3399C27.6772 85.5238 25.9645 85.5238 25.1901 84.3399C14.5884 68.1318 0.125 40.8596 0.125 27.0688C0.125 12.556 12.0771 0.791016 26.8208 0.791016C41.5645 0.791016 53.5167 12.556 53.5167 27.0688Z',
              fillColor: '#3070B3',
              fillOpacity: 1,
              anchor: new window.google.maps.Point(0, 0),
              strokeWeight: 0,
              scale: 0.5
            }
          },
          {
            id: 2,
            position: { lat: -30.344, lng: 110.031 },
            icon: {
              path: 'M53.5167 27.0688C53.5167 40.8596 39.0532 68.1318 28.4516 84.3399C27.6772 85.5238 25.9645 85.5238 25.1901 84.3399C14.5884 68.1318 0.125 40.8596 0.125 27.0688C0.125 12.556 12.0771 0.791016 26.8208 0.791016C41.5645 0.791016 53.5167 12.556 53.5167 27.0688Z',
              fillColor: '#3070B3',
              fillOpacity: 1,
              anchor: new window.google.maps.Point(0, 0),
              strokeWeight: 0,
              scale: 0.5
            }
          },
          {
            id: 3,
            position: { lat: 48.15007793920101, lng: 11.56702825718228 },
            icon: {
              path: 'M53.5167 27.0688C53.5167 40.8596 39.0532 68.1318 28.4516 84.3399C27.6772 85.5238 25.9645 85.5238 25.1901 84.3399C14.5884 68.1318 0.125 40.8596 0.125 27.0688C0.125 12.556 12.0771 0.791016 26.8208 0.791016C41.5645 0.791016 53.5167 12.556 53.5167 27.0688Z',
              fillColor: '#3070B3',
              fillOpacity: 1,
              anchor: new window.google.maps.Point(0, 0),
              strokeWeight: 0,
              scale: 0.5
            }
          }
        ]
      }
    }
  }
}
</script>
