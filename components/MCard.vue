<template>
  <div
    class="invisible glide__slide !h-[394px]"
    :class="{
      'text-white bg-primary xl:text-primary xl:bg-transparent':
        isActive && isTextCard,
      '!h-[360px] lg:!h-[504px] border border-primary py-8 px-4 xl:hover:text-white xl:hover:bg-primary transition duration-500':
        isTextCard,
      'lg:!h-[461px]': !isTextCard,
      'justify-end': !isTextCard
    }"
  >
    <UseDynamicAction
      :to="link.url"
      :tag="link.url ? 'a' : 'div'"
      class="flex flex-col relative h-full"
      @mouseenter.native="isHovered = true"
      @mouseleave.native="isHovered = false"
    >
      <BaseOverline
        v-if="overline"
        :layout="2"
        :text="overline"
        :class="{ 'mb-2.5': !isTextCard }"
      />
      <BasePicture
        v-if="!isTextCard && image"
        :images="image"
        :srcsets="srcsets"
        :crop-variant="imageCropVariant"
        class="
          relative
          before:block
          before:content-['']
          before:w-full
          before:h-full
          before:absolute
          before:top-0
          before:left-0
          before:bg-gradient-to-b
          before:from-transparent
          before:to-black/60
        "
      />
      <div
        v-if="header && header.text"
        class="flex justify-between mt-4"
        :class="{
          'absolute bottom-4 left-4 text-white w-[calc(100%-32px)]':
            !isTextCard,
          'flex-1': isTextCard
        }"
      >
        <BaseHeadline v-bind="header" />
        <transition
          enter-class="opacity-0"
          enter-active-class="transition ease-out duration-500"
          enter-to-class="opacity-100"
          leave-to-class="opacity-0"
          leave-active-class="transition ease-in duration-300"
        >
          <div
            v-if="!isTextCard"
            class="
              invisible
              bg-white
              text-primary
              w-8
              h-8
              flex
              items-center
              justify-center
              flex-shrink-0
              self-end
            "
            :class="{ '!visible': isHovered }"
          >
            <IconArrowRightMedium class="w-5" />
          </div>
        </transition>
      </div>
      <div v-if="isTextCard" class="flex items-center">
        <component :is="`Icon${iconName}`" v-if="iconName" />
        <BaseSubline :layout="2" :text="subline" />
      </div>
    </UseDynamicAction>
  </div>
</template>

<script setup>
import { ref, computed } from '@nuxtjs/composition-api'

const props = defineProps({
  header: {
    type: Object,
    default: undefined
  },
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: [Object, String],
    default: undefined
  },
  overline: {
    type: String,
    default: ''
  },
  subline: {
    type: String,
    default: ''
  },
  image: {
    type: Array,
    default: undefined
  },
  isTextCard: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  },
  imageCropVariant: {
    type: String,
    default: ''
  },
  srcsets: {
    type: Object,
    default: () => ({
      mobileSrc: ['?tr=w-272 375w'],
      tabletSrc: ['?tr=w-272 768w'],
      desktopSrc: ['?tr=w-344 1024w']
    })
  }
})

const isHovered = ref(false)

const iconName = computed(() => props.icon?.slice(0, -4))
</script>
