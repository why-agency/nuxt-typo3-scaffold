<template>
  <div>
    <CeFrame>
      <OSliderImageText v-bind="data1" />
    </CeFrame>
    <CeFrame>
      <OSliderImageText v-bind="data2" />
    </CeFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        appearance: {
          frameClass: 'default'
        },
        variant: 'text-deco',
        slides: [
          {
            id: 43,
            pid: 19,
            type: 'slide-text-deco',
            content: {
              overline: '',
              header: {
                text: 'Slider Image text-deco',
                layout: 2,
                position: 'left'
              },
              subline:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Amet justo donec enim diam vulputate ut pharetra. Sed id semper risus in hendrerit gravida rutrum. Massa massa ultricies mi quis quis!!!',
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
                    filename: 'csm_Efaflex_400e2be4a8.jpg',
                    uidLocal: 13,
                    fileReferenceUid: 60,
                    size: '278 KB',
                    link: null,
                    dimensions: {
                      width: 1920,
                      height: 960
                    },
                    cropDimensions: {
                      width: 1920,
                      height: 960
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.341796875,
                          y: 0,
                          width: 0.31640625,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath: '/_processed_/1/1/csm_Efaflex_400e2be4a8.jpg'
                  },
                  useCase: 'default',
                  ratio: '2:1'
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
                    filename: 'csm_Efaflex_e74811ef22.jpg',
                    uidLocal: 13,
                    fileReferenceUid: 60,
                    size: '252 KB',
                    link: null,
                    dimensions: {
                      width: 1200,
                      height: 675
                    },
                    cropDimensions: {
                      width: 1200,
                      height: 675
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.05555555555555555,
                          width: 1,
                          height: 0.8888888888888888
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.125,
                          y: 0,
                          width: 0.75,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.341796875,
                          y: 0,
                          width: 0.31640625,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath: '/_processed_/1/1/csm_Efaflex_e74811ef22.jpg'
                  },
                  useCase: 'decoration',
                  ratio: '4:3'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_Efaflex_f378fe67ad.jpg',
                    uidLocal: 13,
                    fileReferenceUid: 60,
                    size: '113 KB',
                    link: null,
                    dimensions: {
                      width: 379,
                      height: 675
                    },
                    cropDimensions: {
                      width: 379,
                      height: 675
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.05555555555555555,
                          width: 1,
                          height: 0.8888888888888888
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.125,
                          y: 0,
                          width: 0.75,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.341796875,
                          y: 0,
                          width: 0.31640625,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath: '/_processed_/1/1/csm_Efaflex_f378fe67ad.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '9:16'
                }
              ],
              gradient: 'dark',
              actions: [
                {
                  id: 54,
                  pid: 19,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Lieferantenportal',
                    link: {
                      type: 'page',
                      url: '/lieferantenportal',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'filled',
                    color: 'primary'
                  }
                }
              ],
              decor: 'arrow'
            }
          },
          {
            id: 44,
            pid: 19,
            type: 'slide-text-deco',
            content: {
              overline: '',
              header: {
                text: 'Headline',
                layout: 2,
                position: 'left'
              },
              subline:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Amet justo donec enim diam vulputate ut pharetra. Sed id semper risus in hendrerit gravida rutrum. Massa massa ultricies mi quis quis!!!',
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_02cfd5fad6.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 61,
                    size: '538 KB',
                    link: null,
                    dimensions: {
                      width: 1920,
                      height: 960
                    },
                    cropDimensions: {
                      width: 1920,
                      height: 960
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.3125,
                          y: 0,
                          width: 0.375,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_02cfd5fad6.jpg'
                  },
                  useCase: 'default',
                  ratio: '2:1'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_0910b292bc.jpg',
                    originalUrl:
                      'fileadmin/user_upload/20190201-023_WEB-Qualitaet.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 61,
                    size: '682 KB',
                    link: null,
                    dimensions: {
                      width: 1706,
                      height: 1280
                    },
                    cropDimensions: {
                      width: 1706,
                      height: 1280
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.3125,
                          y: 0,
                          width: 0.375,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_0910b292bc.jpg'
                  },
                  useCase: 'decoration',
                  ratio: '4:3'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_c5f6df626c.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 61,
                    size: '284 KB',
                    link: null,
                    dimensions: {
                      width: 720,
                      height: 1280
                    },
                    cropDimensions: {
                      width: 720,
                      height: 1280
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.3125,
                          y: 0,
                          width: 0.375,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_02_02_ergebnis.webp',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_c5f6df626c.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '9:16'
                }
              ],
              gradient: 'dark',
              actions: [
                {
                  id: 156,
                  pid: 19,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Button',
                    link: {
                      type: 'page',
                      url: '/unternehmen/standorte/muenchen',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'filled',
                    color: 'primary'
                  }
                }
              ],
              decor: 'arrow'
            }
          }
        ]
      },
      data2: {
        appearance: {
          frameClass: 'full'
        },
        variant: 'ext-overlay',
        slides: [
          {
            id: 43,
            pid: 19,
            type: 'slide-text-overlay',
            content: {
              overline: '',
              header: {
                text: 'Slider Image with text overlay',
                layout: 2,
                position: 'left'
              },
              subline:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Amet justo donec enim diam vulputate ut pharetra. Sed id semper risus in hendrerit gravida rutrum. Massa massa ultricies mi quis quis!!!',
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_Efaflex_400e2be4a8.jpg',
                    uidLocal: 13,
                    fileReferenceUid: 60,
                    size: '278 KB',
                    link: null,
                    dimensions: {
                      width: 1920,
                      height: 960
                    },
                    cropDimensions: {
                      width: 1920,
                      height: 960
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.341796875,
                          y: 0,
                          width: 0.31640625,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath: '/_processed_/1/1/csm_Efaflex_400e2be4a8.jpg'
                  },
                  useCase: 'default',
                  ratio: '2:1'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_Efaflex_e74811ef22.jpg',
                    uidLocal: 13,
                    fileReferenceUid: 60,
                    size: '252 KB',
                    link: null,
                    dimensions: {
                      width: 1200,
                      height: 675
                    },
                    cropDimensions: {
                      width: 1200,
                      height: 675
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.05555555555555555,
                          width: 1,
                          height: 0.8888888888888888
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.125,
                          y: 0,
                          width: 0.75,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.341796875,
                          y: 0,
                          width: 0.31640625,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath: '/_processed_/1/1/csm_Efaflex_e74811ef22.jpg'
                  },
                  useCase: 'decoration',
                  ratio: '4:3'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_Efaflex_f378fe67ad.jpg',
                    uidLocal: 13,
                    fileReferenceUid: 60,
                    size: '113 KB',
                    link: null,
                    dimensions: {
                      width: 379,
                      height: 675
                    },
                    cropDimensions: {
                      width: 379,
                      height: 675
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.05555555555555555,
                          width: 1,
                          height: 0.8888888888888888
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.125,
                          y: 0,
                          width: 0.75,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.341796875,
                          y: 0,
                          width: 0.31640625,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
                    publicPath: '/_processed_/1/1/csm_Efaflex_f378fe67ad.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '9:16'
                }
              ],
              gradient: 'dark',
              actions: [
                {
                  id: 54,
                  pid: 19,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Lieferantenportal',
                    link: {
                      type: 'page',
                      url: '/lieferantenportal',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'outline',
                    color: 'white'
                  }
                }
              ],
              decor: 'arrow'
            }
          },
          {
            id: 44,
            pid: 19,
            type: 'slide-text-deco',
            content: {
              overline: '',
              header: {
                text: 'Headline',
                layout: 2,
                position: 'left'
              },
              subline: 'Subline',
              image: [
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_02cfd5fad6.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 61,
                    size: '538 KB',
                    link: null,
                    dimensions: {
                      width: 1920,
                      height: 960
                    },
                    cropDimensions: {
                      width: 1920,
                      height: 960
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.3125,
                          y: 0,
                          width: 0.375,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_02cfd5fad6.jpg'
                  },
                  useCase: 'default',
                  ratio: '2:1'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_0910b292bc.jpg',
                    originalUrl:
                      'fileadmin/user_upload/20190201-023_WEB-Qualitaet.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 61,
                    size: '682 KB',
                    link: null,
                    dimensions: {
                      width: 1706,
                      height: 1280
                    },
                    cropDimensions: {
                      width: 1706,
                      height: 1280
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.3125,
                          y: 0,
                          width: 0.375,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_0910b292bc.jpg'
                  },
                  useCase: 'decoration',
                  ratio: '4:3'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_c5f6df626c.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 61,
                    size: '284 KB',
                    link: null,
                    dimensions: {
                      width: 720,
                      height: 1280
                    },
                    cropDimensions: {
                      width: 720,
                      height: 1280
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.125,
                          width: 1,
                          height: 0.75
                        },
                        selectedRatio: '2:1',
                        focusArea: null
                      },
                      decoration: {
                        cropArea: {
                          x: 0.055555555555555594,
                          y: 0,
                          width: 0.8888888888888888,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.3125,
                          y: 0,
                          width: 0.375,
                          height: 1
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_auteon_img.png',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_c5f6df626c.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '9:16'
                }
              ],
              gradient: 'dark',
              actions: [
                {
                  id: 156,
                  pid: 19,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Button',
                    link: {
                      type: 'page',
                      url: '/unternehmen/standorte/muenchen',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'outline',
                    color: 'white'
                  }
                }
              ],
              decor: 'arrow'
            }
          }
        ]
      }
    }
  }
}
</script>
