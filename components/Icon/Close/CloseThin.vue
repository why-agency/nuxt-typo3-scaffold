<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconCloseThin" lang="en">IconCloseThin</title>
    <g fill="currentColor">
      <path
        d="M11.293 12L2.646 3.354 3.354 2.646 12 11.293l8.646 -8.647 0.708 0.708L12.707 12l8.647 8.646 -0.707 0.708L12 12.707l-8.646 8.647L2.646 20.647 11.293 12z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconCloseThin',
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
