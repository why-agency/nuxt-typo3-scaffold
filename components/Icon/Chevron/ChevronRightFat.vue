<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronRightFat" lang="en">IconChevronRightFat</title>
    <g fill="currentColor">
      <path
        d="M10.207 18.207L8.793 16.793 13.086 12.5 8.793 8.207l1.414 -1.414 5.707 5.707 -5.707 5.707z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronRightFat',
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
