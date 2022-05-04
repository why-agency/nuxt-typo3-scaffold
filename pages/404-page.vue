<template>
  <div>
    <section class="frame-default space-after-default">
      <div class="frame-default">
        <O404Page v-bind="data1" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        appearance: {
          layout: 'default',
          frameClass: 'default',
          spaceBefore: '',
          spaceAfter: ''
        },
        overline: {
          text: 'Das hätte nicht passieren dürfen.',
          layout: 1,
          position: 'left'
        },

        header: {
          text: 'Seite nicht gefunden.',
          layout: 1,
          position: 'left'
        },
        bodytext: {
          text: 'Leider konnten wir die gewünschte Seite nicht finden.',
          layout: 1,
          position: 'left'
        },
        image: [
          [
            {
              publicUrl:
                'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_demo_001_71432149ec.jpg',
                uidLocal: 7,
                fileReferenceUid: 26,
                size: '1 MB',
                link: null,
                dimensions: {
                  width: 3200,
                  height: 4000
                },
                cropDimensions: {
                  width: 3200,
                  height: 4000
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.23333333333333334,
                      y: 0,
                      width: 0.5333333333333333,
                      height: 1
                    },
                    selectedRatio: '4:5',
                    focusArea: null
                  },
                  tablet: {
                    cropArea: {
                      x: 0,
                      y: 0.078125,
                      width: 1,
                      height: 0.84375
                    },
                    selectedRatio: '16:9',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.05555555555555558,
                      y: 0,
                      width: 0.8888888888888888,
                      height: 1
                    },
                    selectedRatio: '4:3',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
                publicPath: '/_processed_/8/6/csm_demo_001_71432149ec.jpg'
              },
              useCase: 'desktop',
              ratio: '4:5'
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
                filename: 'csm_demo_001_d0f4d823e3.jpg',
                uidLocal: 7,
                fileReferenceUid: 26,
                size: '2 MB',
                link: null,
                dimensions: {
                  width: 6000,
                  height: 3375
                },
                cropDimensions: {
                  width: 6000,
                  height: 3375
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.23333333333333334,
                      y: 0,
                      width: 0.5333333333333333,
                      height: 1
                    },
                    selectedRatio: '4:5',
                    focusArea: null
                  },
                  tablet: {
                    cropArea: {
                      x: 0,
                      y: 0.078125,
                      width: 1,
                      height: 0.84375
                    },
                    selectedRatio: '16:9',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.05555555555555558,
                      y: 0,
                      width: 0.8888888888888888,
                      height: 1
                    },
                    selectedRatio: '4:3',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
                publicPath: '/_processed_/8/6/csm_demo_001_d0f4d823e3.jpg'
              },
              useCase: 'tablet',
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
                filename: 'csm_demo_001_a9695a5558.jpg',
                uidLocal: 7,
                fileReferenceUid: 26,
                size: '3 MB',
                link: null,
                dimensions: {
                  width: 5333,
                  height: 4000
                },
                cropDimensions: {
                  width: 5333,
                  height: 4000
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.23333333333333334,
                      y: 0,
                      width: 0.5333333333333333,
                      height: 1
                    },
                    selectedRatio: '4:5',
                    focusArea: null
                  },
                  tablet: {
                    cropArea: {
                      x: 0,
                      y: 0.078125,
                      width: 1,
                      height: 0.84375
                    },
                    selectedRatio: '16:9',
                    focusArea: null
                  },
                  mobil: {
                    cropArea: {
                      x: 0.05555555555555558,
                      y: 0,
                      width: 0.8888888888888888,
                      height: 1
                    },
                    selectedRatio: '4:3',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://development.system.cms.typo3.why.exu.dev/fileadmin/user_upload/01__why_agency_op_cultColl_04_03_ergebnis.webp',
                publicPath: '/_processed_/8/6/csm_demo_001_a9695a5558.jpg'
              },
              useCase: 'mobile',
              ratio: '4:3'
            }
          ]
        ],
        actions: [
          {
            id: 20,
            pid: 20,
            type: 'a_01_01__action',
            content: {
              text: 'Zur Startseite',
              link: 'Zur Startseite',
              variant: 'filled',
              color: 'primary'
            }
          },
          {
            id: 21,
            pid: 20,
            type: 'a_01_01__action',
            content: {
              text: 'Kontaktieren Sie uns',
              link: {
                type: 'file',
                url: '',
                target: ''
              },
              variant: 'outline',
              color: 'primary'
            }
          }
        ]
      }
    }
  }
}
</script>
