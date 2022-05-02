<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowRightFat" lang="en">IconArrowRightFat</title>
    <g fill="currentColor">
      <path
        d="M14.707 6.293L20.414 12l-5.707 5.707 -1.414 -1.414L16.586 13H4v-2h12.586L13.293 7.707l1.414 -1.414z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowRightFat',
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
