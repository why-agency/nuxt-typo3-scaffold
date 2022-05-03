<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronDownThin" lang="en">IconChevronDownThin</title>
    <g fill="currentColor">
      <path d="M5 8.933L5.925 8 12 14.133 18.075 8 19 8.933 12 16 5 8.933z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronDownThin',
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
