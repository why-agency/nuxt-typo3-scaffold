<template>
  <section class="relative py-10 lg:py-0 lg:pt-24 xl:pt-32">
    <!-- START background image -->
    <div
      v-if="backgroundImage"
      role="presentation"
      class="
        absolute
        top-0
        left-0
        w-full
        h-3/4
        min-h-[256px]
        md:min-h-[400px]
        lg:h-[864px]
      "
      :class="{ dark: theme === 'dark' }"
    >
      <picture v-if="backgroundImage">
        <source
          :srcset="`${backgroundImage.mobileSrc}?tr=w-375,h-600 1x, ${backgroundImage.mobileSrc}?tr=w-750,h-1200 2x, ${backgroundImage.mobileSrc}?tr=w-1125,h-1800 3x`"
          media="(max-width: 375px)"
        />
        <source
          :srcset="`${backgroundImage.mobileSrc}?tr=w-428,h-600 1x, ${backgroundImage.mobileSrc}?tr=w-856,h-1200 2x, ${backgroundImage.mobileSrc}?tr=w-1284,h-1800 3x`"
          media="(max-width: 428px)"
        />
        <source
          :srcset="`${backgroundImage.mobileSrc}?tr=w-768,h-600 1x, ${backgroundImage.mobileSrc}?tr=w-1536,h-1200 2x, ${backgroundImage.mobileSrc}?tr=w-2304,h-1800 3x`"
          media="(max-width: 768px)"
        />
        <source
          :srcset="`${backgroundImage.mobileSrc}?tr=w-1024,h-600 1x, ${backgroundImage.mobileSrc}?tr=w-2048,h-1200 2x`"
          media="(max-width: 1023px)"
        />
        <source
          :srcset="`${backgroundImage.src}?tr=w-1024,h-864 1024w, ${backgroundImage.src}?tr=w-1280,h-864 1280w, ${backgroundImage.src}?tr=w-1536,h-864 1536w, ${backgroundImage.src}?tr=w-1920,h-864 1920w, ${backgroundImage.src}?tr=w-2600,h-864 2600w`"
          media="(min-width: 1024px)"
        />
        <img
          loading="lazy"
          :alt="backgroundImage.alt"
          width="1920"
          height="864"
          :src="`${backgroundImage.src}?tr=w-1920,h-864`"
          class="absolute top-0 left-0 object-cover w-full h-full"
        />
      </picture>

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
    <!-- END backround image -->

    <div class="relative">
      <!-- START grid header -->
      <div class="frame-default" :class="{ dark: theme === 'dark' && image }">
        <BaseHeadline
          tag="h2"
          class="dark:text-white md:max-w-3xl xxl:max-w-5xl"
          :level="header.layout"
          :text="header.text"
        />

        <BaseSubline
          v-if="subline"
          v-bind="subline"
          class="
            mt-6
            lg:mt-12
            line-clamp-3
            md:max-w-3xl
            xxl:max-w-5xl
            dark:text-white
          "
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
        class="flex-row justify-end hidden lg:flex frame-default"
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
    backgroundImage() {
      if (!this.image || !this.image.length) {
        return
      }

      const image = this.image.flat()
      const src = image[0].cdn.publicUrl
      const mobileSrc = image[1]?.cdn.publicUrl || src

      return { src, mobileSrc, alt: image[0]?.properties.alternative }
    },
    $_textColor() {
      return this.theme === 'dark' ? 'text-white' : 'text-black'
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
