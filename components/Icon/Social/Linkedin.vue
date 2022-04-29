<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconSocialLinkedin" lang="en">IconSocialLinkedin</title>
    <g fill="currentColor">
      <path
        d="M1.917 1h20.166C22.633 1 23 1.367 23 1.917v20.166C23 22.633 22.633 23 22.083 23H1.917C1.367 23 1 22.633 1 22.083V1.917C1 1.367 1.367 1 1.917 1zM4.3 19.792h3.3V9.25H4.3v10.542zM5.858 7.783C4.85 7.783 3.933 6.958 3.933 5.858c0 -1.008 0.825 -1.925 1.925 -1.925 1.009 0 1.925 0.825 1.925 1.925S6.958 7.783 5.858 7.783zm10.634 12.009h3.3v-5.684c0 -2.841 -0.642 -5.041 -3.942 -5.041 -1.65 0 -2.658 0.825 -3.117 1.65V9.25H9.617v10.542h3.3v-5.225c0 -1.375 0.183 -2.659 1.925 -2.659 1.65 0 1.65 1.559 1.65 2.75v5.134z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconSocialLinkedin',
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
