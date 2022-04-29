<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowLeftThin" lang="en">IconArrowLeftThin</title>
    <g fill="currentColor">
      <path
        d="M9.646 6.646l0.707 0.708L5.708 12l4.647 4.646 -0.708 0.707L4.293 12 9.646 6.646z"
      />
      <path d="M20 12.5H5v-1h15v1z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowLeftThin',
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
