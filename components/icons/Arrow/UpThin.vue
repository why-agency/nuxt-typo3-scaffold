<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowUpThin" lang="en">IconArrowUpThin</title>
    <g fill="currentColor">
      <path
        d="M17.354 9.646l-0.708 0.707L12 5.708l-4.646 4.647L6.646 9.646 12 4.293l5.354 5.353z"
      />
      <path d="M11.5 20V5h1v15h-1z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowUpThin',
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
