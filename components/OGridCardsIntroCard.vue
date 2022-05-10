<template>
  <UseDynamicAction
    ref="card"
    :to="to"
    tag="li"
    class="
      glide__slide
      flex flex-col
      bg-no-repeat
      m-4
      lg:m-0
      relative
      min-h-[340px] min-w-[244px]
      max-w-[244px]
      xxl:min-h-[480px] xxl:min-w-[345px] xxl:max-w-[345px]
      before:absolute
      before:content-['']
      before:inset-[-8px]
      before:border-grey-100
      cursor-pointer
    "
    :class="[
      isSelected
        ? 'before:border bg-black transition duration-300'
        : backgroundColor
    ]"
    @mouseover.native="onMouseEnter"
    @mouseleave.native="onMouseLeave"
  >
    <img
      v-if="imageUrl"
      class="absolute h-full opacity-0 transition duration-300"
      :class="{ 'opacity-70': isSelected }"
      :src="`${imageUrl}?tr=w-345,h-480,f-auto`"
      :srcset="`${imageUrl}?tr=w-345,h-480,f-auto 1x, ${imageUrl}?tr=w-480,h-640,f-auto 2x`"
      alt="image"
      loading="lazy"
    />
    <div>
      <base-marquee-text
        class="mt-10"
        :is-hovered="isSelected"
        :character-count="headline.length"
      >
        <div
          class="top-[-20px] xl:top-0 flex relative"
          :class="leftPositioning"
        >
          <BaseHeadline
            v-for="index in 100"
            :key="index"
            tag="div"
            class="relative pl-20 mt-10 font-secondary text-9xl"
            :class="textColor"
            :level="isXl ? 1 : 3"
          >
            {{ headline }}
          </BaseHeadline>
        </div>
      </base-marquee-text>
      <div>
        <p
          ref="subline"
          class="absolute w-9/12 ml-8 font-bold bottom-12 lg:text-h6"
          :class="[isSelected ? 'opacity-100' : 'opacity-60', textColor]"
        >
          {{ subline }}
        </p>
        <transition
          enter-class="opacity-0"
          enter-active-class="transition ease-out duration-500 delay-300"
          enter-to-class="opacity-100 transform "
          leave-to-class="opacity-0 transform"
          leave-active-class="transition ease-in duration-50"
        >
          <p
            v-if="isSelected"
            class="absolute w-9/12 mt-4 ml-8 text-white bottom-12 line-clamp-3"
          >
            {{ text }}
          </p>
        </transition>
      </div>

      <BaseButtonIcon
        class="absolute top-0 right-0 opacity-0"
        :class="isSelected && 'opacity-100'"
        color="white"
      >
        <IconDownload v-if="variant === 'download'" class="text-primary" />
        <IconArrowUpRightMedium v-else class="text-primary" />
      </BaseButtonIcon>
    </div>
  </UseDynamicAction>
</template>

<script>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useActionType } from '@/composables/useActionType'
import { useBackgroundColor } from '@/composables/useBackgroundColor'

export default {
  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    headline: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    subline: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: [String, Object],
      default: ''
    },
    variant: {
      type: String,
      default: 'link'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: 'secondary'
    }
  },
  setup(props) {
    const breakpoints = useBreakpoints({ ...breakpointsTailwind, '4xl': 1920 })
    const isMd = breakpoints.greater('md')
    const isXl = breakpoints.greater('xl')

    const { isAnchor, type } = useActionType(props.url)
    const backgroundColor = useBackgroundColor(props.background)
    return { isMd, isXl, isAnchor, type, backgroundColor }
  },
  data() {
    return {
      isSelected: false
    }
  },
  computed: {
    leftPositioning() {
      const characterCount = this.headline.length
      if (characterCount <= 19) {
        return 'left-10 md:left-0 xl:left-[-3rem] xxxl:left-0'
      }
      if (characterCount <= 25) {
        return 'left-[3rem] md:left-[2rem] xl:left-[-4rem] xxxl:left-0'
      }
      return 'left-[2rem] md:left-[1rem] xl:left-[-1rem] xxxl:left-0'
    },

    textColor() {
      const isDark = this.color === 'black'

      if (isDark) {
        return this.isSelected
          ? 'text-white opacity-100'
          : 'text-white opacity-80'
      }

      return this.isSelected
        ? 'text-white opacity-100'
        : 'text-gray-650 opacity-40'
    },
    to() {
      return this.url?.url
    }
  },

  watch: {
    isActive(value) {
      value && !this.isMd ? (this.isSelected = true) : (this.isSelected = false)
    },

    isSelected(value) {
      if (value && this.text) {
        this.$gsap.to(this.$refs.subline, {
          duration: 0.5,
          ease: this.$CustomEase?.create('custom', '0, 0.01, 0, 1'),
          y: -75
        })
      } else {
        this.$gsap.to(this.$refs.subline, {
          duration: 0.3,
          delay: 0.2,
          ease: this.$CustomEase?.create('custom', '0, 0.01, 0, 1'),
          y: 0
        })
      }
    }
  },
  mounted() {
    this.isActive && !this.isMd
      ? (this.isSelected = true)
      : (this.isSelected = false)
  },
  methods: {
    onMouseEnter() {
      if (this.isMd) {
        this.isSelected = true
      }
    },
    onMouseLeave() {
      if (this.isMd) {
        this.isSelected = false
      }
    }
  }
}
</script>