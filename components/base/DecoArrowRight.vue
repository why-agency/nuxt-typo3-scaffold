<template>
  <BaseDecoAnimation :color="color" :delay="delay" arrow>
    <svg
      width="96"
      height="64"
      viewBox="0 0 96 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          .mask--arrow {
            fill: none;
            stroke: #fff;
            stroke-width: 48px;
          }
        </style>
      </defs>
      <path
        d="M84.0671 64C81.9885 58.5305 86.5704 54.0938 86.1899 48.7862C85.0136 49.0222 83.8374 49.2582 81.8765 49.8669C74.5587 50.7605 67.2395 52.3004 59.9231 52.5477C51.3004 52.7698 42.2861 52.8552 34.4577 48.1802C28.9777 44.9723 24.0221 40.8695 19.4596 36.2573C9.9429 26.8959 3.43619 15.1362 0.198047 2.14641C-0.880738 -1.65614 2.70995 0.446507 4.64014 1.97315C7.87552 16.2556 16.9964 27.4193 27.295 37.7006C31.8575 42.3129 37.206 45.9061 43.9979 46.5537C50.7898 47.2013 57.7118 48.1099 64.5051 48.1112C71.9516 48.125 80.3169 46.088 84.503 43.4537C81.6316 42.235 78.6287 41.4016 75.8886 39.7976C74.9753 39.263 74.4564 37.5725 73.9361 36.5283C75.3739 36.1681 76.813 35.1615 77.7264 35.6962C83.7309 38.0092 89.4738 40.4465 96 43.1574C93.9021 46.7368 91.6741 50.0552 89.4461 53.3735C87.088 56.4308 89.4281 61.776 84.0671 64Z"
        fill="currentColor"
      />
      <g id="mask">
        <path
          class="mask mask--arrow"
          d="M0.937408 1.01605C8.87825 31.431 40.1771 84.1252 101.846 51.5827"
        />
      </g>
    </svg>
  </BaseDecoAnimation>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    delay: {
      type: Number,
      default: 0.2
    }
  }
}
</script>
