<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronUpThin" lang="en">IconChevronUpThin</title>
    <g fill="currentColor">
      <path
        d="M17.354 14.646l-0.708 0.707L12 10.707l-4.646 4.646L6.646 14.646 12 9.293l5.354 5.353z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronUpThin',
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
