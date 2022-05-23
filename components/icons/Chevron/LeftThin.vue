<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronLeftThin" lang="en">IconChevronLeftThin</title>
    <g fill="currentColor">
      <path
        d="M14.146 7.146l0.707 0.708L10.207 12.5l4.646 4.646 -0.707 0.708L8.793 12.5l5.353 -5.354z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronLeftThin',
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
