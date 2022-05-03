<template>
  <div>
    <section>
      <OTabBase v-bind="data1" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        variant: 'images',
        header: {
          text: '',
          layout: 2,
          position: 'left'
        },
        actions: null,
        tabs: [
          {
            id: 52,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: '',
                layout: 6,
                position: 'left'
              },
              bodytext:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.',
              image: [
                {
                  publicUrl:
                    'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/e/1/csm_418_558_RSK_2886_69d5a34105.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_418_558_RSK_2886_69d5a34105.jpg',
                    originalUrl: 'fileadmin/user_upload/418_558_RSK_2886.jpg',
                    uidLocal: 27,
                    fileReferenceUid: 78,
                    size: '52 KB',
                    link: null,
                    dimensions: {
                      width: 418,
                      height: 557
                    },
                    cropDimensions: {
                      width: 418,
                      height: 557
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.0005973715651134666,
                          width: 1,
                          height: 0.9988052568697731
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0,
                          y: 0.27526881720430113,
                          width: 1,
                          height: 0.4494623655913978
                        },
                        selectedRatio: '5:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/e/1/csm_418_558_RSK_2886_69d5a34105.jpg',
                    publicPath:
                      '/_processed_/e/1/csm_418_558_RSK_2886_69d5a34105.jpg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                },
                {
                  publicUrl:
                    'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/e/1/csm_418_558_RSK_2886_b4cdf94e26.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_418_558_RSK_2886_b4cdf94e26.jpg',
                    originalUrl: 'fileadmin/user_upload/418_558_RSK_2886.jpg',
                    uidLocal: 27,
                    fileReferenceUid: 78,
                    size: '36 KB',
                    link: null,
                    dimensions: {
                      width: 418,
                      height: 250
                    },
                    cropDimensions: {
                      width: 418,
                      height: 250
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0,
                          y: 0.0005973715651134666,
                          width: 1,
                          height: 0.9988052568697731
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0,
                          y: 0.27526881720430113,
                          width: 1,
                          height: 0.4494623655913978
                        },
                        selectedRatio: '5:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/e/1/csm_418_558_RSK_2886_b4cdf94e26.jpg',
                    publicPath:
                      '/_processed_/e/1/csm_418_558_RSK_2886_b4cdf94e26.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '5:3'
                }
              ],
              actions: [
                {
                  id: 78,
                  pid: 18,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Downloads &amp; Links',
                    link: {
                      type: 'page',
                      url: '/downloads-links',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'text',
                    color: 'primary',
                    icon: {
                      name: 'ArrowUpRight',
                      position: 'trailing'
                    }
                  }
                },
                {
                  id: 79,
                  pid: 18,
                  type: 'a_01_01__action',
                  content: {
                    text: 'API/Testing',
                    link: {
                      type: 'page',
                      url: '/api',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'text',
                    color: 'secondary'
                  }
                }
              ],
              title: 'Altersvorsorge und Vergünstigungen',
              decor: 'none'
            }
          },
          {
            id: 53,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: 'Planen',
                layout: 5,
                position: 'left'
              },
              bodytext:
                '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p><em>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</em></p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.</p>',
              image: [
                {
                  publicUrl:
                    'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_1264a8df4f.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_1264a8df4f.jpg',
                    originalUrl:
                      'fileadmin/user_upload/20190201-023_WEB-Qualitaet.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 79,
                    size: '388 KB',
                    link: null,
                    dimensions: {
                      width: 960,
                      height: 1280
                    },
                    cropDimensions: {
                      width: 960,
                      height: 1280
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.25,
                          y: 0,
                          width: 0.5,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0,
                          y: 0.05,
                          width: 1,
                          height: 0.9
                        },
                        selectedRatio: '5:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_1264a8df4f.jpg',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_1264a8df4f.jpg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                },
                {
                  publicUrl:
                    'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_74aa6285f3.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_20190201-023_WEB-Qualitaet_74aa6285f3.jpg',
                    originalUrl:
                      'fileadmin/user_upload/20190201-023_WEB-Qualitaet.jpg',
                    uidLocal: 10,
                    fileReferenceUid: 79,
                    size: '638 KB',
                    link: null,
                    dimensions: {
                      width: 1920,
                      height: 1152
                    },
                    cropDimensions: {
                      width: 1920,
                      height: 1152
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.25,
                          y: 0,
                          width: 0.5,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0,
                          y: 0.05,
                          width: 1,
                          height: 0.9
                        },
                        selectedRatio: '5:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_74aa6285f3.jpg',
                    publicPath:
                      '/_processed_/6/2/csm_20190201-023_WEB-Qualitaet_74aa6285f3.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '5:3'
                }
              ],
              actions: [
                {
                  id: 80,
                  pid: 18,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Unternehmen',
                    link: {
                      type: 'page',
                      url: '/unternehmen',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'text',
                    color: 'primary'
                  }
                }
              ],
              title: 'Planenplanenplanen&shy;planenplanenplane',
              decor: 'circle'
            }
          },
          {
            id: 54,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: 'Realisieren',
                layout: 5,
                position: 'left'
              },
              bodytext:
                '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p><strong>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.</strong></p>',
              image: [
                {
                  publicUrl:
                    'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/2/2/csm_Feuerwache_Nord_1_9b8e422c95.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_Feuerwache_Nord_1_9b8e422c95.jpg',
                    originalUrl: 'fileadmin/user_upload/Feuerwache_Nord_1.jpg',
                    uidLocal: 14,
                    fileReferenceUid: 80,
                    size: '143 KB',
                    link: null,
                    dimensions: {
                      width: 506,
                      height: 675
                    },
                    cropDimensions: {
                      width: 506,
                      height: 675
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.2890625,
                          y: 0,
                          width: 0.421875,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.03125,
                          y: 0,
                          width: 0.9375,
                          height: 1
                        },
                        selectedRatio: '5:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/2/2/csm_Feuerwache_Nord_1_9b8e422c95.jpg',
                    publicPath:
                      '/_processed_/2/2/csm_Feuerwache_Nord_1_9b8e422c95.jpg'
                  },
                  useCase: 'default',
                  ratio: '3:4'
                },
                {
                  publicUrl:
                    'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/2/2/csm_Feuerwache_Nord_1_678fa74ca3.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename: 'csm_Feuerwache_Nord_1_678fa74ca3.jpg',
                    originalUrl: 'fileadmin/user_upload/Feuerwache_Nord_1.jpg',
                    uidLocal: 14,
                    fileReferenceUid: 80,
                    size: '310 KB',
                    link: null,
                    dimensions: {
                      width: 1125,
                      height: 675
                    },
                    cropDimensions: {
                      width: 1125,
                      height: 675
                    },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.2890625,
                          y: 0,
                          width: 0.421875,
                          height: 1
                        },
                        selectedRatio: '3:4',
                        focusArea: null
                      },
                      mobil: {
                        cropArea: {
                          x: 0.03125,
                          y: 0,
                          width: 0.9375,
                          height: 1
                        },
                        selectedRatio: '5:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/2/2/csm_Feuerwache_Nord_1_678fa74ca3.jpg',
                    publicPath:
                      '/_processed_/2/2/csm_Feuerwache_Nord_1_678fa74ca3.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '5:3'
                }
              ],
              actions: [
                {
                  id: 81,
                  pid: 18,
                  type: 'a_01_01__action',
                  content: {
                    text: 'Karriere',
                    link: {
                      type: 'page',
                      url: '/karriere',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'text',
                    color: 'primary'
                  }
                }
              ],
              title: 'Realisieren',
              decor: 'none'
            }
          }
        ]
      }
    }
  }
}
</script>
