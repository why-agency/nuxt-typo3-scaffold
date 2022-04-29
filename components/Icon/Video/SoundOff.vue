<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconSoundOffFilled" lang="en">IconSoundOffFilled</title>
    <g fill="currentColor">
      <path
        d="M13.462 19.355L7.578 14.942H3.9V9.058h3.678l5.884 -4.413v14.71z"
      />
      <path
        d="M17.42 12L15.398 9.978 16.105 9.27l2.022 2.022L20.15 9.27l0.707 0.707L18.835 12l2.023 2.022 -0.708 0.707 -2.022 -2.022 -2.022 2.022 -0.707 -0.707L17.42 12z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconSoundOffFilled',
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
