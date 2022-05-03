<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconPauseFat" lang="en">IconPauseFat</title>
    <g fill="currentColor">
      <path d="M8 7h2v11H8V7z" />
      <path d="M14 7h2v11h-2V7z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconPauseFat',
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
