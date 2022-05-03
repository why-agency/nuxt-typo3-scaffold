<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowLeftMedium" lang="en">IconArrowLeftMedium</title>
    <g fill="currentColor">
      <path
        d="M9.47 17.53L3.94 12 9.47 6.47l1.06 1.06 -3.72 3.72H20v1.5H6.81l3.72 3.72 -1.06 1.06z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowLeftMedium',
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
