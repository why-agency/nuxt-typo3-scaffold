<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowUpRightMedium" lang="en">IconArrowUpRightMedium</title>
    <g fill="currentColor">
      <path
        d="M9.888 6.322h7.82v7.82h-1.5v-5.26L6.883 18.21l-1.06 -1.061 9.326 -9.326h-5.26v-1.5z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowUpRightMedium',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>
