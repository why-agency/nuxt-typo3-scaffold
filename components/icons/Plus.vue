<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-labelledby="name"
    :width="width"
    :height="height"
  >
    <title id="Plus" lang="en">Plus</title>
    <g fill="currentColor">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 11V4.5H13V11H19.5V13H13V19.5H11V13H4.5V11H11Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Plus',
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
