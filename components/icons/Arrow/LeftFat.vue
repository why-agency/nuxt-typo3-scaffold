<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowLeftFat" lang="en">IconArrowLeftFat</title>
    <g fill="currentColor">
      <path
        d="M8.293 17.707L2.586 12 8.293 6.293l1.414 1.414L6.414 11H19v2H6.414l3.293 3.293 -1.414 1.414z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowLeftFat',
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
