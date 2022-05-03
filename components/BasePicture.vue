<template>
  <picture class="object-cover w-full">
    <source
      :srcset="_srcset.src"
      :media="`(min-width: ${breakpoints.desktop}px)`"
    />
    <source
      v-if="_srcset.tabletSrc"
      :srcset="_srcset.tabletSrc"
      :media="`(min-width: ${breakpoints.tablet}px)`"
    />
    <source v-if="_srcset.mobileSrc" :srcset="_srcset.mobileSrc" />
    <img
      :src="_srcset.src"
      :sizes="sizes"
      :alt="alt"
      :class="size"
      class="rounded-[inherit] object-cover"
    />
  </picture>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    srcsets: {
      type: Object,
      default: () => ({
        mobileSrc: ['?tr=w-375 375w', '?tr=w-640 640w'],
        tabletSrc: ['?tr=w-768 768w'],
        desktopSrc: [
          '?tr=w-1024 1024w',
          '?tr=w-1280 1280w',
          '?tr=w-1536 1536w',
          '?tr=w-1920 1920w'
        ]
      })
    },
    sizes: {
      type: String,
      default: null
    },
    breakpoints: {
      type: Object,
      default: () => ({
        tablet: 768,
        desktop: 1024
      })
    },
    format: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: 'w-full'
    }
  },
  computed: {
    cropVariants() {
      if (!this.images || this.images.length === 0) {
        return {}
      }
      const desktopCrop = this.getCropVariant([
        'desktop',
        'default',
        this.format
      ])
      const tabletCrop = this.getCropVariant(['tablet'])
      const mobileCrop = this.getCropVariant(['mobile'])

      return {
        desktopCrop,
        tabletCrop,
        mobileCrop
      }
    },
    _srcset() {
      const { desktopSrc, tabletSrc, mobileSrc } = this.srcsets
      const { desktopCrop, tabletCrop, mobileCrop } = this.cropVariants
      return {
        src: this.getSrcset(desktopSrc, desktopCrop),
        tabletSrc: this.getSrcset(
          tabletSrc || mobileSrc || desktopSrc,
          tabletCrop || mobileCrop || desktopCrop
        ),
        mobileSrc: this.getSrcset(
          mobileSrc || desktopSrc,
          mobileCrop || desktopCrop
        )
      }
    },
    alt() {
      return this.images.flat()[0]?.properties?.alternative || ''
    }
  },
  methods: {
    getCropVariant(useCases) {
      return useCases
        .filter(useCase => useCase)
        .reduce((cropVariantString, useCase) => {
          return (
            this.images.flat().find(image => image.useCase === useCase)?.cdn
              ?.publicUrl || cropVariantString
          )
        }, '')
    },
    getSrcset(srcsets, cropVariant) {
      return cropVariant && srcsets
        ? srcsets.map(srcset => `${cropVariant}${srcset}`).join(', ')
        : null
    }
  }
}
</script>
