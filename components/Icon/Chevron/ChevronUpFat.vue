<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronUpFat" lang="en">IconChevronUpFat</title>
    <g fill="currentColor">
      <path
        d="M17.707 14.293l-1.414 1.414L12 11.414l-4.293 4.293L6.293 14.293 12 8.586l5.707 5.707z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronUpFat',
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
