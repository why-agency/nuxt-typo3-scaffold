<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconCloseMedium" lang="en">IconCloseMedium</title>
    <g fill="currentColor">
      <path
        d="M10.94 12L2.47 3.53 3.53 2.47 12 10.94l8.47 -8.47 1.06 1.06L13.06 12l8.47 8.47 -1.06 1.06L12 13.06l-8.47 8.47L2.47 20.47 10.94 12z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconCloseMedium',
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
