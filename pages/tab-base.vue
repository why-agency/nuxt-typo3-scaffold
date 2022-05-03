<template>
  <div>
    <CeFrame>
      <OTabBase v-bind="data1" />
    </CeFrame>
    <CeFrame>
      <OTabBase v-bind="data2" />
    </CeFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        variant: 'images',
        header: {
          text: 'Tab module: text and image',
          layout: 2,
          position: 'left'
        },
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
          },
          {
            id: 191,
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
              variant: 'outline',
              color: 'primary'
            }
          }
        ],
        tabs: [
          {
            id: 52,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: 'This is the second headline',
                layout: 6,
                position: 'left'
              },
              bodytext:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.',
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
                    filename: '01__why_agency_op_cultColl_01_02_ergebnis.webp',
                    originalUrl:
                      'fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    publicPath:
                      '/fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp'
                  },
                  useCase: 'default',
                  ratio: '5:3'
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
                    filename: '01__why_agency_op_cultColl_01_02_ergebnis.webp',
                    originalUrl:
                      'fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp',
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    publicPath:
                      'fileadmin/user_upload/01__why_agency_op_cultColl_01_02_ergebnis.webp'
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
              title: 'Lorem ipsum dolor sit amet',
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
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename:
                      '01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    originalUrl:
                      'fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    publicPath:
                      '/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg'
                  },
                  useCase: 'default',
                  ratio: '5:3'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename:
                      '01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    originalUrl:
                      'fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    publicPath:
                      '/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg'
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
              title: 'Ornare arcu',
              decor: 'circle'
            }
          },
          {
            id: 54,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: '',
                layout: 6,
                position: 'left'
              },
              bodytext:
                '<strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.',
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
                    filename:
                      'and_why_agency_case_study_humana_vr_ergebnis.webp',
                    originalUrl:
                      'fileadmin/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp',
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    publicPath:
                      '/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp'
                  },
                  useCase: 'default',
                  ratio: '5:3'
                },
                {
                  publicUrl:
                    'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image/jpeg',
                    type: 'image',
                    filename:
                      'and_why_agency_case_study_humana_vr_ergebnis.webp',
                    originalUrl:
                      'fileadmin/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp',
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
                      'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_partFrnd_hofmannVratny_img.jpg',
                    publicPath:
                      '/user_upload/and_why_agency_case_study_humana_vr_ergebnis.webp'
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
              title: 'Dies ist ein dritter tab',
              decor: 'none'
            }
          }
        ]
      },
      data2: {
        variant: 'text',
        header: {
          text: 'Tab module: text',
          layout: 2,
          position: 'left'
        },
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
          },
          {
            id: 191,
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
              variant: 'outline',
              color: 'primary'
            }
          }
        ],
        tabs: [
          {
            id: 52,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: 'This is the second headline',
                layout: 6,
                position: 'left'
              },
              bodytext:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.',
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
              title: 'Adipiscing at in tellus',
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
              title: 'Lorem ipsum',
              decor: 'circle'
            }
          },
          {
            id: 54,
            pid: 18,
            type: 'text-tab-images',
            content: {
              header: {
                text: '',
                layout: 6,
                position: 'left'
              },
              bodytext:
                '<strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.',
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
              title: 'Dolor sit amet',
              decor: 'none'
            }
          }
        ]
      }
    }
  }
}
</script>
