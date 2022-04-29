<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronDownMedium" lang="en">IconChevronDownMedium</title>
    <g fill="currentColor">
      <path
        d="M6.47 10.53L7.53 9.47 12 13.94l4.47 -4.47 1.06 1.06L12 16.06 6.47 10.53z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronDownMedium',
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
