<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconCloseFat" lang="en">IconCloseFat</title>
    <g fill="currentColor">
      <path
        d="M10.586 12L2.293 3.707 3.707 2.293 12 10.586l8.293 -8.293 1.414 1.414L13.414 12l8.293 8.293 -1.414 1.414L12 13.414l-8.293 8.293L2.293 20.293 10.586 12z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconCloseFat',
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
