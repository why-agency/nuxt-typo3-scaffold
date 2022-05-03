<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconSocialFacebook" lang="en">IconSocialFacebook</title>
    <g fill="currentColor">
      <path
        d="M10.281 23v-7.733H7.488v-3.2h2.793V9.628c0 -2.775 1.643 -4.306 4.155 -4.306 1.204 0 2.463 0.216 2.463 0.216v2.724h-1.388c-1.367 0 -1.792 0.854 -1.792 1.729v2.076h3.05l-0.487 3.2h-2.563V23C18.977 22.17 23 17.591 23 12.067 23 5.955 18.075 1 12 1S1 5.955 1 12.067C1 17.591 5.023 22.17 10.281 23z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconSocialFacebook',
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
