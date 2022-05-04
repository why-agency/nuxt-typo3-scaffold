<template>
  <section ref="target">
    <div
      class="
        grid
        lg:grid-cols-[minmax(486px,714px),minmax(496px,900px)] lg:items-center
        gap-y-10
        lg:gap-x-20 lg:gap-y-0
        2xl:gap-x-32
      "
    >
      <!-- Image -->
      <div ref="imageCol" class="invisible pt-6 lg:py-24">
        <BasePicture :images="image[0]" class="rounded max-w-full" />
      </div>

      <div ref="textCol" class="invisible flex flex-col justify-center">
        <BaseOverline
          v-if="overline"
          v-bind="overline"
          class="break-words hyphens mb-2"
        />
        <BaseHeadline
          v-if="header"
          v-bind="header"
          class="break-words mb-5 md:mb-8"
        />
        <BaseSubline
          v-if="bodytext"
          v-bind="bodytext"
          class="break-words hyphens"
        />

        <MActionBar
          v-if="actions"
          class="mt-8 md:mt-16"
          position="left"
          :actions="actions"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {
  useIntersectionObserver,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import { ref } from '@nuxtjs/composition-api'

export default {
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    image: {
      type: Array,
      default: () => []
    },
    overline: {
      type: Object,
      default: undefined
    },
    header: {
      type: Object,
      default: undefined
    },
    bodytext: {
      type: Object,
      default: undefined
    }
  },
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isLg = breakpoints.greater('lg')
    const target = ref(null)
    const isVisible = ref(false)
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          stop()
        }
        isVisible.value = isIntersecting
      }
    )

    return { target, isLg, isVisible }
  },
  watch: {
    isVisible(isVisible) {
      if (isVisible) {
        this.initRevealAnimation()
      }
    }
  },
  methods: {
    initRevealAnimation() {
      const tl = this.$gsap.timeline()
      const offsetImage = -30
      const offsetText = 30
      const { imageCol, textCol } = this.$refs
      if (this.isLg) {
        tl.from(imageCol, {
          opacity: 0,
          autoAlpha: 0,
          x: offsetImage,
          duration: 0.6
        })
        tl.from(
          textCol,
          {
            opacity: 0,
            autoAlpha: 0,
            x: offsetText,
            duration: 0.6,
            delay: 0.6
          },
          '<'
        )
      } else {
        this.$gsap.utils.toArray([imageCol, textCol]).forEach(element => {
          tl.from(element, {
            opacity: 0,
            autoAlpha: 0,
            y: 30,
            duration: 1,
            ease: 'power2.out'
          })
        })
      }
    }
  }
}
</script>
