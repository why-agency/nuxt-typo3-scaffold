<template>
  <div class="flex">
    <a
      v-for="icon in icons"
      :key="icon.text"
      :href="icon.link.url"
      class="focus:outline-none focus:ring focus:ring-focus"
      :target="target"
    >
      <BaseButtonIcon
        v-if="icon.icon.name"
        :variant="variant"
        :color="color"
        tabindex="-1"
      >
        <component :is="`IconSocial${icon.icon.name}`" />
      </BaseButtonIcon>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: 'black'
    },
    variant: {
      type: String,
      default: 'outline'
    },
    target: {
      type: String,
      default: '_blank'
    }
  }
}
</script>
