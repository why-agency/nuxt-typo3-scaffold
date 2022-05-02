<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconSoundOnFilled" lang="en">IconSoundOnFilled</title>
    <g fill="currentColor">
      <path
        d="M13.462 19.355L7.578 14.942H3.9V9.058h3.678l5.884 -4.413v14.71z"
      />
      <path d="M16.036 14.574c1.471 -1.47 1.471 -3.75 0 -5.222" />
      <path d="M18.17 16.707a6.615 6.615 0 0 0 0 -9.34" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconSoundOnFilled',
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
