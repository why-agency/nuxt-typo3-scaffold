<template>
  <div class="m-12 space-y-8">
    <div class="mt-10 mt-20 lg:mt-28">
      <BaseHeadline animate text="Components" class="mb-10" :delay="1" />
      <BaseReveal :delay="1.5">
        <div class="flex flex-col space-y-8">
          <BaseAction variant="text" to="/text-multicolumn">
            <BaseOverline text="Text Multicolumn"></BaseOverline>
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/text-accordion">
            <BaseOverline text="Text Accordion" />
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/text-media">
            <BaseOverline text="Text Media" />
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/main-intro-base">
            <BaseOverline text="Main Intro" />
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/slider-card">
            <BaseOverline text="Slider Card" />
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/tab-base">
            <BaseOverline text="Tab" />
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/slider-image-text">
            <BaseOverline text="Slider Image Text" />
            <IconArrowRightThin />
          </BaseAction>
          <BaseAction variant="text" to="/404-page">
            <BaseOverline text="Error page" />
            <IconArrowRightThin />
          </BaseAction>
        </div>
      </BaseReveal>
    </div>
    <!-- <div>
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
    <BaseDropdown placeholder="Label" :options="options">
      <template #iconPrefix><IconSearch /></template>
    </BaseDropdown>

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
    </BaseReveal> -->

    <o-02-01-IntroMain />
  </div>
</template>

<script>
import { SET_PAGE } from '~typo3/store/mutation-types'

