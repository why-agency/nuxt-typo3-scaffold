<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronRightMedium" lang="en">IconChevronRightMedium</title>
    <g fill="currentColor">
      <path
        d="M10.03 18.03L8.97 16.97l4.47 -4.47L8.97 8.03l1.06 -1.06 5.53 5.53 -5.53 5.53z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronRightMedium',
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
