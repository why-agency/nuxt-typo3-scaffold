<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="Check " lang="en">Check</title>
    <g fill="currentColor">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.2884 5.96157C19.613 6.21894 19.6674 6.69068 19.41 7.01523L10.7652 17.9167C10.6323 18.0842 10.4342 18.1871 10.2206 18.1994C10.0071 18.2117 9.79847 18.1322 9.64722 17.981L4.64722 12.981C4.35433 12.6881 4.35433 12.2132 4.64722 11.9203C4.94011 11.6274 5.41499 11.6274 5.70788 11.9203L10.1128 16.3252L18.2347 6.08321C18.4921 5.75866 18.9639 5.7042 19.2884 5.96157Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Check',
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
