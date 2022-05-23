<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowUpRightThin" lang="en">IconArrowUpRightThin</title>
    <g fill="currentColor">
      <path
        d="M10.336 6.447h7.57v7.57h-1V8.155l-9.752 9.753L6.447 17.2 16.2 7.447h-5.864v-1z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowUpRightThin',
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
