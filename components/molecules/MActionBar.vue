<template>
  <div
    v-if="actions.length > 0"
    class="flex flex-col gap-4 md:gap-y-4 md:gap-x-8 md:flex-wrap"
    :class="[$_position, { 'md:flex-row': !stack }]"
  >
    <BaseAction
      v-for="action in actions"
      :key="action.id"
      :to="action.content.link.url"
      :variant="action.content.variant"
      :color="action.content.color"
      :size="action.content.size"
    >
      <BaseHtmlParser :content="action.content.text" tag="span" />
      <template v-if="action.content.icon" #icon>
        <component
          :is="`Icon${action.content.icon.name}`"
          :width="action.content.size === 'large' ? 18 : 14"
          :height="action.content.size === 'large' ? 18 : 14"
        />
      </template>
    </BaseAction>
  </div>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: 'center'
    },
    stack: {
      type: Boolean
    }
  },
  computed: {
    $_position() {
      return {
        'items-start justify-start md:justify-start': this.position === 'left',
        'items-center md:justify-center': this.position === 'center',
        'items-end md:justify-end': this.position === 'right',
        'justify-between': this.position === 'between'
      }
    }
  }
}
</script>
