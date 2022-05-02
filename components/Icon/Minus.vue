<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-labelledby="name"
    :width="width"
    :height="height"
  >
    <title id="Minus" lang="en">Minus</title>
    <g fill="currentColor">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.5 11H19.5V13H4.5V11Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Minus',
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
