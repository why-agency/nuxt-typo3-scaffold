<template>
  <section :class="$_bgColor">
    <div
      class="grid gap-y-8 lg:gap-y-4 gap-x-12"
      :class="[
        { 'frame-small': background !== 'none' },
        $_layout,
        $_textAlignment
      ]"
    >
      <div v-for="col in columns" :key="col.id">
        <BaseOverline
          v-if="col.overline.text"
          v-bind="col.overline"
          class="mb-2 hyphens"
          animate
        />

        <BaseHeadline
          v-if="col.header.text"
          v-bind="col.header"
          class="mb-6 hyphens"
          animate
        />

        <BaseSubline
          v-if="col.subline.text"
          v-bind="col.subline"
          class="mb-8 lg:mb-12 hyphens"
          animate
        />

        <BaseReveal v-if="col.bodytext.text">
          <BaseSubline
            v-if="col.bodytext.text"
            v-bind="col.bodytext"
            class="mb-8 lg:mb-12 lg:mt-3"
          />
        </BaseReveal>

        <BaseReveal v-if="col.actions">
          <m-action-bar
            :actions="col.actions"
            position="left"
            :stack="isXxl && has3Cols"
            class="mb-12"
          />
        </BaseReveal>
      </div>
    </div>
  </section>
</template>

<script>
import { useBreakpoints } from '@vueuse/core'
export default {
  props: {
    background: {
      type: String,
      default: 'none'
    },
    column1: {
      type: Object,
      default: undefined
    },
    column2: {
      type: Object,
      default: undefined
    },
    column3: {
      type: Object,
      default: undefined
    },
    variant: {
      type: String,
      default: '1col'
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  setup() {
    const breakpoints = useBreakpoints({ xxl: 1440 })
    const isXxl = breakpoints.greater('xxl')
    return { isXxl }
  },
  computed: {
    has1Col() {
      return this.variant === '1col'
    },
    has2Cols() {
      return this.variant === '2col'
    },
    has3Cols() {
      return this.variant === '3col'
    },
    isLeft() {
      return this.position === 'left'
    },
    isCenter() {
      return this.position === 'center'
    },
    isRight() {
      return this.position === 'right'
    },
    columns() {
      return [this.column1, this.column2, this.column3]
        .filter(col => col)
        .map((col, index) => ({
          ...col,
          id: index + 1
        }))
    },
    $_layout() {
      return {
        'lg:grid-cols-2': this.has2Cols,
        'lg:grid-cols-3': this.has3Cols,
        'lg:max-w-[860px]': this.has1Col
      }
    },
    $_bgColor() {
      return {
        'bg-primary text-white py-8 md:py-16': this.background === 'primary',
        'bg-secondary text-white py-8 md:py-16': this.background === 'secondary'
      }
    },
    $_textAlignment() {
      return this.has1Col
        ? {
            'justify-start': this.column1.position === 'left',
            'justify-center': this.column1.position === 'center',
            'justify-end': this.column1.position === 'right'
          }
        : 'justify-between'
    }
  }
}
</script>
