<template>
  <div class="m-12 space-y-8">
    <BaseLogo class="my-20" />
    <div>
      <BaseAction to="/" variant="outline" color="primary">
        <template #iconSuffix>
          <IconChevronRightMedium />
        </template>
        <template #iconPrefix>
          <IconArrowRightMedium />
        </template>
        Hello
      </BaseAction>
      <BaseAction to="/" variant="filled" color="primary">
        <template #iconSuffix>
          <IconArrowUpRightThin />
        </template>
        <template #iconPrefix>
          <IconArrowRightThin />
        </template>
        Hello
      </BaseAction>
    </div>
    <div>
      <BaseAction to="/" variant="text" color="primary">Hello</BaseAction>
      <BaseAction to="/" variant="text" color="secondary">Hello</BaseAction>
      <BaseAction to="/" variant="text" color="tertiary">Hello</BaseAction>
      <div class="bg-black p-4">
        <BaseAction to="/" variant="text" color="white">Hello</BaseAction>
      </div>
    </div>

    <BaseHeadline animate>BaseHeadline H1</BaseHeadline>
    <BaseHeadline :layout="2" animate>BaseHeadline H2</BaseHeadline>
    <BaseHeadline :layout="3" animate>BaseHeadline H3</BaseHeadline>
    <BaseHeadline :layout="4" animate>BaseHeadline H4</BaseHeadline>
    <BaseHeadline :layout="5" animate>BaseHeadline H5</BaseHeadline>
    <BaseHeadline :layout="6" animate>BaseHeadline H6</BaseHeadline>

    <BaseHtmlParser :content="bodytext" />

    <BaseSubline
      tag="p"
      v-bind="subline"
      class="
        mt-6
        lg:mt-12
        line-clamp-3
        md:max-w-3xl
        2xl:max-w-5xl
        dark:text-white
      "
    />

    <BaseCheckbox id="test" v-model="test">Label</BaseCheckbox>

    <div class="">
      <BaseButtonIcon to="/" variant="filled" color="black">
        <IconArrowRightMedium />
      </BaseButtonIcon>
      <BaseButtonIcon to="/" variant="outline" color="black">
        <IconSocialTwitter />
      </BaseButtonIcon>
      <BaseButtonIcon to="/" variant="transparent" color="black">
        <IconMenuMedium />
      </BaseButtonIcon>
    </div>

    <div class="bg-black p-4">
      <BaseButtonIcon to="/" variant="filled" color="white">
        <IconMenuMedium />
      </BaseButtonIcon>
      <BaseButtonIcon to="/" variant="outline" color="white">
        <IconMenuMedium />
      </BaseButtonIcon>
      <BaseButtonIcon to="/" variant="transparent" color="white">
        <IconMenuMedium />
      </BaseButtonIcon>
    </div>

    <BaseReveal class="mt-20" :delay="5">
      <MActionBar class="mt-10" :actions="actions" />
    </BaseReveal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodytext:
        '<p>Stetig zunehmender Verkehr, mangelnde Parkflächen und neue Mobilitäts-Formen: Themen, die uns heute bereits begegnen und auch in Zukunft vor neue Herausforderungen stellen werden.&nbsp;<br> <br> Intelligente Parkraum-Lösungen von GOLDBECK bieten daher flexible Konzepte, die heute schon an morgen denken, Handlungsfreiheit schenken und uns fit für die Zukunft machen.</p>',

      subline: {
        layout: 1,
        text: "this is the baseSubline component and it's great"
      },
      test: false,
      actions: [
        {
          id: 129,
          pid: 57,
          type: 'a_01_01__action',
          content: {
            text: 'Neubau',
            link: {
              type: 'page',
              url: '/produkte-und-services/neubau',
              target: '',
              title: '',
              class: ''
            },
            variant: 'filled',
            color: 'primary',
            size: 'default',
            icon: {
              name: 'ArrowUpRight',
              position: ''
            }
          }
        },
        {
          id: 130,
          pid: 57,
          type: 'a_01_01__action',
          content: {
            text: 'Bauen im Bestand',
            link: {
              type: 'page',
              url: '/produkte-und-services/bauen-im-bestand',
              target: '',
              title: '',
              class: ''
            },
            variant: 'outline',
            color: 'primary',
            size: 'default',
            icon: {
              name: 'ArrowUpRight',
              position: 'trailing'
            }
          }
        },
        {
          id: 131,
          pid: 57,
          type: 'a_01_01__action',
          content: {
            text: 'Property Services',
            link: {
              type: 'page',
              url: '/produkte-und-services/services/property-services',
              target: '',
              title: '',
              class: ''
            },
            variant: 'outline',
            color: 'primary',
            size: 'default',
            icon: {
              name: 'ArrowUpRight',
              position: 'trailing'
            }
          }
        }
      ]
    }
  }
}
</script>
