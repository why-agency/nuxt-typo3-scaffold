<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconPlayFilled" lang="en">IconPlayFilled</title>
    <g fill="currentColor">
      <path d="M7 6v13l11 -6.5L7 6z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconPlayFilled',
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
