<template>
  <li
    class="group relative hover:border-white transition-colors duratoin-300 border border-gray-200 w-[298px] h-[27rem] cursor-pointer"
    :class="{ 'hover:bg-black': !cardImage }"
  >
    <!-- START card content -->
    <UseDynamicAction
      class="flex flex-col h-full p-6 pt-10 transition-colors duration-100 group-hover:text-white"
      :to="detail.url"
    >
      <BaseHeadline :text="title" :level="6" tag="p" class="z-20 h-16" />

      <div class="z-20 flex flex-col justify-between flex-1 mt-6">
        <BaseHtmlParser :content="address" tag="p" />

        <BaseHtmlParser :content="contactOptions" tag="p" />

        <div class="flex items-center font-bold text-overline3">
          {{ $t('View location') }}
          <IconArrowRight class="w-3 h-3 ml-2" />
        </div>
      </div>
    </UseDynamicAction>
    <!-- END card content -->

    <!-- START card background -->
    <img
      class="absolute top-0 left-0 z-10 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      v-bind="cardImage"
      loading="lazy"
    />

    <BaseButtonIcon
      class="absolute top-0 right-0 z-20 transition-opacity duration-100 opacity-0 group-hover:opacity-100"
      color="white"
      tag="div"
    >
      <IconArrowUpRight />
    </BaseButtonIcon>
    <!-- END card background -->
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: Array,
      default: () => []
    },
    address: {
      type: String,
      default: ''
    },
    phone: {
      type: Object,
      default: () => {}
    },
    fax: {
      type: Object,
      default: () => null
    },
    email: {
      type: Object,
      default: () => null
    },
    detail: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    contactOptions() {
      const contactOptions = [this.phone, this.fax, this.email]

      return contactOptions
        .filter(option => option && option.url)
        .reduce((text, currentOption, index) => {
          const contactString = currentOption.text + ' ' + currentOption.url
          return index === 0
            ? text + contactString
            : text + '<br>' + contactString
        }, '')
    },
    cardImage() {
      const defaultImage = {
        properties: {
          alt: 'Goldbeck Standort',
          width: 430,
          height: 298
        },
        cdn: {
          publicUrl: `${this.$config.cdnEndpoint}/goldbeck_standort_bielefeld_EnOfSF7oX.jpg`
        }
      }
      const image =
        this.image && this.image.length ? this.image[0] : defaultImage

      return {
        alt: image.properties.alternative,
        src: `${image.cdn.publicUrl}?tr=w-298,h-430,ow-298,oh-430,obg-00000050`,
        width: image.properties.width,
        height: image.properties.height
      }
    }
  }
}
</script>
