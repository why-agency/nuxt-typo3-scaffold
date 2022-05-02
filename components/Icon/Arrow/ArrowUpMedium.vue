<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowUpMedium" lang="en">IconArrowUpMedium</title>
    <g fill="currentColor">
      <path
        d="M6.47 9.47L12 3.94l5.53 5.53 -1.06 1.06L12.75 6.81V20h-1.5V6.81l-3.72 3.72L6.47 9.47z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowUpMedium',
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
