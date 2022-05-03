<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowRightThin" lang="en">IconArrowRightThin</title>
    <g fill="currentColor">
      <path
        d="M13.646 17.354a0.5 0.5 0 0 1 0 -0.708L18.293 12 13.646 7.354a0.5 0.5 0 0 1 0.708 -0.708l5 5a0.5 0.5 0 0 1 0 0.708l-5 5a0.5 0.5 0 0 1 -0.708 0z"
      />
      <path
        d="M3.5 12A0.5 0.5 0 0 1 4 11.5h15a0.5 0.5 0 0 1 0 1H4A0.5 0.5 0 0 1 3.5 12z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowRightThin',
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
