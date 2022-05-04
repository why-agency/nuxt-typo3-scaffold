<template>
  <div>
    <section>
      <OGridCardsIntro v-bind="data1"></OGridCardsIntro>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        header: {
          text: 'This is test headline',
          layout: 1,
          position: 'left'
        },
        subline: {
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
          layout: 1
        },
        theme: 'dark',
        actions: [
          {
            id: 190,
            pid: 18,
            type: 'a_01_01__action',
            content: {
              text: 'Leistungen',
              link: {
                type: 'url',
                url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary'
            }
          }
        ],
        cards: [
          {
            id: 204,
            pid: 1,
            type: 'm_01_02__card',
            content: {
              variant: 'link',
              color: 'warm',
              headline: 'Unsere Teams',
              headlinelayout: 0,
              subline: 'Unsere Teams',
              text: '',
              image: null,
              url: {
                type: 'page',
                url: '/karriere/unsere-teams',
                target: '',
                title: '',
                class: ''
              }
            }
          },
          {
            id: 205,
            pid: 1,
            type: 'm_01_02__card',
            content: {
              variant: 'link',
              color: 'warm',
              headline: 'Kultur & Benefits',
              headlinelayout: 0,
              subline: 'Kultur & Benefits',
              text: '',
              image: null,
              url: {
                type: 'page',
                url: '/karriere/kultur-benefits',
                target: '',
                title: '',
                class: ''
              }
            }
          },
          {
            id: 206,
            pid: 1,
            type: 'm_01_02__card',
            content: {
              variant: 'link',
              color: 'warm',
              headline: 'Bewerbung & Onboarding',
              headlinelayout: 0,
              subline: 'Bewerbung & Onboarding',
              text: '',
              image: null,
              url: {
                type: 'page',
                url: '/karriere/bewerbung-onboarding',
                target: '',
                title: '',
                class: ''
              }
            }
          },
          {
            id: 207,
            pid: 1,
            type: 'm_01_02__card',
            content: {
              variant: 'link',
              color: 'warm',
              headline: 'Bewerbung & Onboarding',
              headlinelayout: 0,
              subline: 'Bewerbung & Onboarding',
              text: '',
              image: null,
              url: {
                type: 'page',
                url: '/karriere/bewerbung-onboarding',
                target: '',
                title: '',
                class: ''
              }
            }
          },
          {
            id: 208,
            pid: 1,
            type: 'm_01_02__card',
            content: {
              variant: 'link',
              color: 'warm',
              headline: 'Bewerbung & Onboarding',
              headlinelayout: 0,
              subline: 'Bewerbung & Onboarding',
              text: '',
              image: null,
              url: {
                type: 'page',
                url: '/karriere/bewerbung-onboarding',
                target: '',
                title: '',
                class: ''
              }
            }
          },
          {
            id: 209,
            pid: 1,
            type: 'm_01_02__card',
            content: {
              variant: 'link',
              color: 'warm',
              headline: 'Bewerbung & Onboarding',
              headlinelayout: 0,
              subline: 'Bewerbung & Onboarding',
              text: '',
              image: null,
              url: {
                type: 'page',
                url: '/karriere/bewerbung-onboarding',
                target: '',
                title: '',
                class: ''
              }
            }
          }
        ],
        image: [
          [
            {
              publicUrl:
                'https://development.corporate.cms.gbk.exu.red/fileadmin/_processed_/c/8/csm_people-shooting-gatewaygardens_klein_47a726deaf.jpg',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename:
                  'csm_people-shooting-gatewaygardens_klein_47a726deaf.jpg',
                originalUrl:
                  'fileadmin/goldbeck.de/03_people/besprechung/people-shooting-gatewaygardens_klein.jpg',
                uidLocal: 281,
                fileReferenceUid: 954,
                size: '18 MB',
                link: null,
                dimensions: {
                  width: 7978,
                  height: 3988
                },
                cropDimensions: {
                  width: 7978,
                  height: 3988
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0,
                      y: 0.1739604524600567,
                      width: 1,
                      height: 0.7495303694427051
                    },
                    selectedRatio: '2:1',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.36,
                      y: 0.00031308703819661864,
                      width: 0.375,
                      height: 0.9993738259236068
                    },
                    selectedRatio: '9:16',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://ik.imagekit.io/wofyqrpwmlp/dev/_processed_/c/8/csm_people-shooting-gatewaygardens_klein_47a726deaf.jpg',
                publicPath:
                  '/_processed_/c/8/csm_people-shooting-gatewaygardens_klein_47a726deaf.jpg'
              },
              useCase: 'default',
              ratio: '2:1'
            },
            {
              publicUrl:
                'https://development.corporate.cms.gbk.exu.red/fileadmin/_processed_/c/8/csm_people-shooting-gatewaygardens_klein_88cf3ec9ad.jpg',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename:
                  'csm_people-shooting-gatewaygardens_klein_88cf3ec9ad.jpg',
                originalUrl:
                  'fileadmin/goldbeck.de/03_people/besprechung/people-shooting-gatewaygardens_klein.jpg',
                uidLocal: 281,
                fileReferenceUid: 954,
                size: '8 MB',
                link: null,
                dimensions: {
                  width: 2991,
                  height: 5317
                },
                cropDimensions: {
                  width: 2991,
                  height: 5317
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0,
                      y: 0.1739604524600567,
                      width: 1,
                      height: 0.7495303694427051
                    },
                    selectedRatio: '2:1',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.36,
                      y: 0.00031308703819661864,
                      width: 0.375,
                      height: 0.9993738259236068
                    },
                    selectedRatio: '9:16',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://ik.imagekit.io/wofyqrpwmlp/dev/_processed_/c/8/csm_people-shooting-gatewaygardens_klein_88cf3ec9ad.jpg',
                publicPath:
                  '/_processed_/c/8/csm_people-shooting-gatewaygardens_klein_88cf3ec9ad.jpg'
              },
              useCase: 'mobile',
              ratio: '9:16'
            }
          ]
        ]
      }
    }
  }
}
</script>
