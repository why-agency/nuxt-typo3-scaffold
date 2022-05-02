<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronLeftMedium" lang="en">IconChevronLeftMedium</title>
    <g fill="currentColor">
      <path
        d="M13.97 6.97l1.06 1.06 -4.47 4.47 4.47 4.47 -1.06 1.06L8.44 12.5l5.53 -5.53z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronLeftMedium',
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
