<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconChevronRightThin" lang="en">IconChevronRightThin</title>
    <g fill="currentColor">
      <path
        d="M9.854 17.854L9.146 17.146 13.793 12.5 9.146 7.854 9.854 7.146l5.353 5.354 -5.353 5.354z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconChevronRightThin',
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
