<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconMenuOddFat" lang="en">IconMenuOddFat</title>
    <g fill="currentColor">
      <path d="M22 7H12V5h10v2zm0 4v2H2v-2h20zm-10 8H2v-2h10v2z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconMenuOddFat',
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
