<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowDownMedium" lang="en">IconArrowDownMedium</title>
    <g fill="currentColor">
      <path
        d="M17.53 14.53L12 20.06 6.47 14.53l1.06 -1.06 3.72 3.72V4h1.5v13.19l3.72 -3.72 1.06 1.06z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowDownMedium',
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
