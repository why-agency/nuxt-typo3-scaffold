<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowDownThin" lang="en">IconArrowDownThin</title>
    <g fill="currentColor">
      <path
        d="M6.646 14.354l0.708 -0.708L12 18.293l4.646 -4.647 0.708 0.708L12 19.707 6.646 14.354z"
      />
      <path d="M12.5 4v15h-1V4h1z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowDownThin',
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
