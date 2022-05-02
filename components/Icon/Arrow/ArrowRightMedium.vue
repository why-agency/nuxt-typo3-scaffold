<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowRightMedium" lang="en">IconArrowRightMedium</title>
    <g fill="currentColor">
      <path
        d="M14.53 6.47L20.06 12l-5.53 5.53 -1.06 -1.06 3.72 -3.72H4v-1.5h13.19L13.47 7.53l1.06 -1.06z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowRightMedium',
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
