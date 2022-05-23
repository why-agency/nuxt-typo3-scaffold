<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronDownFat" lang="en">IconChevronDownFat</title>
    <g fill="currentColor">
      <path
        d="M6.293 10.707L7.707 9.293 12 13.586l4.293 -4.293 1.414 1.414L12 16.414 6.293 10.707z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronDownFat',
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