export default {
  data() {
    return {
      bodytext:
        '<p>Stetig zunehmender Verkehr, mangelnde Parkflächen und neue Mobilitäts-Formen: Themen, die uns heute bereits begegnen und auch in Zukunft vor neue Herausforderungen stellen werden.&nbsp;<br> <br> Intelligente Parkraum-Lösungen von GOLDBECK bieten daher flexible Konzepte, die heute schon an morgen denken, Handlungsfreiheit schenken und uns fit für die Zukunft machen.</p>',

      subline: {
        layout: 1,
        text: "this is the baseSubline component and it's great"
      },
      options: [
        {
          id: 1,
          label: 'Option 1'
        },
        {
          id: 2,
          label: 'Option 2'
        },
        {
          id: 3,
          label: 'Option 3'
        },
        {
          id: 4,
          label: 'Option 4'
        },
        {
          id: 5,
          label: 'Option 5'
        },
        {
          id: 6,
          label: 'Option 6'
        }
      ],
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
  },
  mounted() {
    this.$store.commit(SET_PAGE, {
      structure: {
        navigation: {
          context: {
            ctype: 'o_01_01__navigation_main',
            cid: 'O0101NavigationMain',
            uid: 15,
            pid: 1
          },
          content: {
            navigationOuterPages: [
              {
                title: 'API Testing',
                link: '/api-testing',
                target: '',
                active: 0,
                current: 0,
                spacer: 0
              },
              {
                title: 'Link 2',
                link: '/link2',
                target: '',
                active: 0,
                current: 0,
                spacer: 0
              },
              {
                title: 'Link 3',
                link: '/link3',
                target: '',
                active: 0,
                current: 0,
                spacer: 0
              },
              {
                title: 'Link 4',
                link: '/link4',
                target: '',
                active: 0,
                current: 0,
                spacer: 0
              }
            ],
            navigationInnerPages: [
              {
                title: 'API Testing',
                link: '/',
                target: '',
                active: 0,
                current: 0,
                spacer: 0,
                children: [
                  {
                    title: 'Text Multicolumn',
                    link: '/text-multicolumn',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0,
                    children: [
                      {
                        title: 'Unterseite 1',
                        link: '/unterseite1',
                        target: '',
                        active: 0,
                        current: 0,
                        spacer: 0
                      },
                      {
                        title: 'Unterseite 2',
                        link: '/unterseite2',
                        target: '',
                        active: 0,
                        current: 0,
                        spacer: 0
                      }
                    ]
                  },
                  {
                    title: 'Text Media',
                    link: '/text-media',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Text Accordion',
                    link: '/text-accordion',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Slider Card',
                    link: '/slider-card',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Intro Main',
                    link: '/main-intro-base',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  }
                ]
              },
              {
                title: 'Link 2',
                link: '/',
                target: '',
                active: 0,
                current: 0,
                spacer: 0,
                children: [
                  {
                    title: 'Link 2.1',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  }
                ]
              },
              {
                title: 'Link 3',
                link: '/unternehmen',
                target: '',
                active: 0,
                current: 0,
                spacer: 0,
                children: [
                  {
                    title: 'Link 3.1',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 3.2',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 3.3.',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 3.4',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  }
                ]
              },
              {
                title: 'Link 4',
                link: '/',
                target: '',
                active: 0,
                current: 0,
                spacer: 0,
                children: [
                  {
                    title: 'Link 4.1',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 4.2',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 4.3',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  }
                ]
              },
              {
                title: 'Link 5',
                link: '/',
                target: '',
                active: 0,
                current: 0,
                spacer: 0,
                children: [
                  {
                    title: 'Link 5.1',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 5.2',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 5.3',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 5.4',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 5.5',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 5.6',
                    link: '/api/o-03-04-text-image-tab',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Link 5.7',
                    link: '/',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  }
                ]
              },
              {
                title: 'Kontakt',
                link: '/kontakt',
                target: '',
                active: 0,
                current: 0,
                spacer: 0,
                children: [
                  {
                    title: 'Kontaktdaten',
                    link: '/kontaktdaten',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Impressum',
                    link: '/impressum',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  },
                  {
                    title: 'Anfahrt',
                    link: '/anfahrt',
                    target: '',
                    active: 0,
                    current: 0,
                    spacer: 0
                  }
                ]
              }
            ],
            navigationInnerContext: [
              {
                id: 25,
                pid: 1,
                type: 'a_01_01__action',
                content: {
                  text: 'Kontakt',
                  link: {
                    type: 'page',
                    url: '/',
                    target: '',
                    title: '',
                    class: ''
                  },
                  variant: '',
                  color: ''
                }
              },
              {
                id: 26,
                pid: 1,
                type: 'a_01_01__action',
                content: {
                  text: 'Downloads und Links',
                  link: {
                    type: 'page',
                    url: '/',
                    target: '',
                    title: '',
                    class: ''
                  },
                  variant: '',
                  color: ''
                }
              }
            ],
            navigationInnerSocialMedia: [
              {
                id: 27,
                pid: 1,
                type: 'a_01_01__action',
                content: {
                  text: 'https://www.facebook.com',
                  link: {
                    type: 'url',
                    url: 'https://www.facebook.com',
                    target: '',
                    title: '',
                    class: ''
                  },
                  variant: '',
                  color: '',
                  icon: {
                    name: 'Facebook',
                    position: ''
                  }
                }
              },
              {
                id: 28,
                pid: 1,
                type: 'a_01_01__action',
                content: {
                  text: 'https://www.twitter.com',
                  link: {
                    type: 'url',
                    url: 'https://www.twitter.com',
                    target: '',
                    title: '',
                    class: ''
                  },
                  variant: '',
                  color: '',
                  icon: {
                    name: 'Twitter',
                    position: ''
                  }
                }
              },
              {
                id: 30,
                pid: 1,
                type: 'a_01_01__action',
                content: {
                  text: 'https://www.xing.com/',
                  link: {
                    type: 'url',
                    url: 'https://www.xing.com/',
                    target: '',
                    title: '',
                    class: ''
                  },
                  variant: '',
                  color: '',
                  icon: {
                    name: 'Xing',
                    position: ''
                  }
                }
              },
              {
                id: 31,
                pid: 1,
                type: 'a_01_01__action',
                content: {
                  text: 'https://www.linkedin.com',
                  link: {
                    type: 'url',
                    url: 'https://www.linkedin.com',
                    target: '',
                    title: '',
                    class: ''
                  },
                  variant: '',
                  color: '',
                  icon: {
                    name: 'LinkedIn',
                    position: ''
                  }
                }
              }
            ],
            navigationBreadcrumbs: []
          }
        }
      }
    })
  }
}
</script>
