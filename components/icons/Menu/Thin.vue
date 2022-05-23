<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconMenuOddThin" lang="en">IconMenuOddThin</title>
    <g fill="currentColor">
      <path d="M22 6.5H12v-1h10v1zm0 5v1H2v-1h20zm-10 7H2v-1h10v1z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconMenuOddThin',
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
