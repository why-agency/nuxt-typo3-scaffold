<template>
  <div>
    <CeFrame>
      <OSliderCard v-bind="sliderText" />
    </CeFrame>
    <CeFrame>
      <OSliderCard v-bind="sliderImages" />
    </CeFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderText: {
        id: '0',
        variant: 'm_01_02__card_text',
        background: 'none',
        header: {
          text: 'Slider cards:<br/> text cards',
          layout: 2,
          position: 'left'
        },
        bodytext: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. In nisl nisi scelerisque eu. Adipiscing at in tellus integer feugiat scelerisque varius.',
          layout: 1
        },
        actions: [
          {
            id: 188,
            pid: 17,
            type: 'a_01_01__action',
            content: {
              text: 'Action 1',
              link: {
                type: 'page',
                url: '/api/o-03-01-text-multicolumn',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary'
            }
          },
          {
            id: 189,
            pid: 17,
            type: 'a_01_01__action',
            content: {
              text: 'Action 2',
              link: {
                type: 'page',
                url: '/api/o-03-03-slider-cards',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'secondary',
              icon: {
                name: 'ArrowRightMedium',
                position: ''
              }
            }
          }
        ],
        image: null,
        imagegradient: 'light',
        cards: [
          {
            id: 0,
            pid: 17,
            type: 'm_01_02__card_text',
            content: {
              overline: 'Overline',
              header: {
                text: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                layout: 4,
                position: 'left'
              },
              subline:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. In nisl nisi scelerisque eu.',
              link: ''
            }
          },
          {
            id: 1,
            pid: 17,
            type: 'm_01_02__card_text',
            content: {
              overline: 'Overline',
              header: {
                text: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                layout: 4,
                position: 'left'
              },
              subline: 'In Deutschland',
              link: {
                type: 'page',
                url: '/allgemeine-downloads',
                target: '',
                title: '',
                class: '',
                link: 'Allgemeine Downloads',
                aTagParams: ''
              }
            }
          },
          {
            id: 2,
            pid: 17,
            type: 'm_01_02__card_text',
            content: {
              overline: 'Overline',
              header: {
                text: '3 - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l',
                layout: 4,
                position: 'left'
              },
              subline: 'Lorem ipsum dolor sit amet.',
              link: {
                type: 'page',
                url: '/client-testing/testpage-001',
                target: '',
                title: '',
                class: '',
                link: 'Testpage_001',
                aTagParams: ''
              }
            }
          },
          {
            id: 3,
            pid: 17,
            type: 'm_01_02__card_text',
            content: {
              overline: 'Overline',
              header: {
                text: '4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                layout: 4,
                position: 'left'
              },
              subline:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              icon: 'null',
              link: {
                type: 'page',
                url: '/client-testing/testpage-001',
                target: '',
                title: '',
                class: '',
                link: 'Testpage_001',
                aTagParams: ''
              }
            }
          }
        ]
      },
      sliderImages: {
        id: '1',
        variant: 'm_01_01__card_text_image',
        background: 'sand',
        header: {
          text: 'Slider cards:<br/>image cards',
          layout: 2,
          position: 'left'
        },
        bodytext: {
          text: 'Arcu cursus vitae congue mauris rhoncus aenean vel elit. Ultricies tristique nulla aliquet enim. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Habitant morbi tristique senectus et netus et malesuada fames. Ultrices tincidunt arcu non sodales neque sodales ut etiam.',
          layout: 2
        },
        actions: [
          {
            id: 44,
            pid: 17,
            type: 'a_01_01__action',
            content: {
              text: 'Action',
              link: {
                type: 'page',
                url: '/api/o-03-01-text-multicolumn',
                target: '',
                title: '',
                class: ''
              },
              variant: 'outline',
              color: 'white',
              icon: {
                name: 'ArrowRightMedium',
                position: 'trailing'
              }
            }
          }
        ],
        image: [
          [
            {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_demo_002_95ae6bcdb8.jpg',
                uidLocal: 5,
                fileReferenceUid: 35,
                size: '373 KB',
                link: null,
                dimensions: {
                  width: 1152,
                  height: 1536
                },
                cropDimensions: {
                  width: 1152,
                  height: 1536
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.24967405475880053,
                      y: 0,
                      width: 0.500651890482399,
                      height: 1
                    },
                    selectedRatio: '3:4',
                    focusArea: null
                  },
                  tablet: {
                    cropArea: {
                      x: 0,
                      y: 0.20039062500000002,
                      width: 1,
                      height: 0.59921875
                    },
                    selectedRatio: '5:2',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.08279009126466753,
                      y: 0,
                      width: 0.834419817470665,
                      height: 1
                    },
                    selectedRatio: '5:4',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
                publicPath: '/_processed_/2/e/csm_demo_002_95ae6bcdb8.jpg'
              },
              useCase: 'desktop',
              ratio: '3:4'
            },
            {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_demo_002_bdda7e4b0d.jpg',
                uidLocal: 5,
                fileReferenceUid: 35,
                size: '529 KB',
                link: null,
                dimensions: {
                  width: 2301,
                  height: 920
                },
                cropDimensions: {
                  width: 2301,
                  height: 920
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.24967405475880053,
                      y: 0,
                      width: 0.500651890482399,
                      height: 1
                    },
                    selectedRatio: '3:4',
                    focusArea: null
                  },
                  tablet: {
                    cropArea: {
                      x: 0,
                      y: 0.20039062500000002,
                      width: 1,
                      height: 0.59921875
                    },
                    selectedRatio: '5:2',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.08279009126466753,
                      y: 0,
                      width: 0.834419817470665,
                      height: 1
                    },
                    selectedRatio: '5:4',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
                publicPath: '/_processed_/2/e/csm_demo_002_bdda7e4b0d.jpg'
              },
              useCase: 'tablet',
              ratio: '5:2'
            },
            {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_demo_002_be5a5d55e2.jpg',
                uidLocal: 5,
                fileReferenceUid: 35,
                size: '617 KB',
                link: null,
                dimensions: {
                  width: 1920,
                  height: 1536
                },
                cropDimensions: {
                  width: 1920,
                  height: 1536
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.24967405475880053,
                      y: 0,
                      width: 0.500651890482399,
                      height: 1
                    },
                    selectedRatio: '3:4',
                    focusArea: null
                  },
                  tablet: {
                    cropArea: {
                      x: 0,
                      y: 0.20039062500000002,
                      width: 1,
                      height: 0.59921875
                    },
                    selectedRatio: '5:2',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.08279009126466753,
                      y: 0,
                      width: 0.834419817470665,
                      height: 1
                    },
                    selectedRatio: '5:4',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
                publicPath: '/_processed_/2/e/csm_demo_002_be5a5d55e2.jpg'
              },
              useCase: 'mobile',
              ratio: '5:4'
            }
          ]
        ],
        imagegradient: 'dark',
        cards: [
          {
            id: 4,
            pid: 17,
            type: 'm_01_01__card_text_image',
            content: {
              overline: 'Card Overline',
              header: {
                text: 'Card Header',
                layout: 5,
                position: 'left'
              },
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_02_02_ergebnis.webp',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_demo_001_224a4e1784.jpg',
                    uidLocal: 7,
                    fileReferenceUid: 36,
                    size: '2 MB',
                    link: null,
                    dimensions: {
                      width: 3000,
                      height: 4000
                    },
                    cropDimensions: {
                      width: 3000,
                      height: 4000
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.125,
                          y: 0,
                          width: 0.5,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_02_02_ergebnis.webp',
                    publicPath: '/_processed_/8/6/csm_demo_001_224a4e1784.jpg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                }
              ],
              link: ''
            }
          },
          {
            id: 5,
            pid: 17,
            type: 'm_01_01__card_text_image',
            content: {
              overline: 'Card2 Overline',
              header: {
                text: 'Card2 Header',
                layout: 5,
                position: 'left'
              },
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_demo_003_f8c9ece67e.jpg',
                    uidLocal: 6,
                    fileReferenceUid: 37,
                    size: '319 KB',
                    link: null,
                    dimensions: {
                      width: 1152,
                      height: 1536
                    },
                    cropDimensions: {
                      width: 1152,
                      height: 1536
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.12467405475880051,
                          y: 0,
                          width: 0.500651890482399,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
                    publicPath: '/_processed_/a/3/csm_demo_003_f8c9ece67e.jpg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                }
              ],
              link: {
                type: 'page',
                url: '/downloads-links',
                target: '',
                title: '',
                class: '',
                link: 'Downloads &amp; Links',
                aTagParams: ''
              }
            }
          },
          {
            id: 6,
            pid: 17,
            type: 'm_01_01__card_text_image',
            content: {
              overline: 'Card3 overline',
              header: {
                text: 'Card3 header',
                layout: 5,
                position: 'left'
              },
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_demo_005_ba1917ee99.jpeg',
                    uidLocal: 3,
                    fileReferenceUid: 39,
                    size: '111 KB',
                    link: null,
                    dimensions: {
                      width: 615,
                      height: 820
                    },
                    cropDimensions: {
                      width: 615,
                      height: 820
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.14685615848406547,
                          width: 0.75,
                          height: 0.7062876830318691
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpeg'
                  },
                  cdn: {
                    publicUrl:
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp',
                    publicPath: '/_processed_/d/f/csm_demo_005_ba1917ee99.jpeg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                }
              ],
              link: {
                type: 'page',
                url: '/allgemeine-downloads',
                target: '',
                title: '',
                class: '',
                link: 'Allgemeine Downloads',
                aTagParams: ''
              }
            }
          },
          {
            id: 7,
            pid: 17,
            type: 'm_01_01__card_text_image',
            content: {
              overline: 'Card4 overline',
              header: {
                text: 'Card4 header',
                layout: 5,
                position: 'left'
              },
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_demo_002_a2ea555e00.jpg',
                    uidLocal: 5,
                    fileReferenceUid: 40,
                    size: '405 KB',
                    link: null,
                    dimensions: {
                      width: 1152,
                      height: 1536
                    },
                    cropDimensions: {
                      width: 1152,
                      height: 1536
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.12467405475880051,
                          y: 0,
                          width: 0.500651890482399,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
                    publicPath: '/_processed_/2/e/csm_demo_002_a2ea555e00.jpg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                }
              ],
              link: {
                type: 'page',
                url: '/lieferantenportal',
                target: '',
                title: '',
                class: '',
                link: 'Lieferantenportal',
                aTagParams: ''
              }
            }
          }
        ]
      }
    }
  }
}
</script>
