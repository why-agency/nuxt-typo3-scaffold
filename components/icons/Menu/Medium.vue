<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconMenuOddMedium" lang="en">IconMenuOddMedium</title>
    <g fill="currentColor">
      <path
        d="M22 6.75H12v-1.5h10v1.5zm0 4.5v1.5H2v-1.5h20zm-10 7.5H2v-1.5h10v1.5z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconMenuOddMedium',
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
