<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronLeftFat" lang="en">IconChevronLeftFat</title>
    <g fill="currentColor">
      <path
        d="M13.793 6.793l1.414 1.414L10.914 12.5l4.293 4.293 -1.414 1.414L8.086 12.5l5.707 -5.707z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronLeftFat',
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
