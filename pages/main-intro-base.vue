<template>
  <div>
    <section>
      <div class="frame-default space-after-default">
        <OMainIntroBase v-bind="data1" />
      </div>
    </section>
    <section>
      <div class="frame-full space-after-default">
        <OMainIntroBase v-bind="data2" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        variant: 'dark',
        alignment: 'text-left',
        imagevariant: 'image-cropped',
        background: 'none',
        animation: 'no',
        header: {
          text: 'this is a main intro with image on the left',
          layout: 1
        },

        bodytext: {
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
          layout: 1
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
              filename: 'csm_demo_003_aec7f391b7.jpg',
              uidLocal: 6,
              fileReferenceUid: 8,
              size: '341 KB',
              link: null,
              dimensions: {
                width: 2301,
                height: 1292
              },
              cropDimensions: {
                width: 2301,
                height: 1292
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: 0,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    x: 0.16623207301173404,
                    y: 0,
                    width: 0.6675358539765319,
                    height: 1
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    x: 0.09206142256989712,
                    y: 0,
                    width: 0.8158771548602057,
                    height: 1
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    x: 0.2269171506459642,
                    y: 0,
                    width: 0.5461656987080716,
                    height: 1
                  },
                  selectedRatio: '9:11',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              publicPath: '/_processed_/a/3/csm_demo_003_aec7f391b7.jpg'
            },
            useCase: 'desktop',
            ratio: '16:9'
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
              filename: 'csm_demo_003_f67d452305.jpg',
              uidLocal: 6,
              fileReferenceUid: 8,
              size: '429 KB',
              link: null,
              dimensions: {
                width: 1536,
                height: 1536
              },
              cropDimensions: {
                width: 1536,
                height: 1536
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: 0,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    x: 0.16623207301173404,
                    y: 0,
                    width: 0.6675358539765319,
                    height: 1
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    x: 0.09206142256989712,
                    y: 0,
                    width: 0.8158771548602057,
                    height: 1
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    x: 0.2269171506459642,
                    y: 0,
                    width: 0.5461656987080716,
                    height: 1
                  },
                  selectedRatio: '9:11',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              publicPath: '/_processed_/a/3/csm_demo_003_f67d452305.jpg'
            },
            useCase: 'crop',
            ratio: '1:1'
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
              filename: 'csm_demo_003_38cffabab1.jpg',
              uidLocal: 6,
              fileReferenceUid: 8,
              size: '536 KB',
              link: null,
              dimensions: {
                width: 1877,
                height: 1536
              },
              cropDimensions: {
                width: 1877,
                height: 1536
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: 0,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    x: 0.16623207301173404,
                    y: 0,
                    width: 0.6675358539765319,
                    height: 1
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    x: 0.09206142256989712,
                    y: 0,
                    width: 0.8158771548602057,
                    height: 1
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    x: 0.2269171506459642,
                    y: 0,
                    width: 0.5461656987080716,
                    height: 1
                  },
                  selectedRatio: '9:11',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              publicPath: '/_processed_/a/3/csm_demo_003_38cffabab1.jpg'
            },
            useCase: 'wide',
            ratio: '11:9'
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
              filename: 'csm_demo_003_4d14d3d2e5.jpg',
              
              uidLocal: 6,
              fileReferenceUid: 8,
              size: '355 KB',
              link: null,
              dimensions: {
                width: 1256,
                height: 1536
              },
              cropDimensions: {
                width: 1256,
                height: 1536
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: 0,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    x: 0.16623207301173404,
                    y: 0,
                    width: 0.6675358539765319,
                    height: 1
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    x: 0.09206142256989712,
                    y: 0,
                    width: 0.8158771548602057,
                    height: 1
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    x: 0.2269171506459642,
                    y: 0,
                    width: 0.5461656987080716,
                    height: 1
                  },
                  selectedRatio: '9:11',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
              publicPath: '/_processed_/a/3/csm_demo_003_4d14d3d2e5.jpg'
            },
            useCase: 'mobil',
            ratio: '9:11'
          }
        ],
        actions: [
          {
            id: 1,
            pid: 7,
            type: 'a_01_01__action',
            content: {
              text: 'One',
              link: {
                type: 'page',
                url: '/api',
                target: '',
                title: '',
                class: ''
              },
              variant: 'outline',
              color: 'primary',
              icon: {
                name: 'ArrowRight',
                position: ''
              }
            }
          },
          {
            id: 2,
            pid: 7,
            type: 'a_01_01__action',
            content: {
              text: 'Two',
              link: {
                type: 'page',
                url: '/api',
                target: '',
                title: '',
                class: ''
              },
              variant: 'outline',
              color: 'primary',
              icon: {
                name: 'ArrowRight',
                position: ''
              }
            }
          },
          {
            id: 3,
            pid: 7,
            type: 'a_01_01__action',
            content: {
              text: 'Three',
              link: {
                type: 'page',
                url: '/client-testing',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary',
              icon: {
                name: 'ArrowRight',
                position: ''
              }
            }
          }
        ]
      },
      data2: {
    
        variant: 'dark',
        alignment: 'text-left',
        imagevariant: 'image-fullscreen',
        background: 'none',
        animation: 'no',
        header: {
          text: 'this is a main intro <br /> with fullscreen Image.',
          layout: 2
        },

        bodytext: {
          text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
          layout: 1
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
              filename: 'csm_demo_004_e5b6c397c5.jpg',
              originalUrl:
                'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_004.jpg',
              uidLocal: 4,
              fileReferenceUid: 2,
              size: '259 KB',
              link: null,
              dimensions: {
                width: 2299,
                height: 1292
              },
              cropDimensions: {
                width: 2299,
                height: 1292
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: -0.001,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    height: 0.6616766467065869,
                    width: 0.442,
                    x: 0.318,
                    y: 0
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    height: 1,
                    width: 0.816,
                    x: 0.099,
                    y: 0
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    height: 1,
                    width: 0.334,
                    x: 0.351,
                    y: 0
                  },
                  selectedRatio: '1:2',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
              publicPath: '/_processed_/3/5/csm_demo_004_e5b6c397c5.jpg'
            },
            useCase: 'desktop',
            ratio: '16:9'
          },
          {
            publicUrl:
              'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
            properties: {
              title: null,
              alternative: null,
              description: null,
              mimeType: 'image/jpeg',
              type: 'image',
              filename: 'csm_demo_004_2ccf837aa5.jpg',
              originalUrl:
                'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_004.jpg',
              uidLocal: 4,
              fileReferenceUid: 2,
              size: '203 KB',
              link: null,
              dimensions: {
                width: 1017,
                height: 1016
              },
              cropDimensions: {
                width: 1017,
                height: 1016
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: -0.001,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    height: 0.6616766467065869,
                    width: 0.442,
                    x: 0.318,
                    y: 0
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    height: 1,
                    width: 0.816,
                    x: 0.099,
                    y: 0
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    height: 1,
                    width: 0.334,
                    x: 0.351,
                    y: 0
                  },
                  selectedRatio: '1:2',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
              publicPath: '/_processed_/3/5/csm_demo_004_2ccf837aa5.jpg'
            },
            useCase: 'crop',
            ratio: '1:1'
          },
          {
            publicUrl:
              'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
            properties: {
              title: null,
              alternative: null,
              description: null,
              mimeType: 'image/jpeg',
              type: 'image',
              filename: 'csm_demo_004_db789bd5e3.jpg',
              originalUrl:
                'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_004.jpg',
              uidLocal: 4,
              fileReferenceUid: 2,
              size: '406 KB',
              link: null,
              dimensions: {
                width: 1877,
                height: 1536
              },
              cropDimensions: {
                width: 1877,
                height: 1536
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: -0.001,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    height: 0.6616766467065869,
                    width: 0.442,
                    x: 0.318,
                    y: 0
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    height: 1,
                    width: 0.816,
                    x: 0.099,
                    y: 0
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    height: 1,
                    width: 0.334,
                    x: 0.351,
                    y: 0
                  },
                  selectedRatio: '1:2',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
              publicPath: '/_processed_/3/5/csm_demo_004_db789bd5e3.jpg'
            },
            useCase: 'wide',
            ratio: '11:9'
          },
          {
            publicUrl:
              'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
            properties: {
              title: null,
              alternative: null,
              description: null,
              mimeType: 'image/jpeg',
              type: 'image',
              filename: 'csm_demo_004_7d34494eb5.jpg',
              originalUrl:
                'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_004.jpg',
              uidLocal: 4,
              fileReferenceUid: 2,
              size: '185 KB',
              link: null,
              dimensions: {
                width: 768,
                height: 1536
              },
              cropDimensions: {
                width: 768,
                height: 1536
              },
              crop: {
                desktop: {
                  cropArea: {
                    height: 0.8413173652694611,
                    width: 1,
                    x: -0.001,
                    y: 0
                  },
                  selectedRatio: '16:9',
                  focusArea: null
                },
                crop: {
                  cropArea: {
                    height: 0.6616766467065869,
                    width: 0.442,
                    x: 0.318,
                    y: 0
                  },
                  selectedRatio: '1:1',
                  focusArea: null
                },
                wide: {
                  cropArea: {
                    height: 1,
                    width: 0.816,
                    x: 0.099,
                    y: 0
                  },
                  selectedRatio: '11:9',
                  focusArea: null
                },
                mobil: {
                  cropArea: {
                    height: 1,
                    width: 0.334,
                    x: 0.351,
                    y: 0
                  },
                  selectedRatio: '1:2',
                  focusArea: null
                }
              },
              autoplay: null,
              extension: 'jpg'
            },
            cdn: {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
              publicPath: '/_processed_/3/5/csm_demo_004_7d34494eb5.jpg'
            },
            useCase: 'mobil',
            ratio: '1:2'
          }
        ],
        actions: [
          {
            id: 4,
            pid: 7,
            type: 'a_01_01__action',
            content: {
              text: 'One',
              link: {
                type: 'page',
                url: '/api',
                target: '',
                title: '',
                class: ''
              },
              variant: 'outline',
              color: 'white',
              
              
            }
          }, 
          {
            id: 5,
            pid: 7,
            type: 'a_01_01__action',
            content: {
              text: 'Two',
              link: {
                type: 'page',
                url: '/api',
                target: '',
                title: '',
                class: ''
              },
              variant: 'outline',
              color: 'white',
            
              
            }
          }, 
          {
            id: 6,
            pid: 7,
            type: 'a_01_01__action',
            content: {
              text: 'Three',
              link: {
                type: 'page',
                url: '/api',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary',
            }
          },
        ]
      }
    }
  }
}
</script>
