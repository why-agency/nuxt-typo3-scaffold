<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowDownFat" lang="en">IconArrowDownFat</title>
    <g fill="currentColor">
      <path
        d="M17.207 15.207L11.5 20.914 5.793 15.207l1.414 -1.414 3.293 3.293V4.5h2v12.586l3.293 -3.293 1.414 1.414z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowDownFat',
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
