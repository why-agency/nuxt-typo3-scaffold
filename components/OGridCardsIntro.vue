<template>
  <section class="relative py-10 lg:py-0 lg:pt-24 xl:pt-32">
    <!-- START background image -->
    <div
      v-if="image"
      class="absolute top-0 left-0 w-full h-3/4 min-h-[256px] md:min-h-[400px] lg:h-[864px]"
      :class="{ dark: theme === 'dark' }"
    >
      <BasePicture :images="image" size="h-full w-full" />
      <div
        class="absolute top-0 left-0 w-full h-full"
        :class="[
          alignment === 'left'
            ? 'bg-gradient-to-r left-0'
            : 'bg-gradient-to-l right-0',

          {
            'from-white/75 to-white/10 dark:from-black/75': gradient !== 'none'
          }
        ]"
      />
    </div>
    <!-- END background image -->

    <div v-if="formattedCards" class="relative">
      <!-- START grid header -->
      <div class="frame-default" :class="{ dark: theme === 'dark' && image }">
        <BaseHeadline
          tag="h2"
          class="dark:text-white md:max-w-3xl 2xl:max-w-5xl"
          :level="header.layout"
          :text="header.text"
        />

        <BaseSubline
          v-if="subline"
          v-bind="subline"
          class="mt-6 lg:mt-12 line-clamp-3 md:max-w-3xl 2xl:max-w-5xl dark:text-white"
        >
          <BaseHtmlParser :content="subline.text" />
        </BaseSubline>

        <MActionBar
          v-if="actions"
          class="mt-6 lg:mt-12"
          :actions="actions"
          position="left"
        />
      </div>
      <!-- END grid header -->

      <!-- START mobile grid -->
      <OGridCardsIntroMobile
        ref="slider"
        :card-count="formattedCards.length"
        :theme="theme"
        class="block lg:hidden"
        :class="$_containerMarginTop"
      >
        <template #default="{ currentSlide }">
          <OGridCardsIntroCard
            v-for="(card, index) in formattedCards"
            ref="card"
            v-bind="card"
            :key="`card-${index}`"
            :is-active="index === currentSlide"
          />
        </template>
      </OGridCardsIntroMobile>
      <!-- END mobile grid -->

      <!-- START desktop grid -->
      <div
        class="justify-end hidden lg:flex frame-default"
        :class="$_containerMarginTop"
      >
        <OGridCardsIntroDesktop ref="grid" :card-count="formattedCards.length">
          <OGridCardsIntroCard
            v-for="(card, index) in formattedCards"
            ref="card"
            v-bind="card"
            :key="`card-${index}`"
            class="skew-y-12"
          />
        </OGridCardsIntroDesktop>
      </div>
      <!-- END desktop grid -->
    </div>
  </section>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
export default {
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    cards: {
      type: Array,
      default: () => []
    },
    header: {
      type: Object,
      default: () => {}
    },
    image: {
      type: Array,
      default: () => []
    },
    subline: {
      type: Object,
      default: () => {}
    },
    theme: {
      type: String,
      default: 'dark'
    },
    alignment: {
      type: String,
      default: 'left'
    },
    gradient: {
      type: String,
      default: 'yes'
    }
  },

  setup() {
    const slider = ref(null)
    const sliderIsVisible = useIntersectionObserver({ target: slider })
    const grid = ref(null)
    const gridIsVisible = useIntersectionObserver({ target: grid })
    return { slider, sliderIsVisible, grid, gridIsVisible }
  },
  computed: {
    formattedCards() {
      return this.cards?.map(card => ({
        ...card.content,
        imageUrl: card.content?.image?.[0]?.cdn?.publicUrl,
        id: card.content?.id
        // TODO: headline layout prop should be removed from the API
      }))
    },
    $_containerMarginTop() {
      return this.header.text || this.subline.text || this.actions
        ? 'mt-16 lg:mt-24'
        : 'mt-40 lg:mt-96'
    }
  },
  watch: {
    sliderIsVisible(isVisible) {
      if (isVisible) {
        const cards = this.$refs.card?.map(card => card.$el)
        if (cards) {
          this.$gsap.from(cards, {
            duration: 1,
            ease: this.$CustomEase?.create('cubic', '0, 0.01, 0, 1'),
            opacity: 0,
            autoAlpha: 0
          })
        }
      }
    },
    gridIsVisible(isVisible) {
      if (isVisible) {
        const cards = this.$refs.card?.map(card => card.$el)
        if (cards) {
          this.$gsap.from(cards, {
            delay: 0.5,
            duration: 1,
            ease: this.$CustomEase?.create('cubic', '0, 0.01, 0, 1'),
            opacity: 0,
            autoAlpha: 0,
            y: 150,
            stagger: {
              amount: 0.4
            }
          })
        }
      }
    }
  }
}
</script>
