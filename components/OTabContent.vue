<template>
  <div
    class="invisible lg:visible lg:col-span-2 lg:max-w-[736px] flex flex-col pb-10 lg:pb-0 2xl:ml-10 3xl:ml-16 4xl:ml-40"
  >
    <div
      v-if="hasImage"
      class="lg:hidden mb-10"
      :class="{ 'relative self-end w-[calc(100%-28px)] mt-6': hasDeco }"
    >
      <BasePicture :images="tab.image" :srcsets="srcsets" class="rounded" />
      <BaseDecoCircle
        v-if="hasDeco"
        class="!absolute -top-20 mt-3 -left-7 px-0 w-20"
      />
    </div>
    <BaseHeadline v-bind="tab.header" class="mb-6 lg:invisible" />
    <BaseSubline
      v-if="tab.bodytext"
      :text="tab.bodytext"
      :layout="2"
      class="lg:invisible"
    />
    <MActionBar
      v-if="tab.actions"
      :actions="tab.actions"
      position="left"
      class="mt-10 lg:invisible"
    />
  </div>
</template>

<script setup>
/** props */
defineProps({
  tab: {
    type: Object,
    required: true
  },
  hasImage: {
    type: Boolean,
    default: false
  },
  srcsets: {
    type: Object,
    default: null
  },
  hasDeco: {
    type: Boolean,
    default: false
  }
})
</script>