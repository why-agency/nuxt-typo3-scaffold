<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowUpRightFat" lang="en">IconArrowUpRightFat</title>
    <g fill="currentColor">
      <path
        d="M9.232 5.49h8.071v8.07h-2V8.905l-8.9 8.9L4.99 16.388l8.9 -8.9H9.231v-2z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowUpRightFat',
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
