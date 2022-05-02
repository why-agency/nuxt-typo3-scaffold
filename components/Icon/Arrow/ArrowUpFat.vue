<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowUpFat" lang="en">IconArrowUpFat</title>
    <g fill="currentColor">
      <path
        d="M5.793 8.793L11.5 3.086l5.707 5.707 -1.414 1.414L12.5 6.914V19.5h-2V6.914l-3.293 3.293L5.793 8.793z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowUpFat',
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
