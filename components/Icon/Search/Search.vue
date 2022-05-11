<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="Search" lang="en">Search</title>
    <g fill="currentColor">
      <path
        d="M10.065 3.935a6.129 6.129 0 1 0 0 12.259 6.129 6.129 0 0 0 0 -12.259zM2 10.065a8.065 8.065 0 1 1 14.41 4.977l5.307 5.306a0.968 0.968 0 0 1 -1.369 1.369L15.042 16.41A8.065 8.065 0 0 1 2 10.064z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Search',
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
