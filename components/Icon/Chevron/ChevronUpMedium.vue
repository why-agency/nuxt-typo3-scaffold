<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronUpMedium" lang="en">IconChevronUpMedium</title>
    <g fill="currentColor">
      <path
        d="M17.53 14.47l-1.06 1.06L12 11.06l-4.47 4.47L6.47 14.47 12 8.94l5.53 5.53z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronUpMedium',
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
