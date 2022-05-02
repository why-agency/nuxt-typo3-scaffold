<template>
  <div>
    <section class="frame-default space-after-default">
      <OTextMedia v-bind="dataImage" />
    </section>
    <section class="frame-default space-after-default">
      <OTextMedia v-bind="dataUploadVideo" />
    </section>
    <section class="frame-default space-after-default">
      <OTextMedia v-bind="dataStreamVideo" />
    </section>
    <portal-target name="video-lightbox"></portal-target>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataImage: {
        appearance: {
          frameClass: 'default'
        },
        header: {
          text: 'Bauprojektmanagement',
          layout: 3
        },
        variant: 'image',
        position: 'media-left',
        animation: 'yes',
        background: 'none',
        bodytext: {
          text: 'Die DELTA Gruppe unterstützt bei der Durchführung von Planungs- und Bauprozessen aller Art und orientiert sich hierbei im besonderen Maße an individuellen Bedürfnissen der Kunden.',
          layout: 1
        },
        metaHeadline: 'Bauplanung',
        actions: [
          {
            id: 9,
            pid: 8,
            type: 'a_01_01__action',
            content: {
              text: 'Bauplanung',
              link: {
                type: 'page',
                url: '/api',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary',
              icon: {
                name: 'ArrowUpRight',
                position: ''
              }
            }
          }
        ],
        image: [
          [
            {
              publicUrl:
                'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/a/3/csm_demo_003_ba6c4963d7.jpg',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_demo_003_ba6c4963d7.jpg',
                originalUrl:
                  'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_003.jpg',
                uidLocal: 6,
                fileReferenceUid: 12,
                size: '290 KB',
                link: null,
                dimensions: {
                  width: 1024,
                  height: 1536
                },
                cropDimensions: {
                  width: 1024,
                  height: 1536
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.27748804867448934,
                      y: 0,
                      width: 0.4450239026510213,
                      height: 1
                    },
                    selectedRatio: '2:3',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/a/3/csm_demo_003_ba6c4963d7.jpg',
                publicPath: '/_processed_/a/3/csm_demo_003_ba6c4963d7.jpg'
              },
              useCase: 'default',
              ratio: '2:3'
            }
          ]
        ]
      },
      dataUploadVideo: {
        appearance: {
          frameClass: 'default'
        },
        header: {
          text: 'Wenn wir planen, planen wir nachhaltig und vorausdenkend.',
          layout: 3
        },
        variant: 'video-upload',
        position: 'media-right',
        animation: 'none',
        background: 'primary',
        bodytext: {
          text: 'Um ein Bauprojekt erfolgreich umzusetzen, bedarf es einer fundierten Planung und Vorgehensweise durch erfahrene Architekten und Bauingenieure.&nbsp;Sie koordinieren alle am Bau beteiligten Fachplaner.',
          layout: 1
        },
        metaHeadline: '',
        actions: [
          {
            id: 14,
            pid: 8,
            type: 'a_01_01__action',
            content: {
              text: 'Testpage_001',
              link: {
                type: 'page',
                url: '/client-testing/testpage-001',
                target: '',
                title: '',
                class: ''
              },
              variant: 'outline',
              color: 'secondary'
            }
          }
        ],
        previewImage: [
          [
            {
              publicUrl:
                'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/2/e/csm_demo_002_b2e50a30ab.jpg',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_demo_002_b2e50a30ab.jpg',
                originalUrl:
                  'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_002.jpg',
                uidLocal: 5,
                fileReferenceUid: 18,
                size: '335 KB',
                link: null,
                dimensions: {
                  width: 1024,
                  height: 1536
                },
                cropDimensions: {
                  width: 1024,
                  height: 1536
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.27748804867448934,
                      y: 0,
                      width: 0.4450239026510213,
                      height: 1
                    },
                    selectedRatio: '2:3',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/2/e/csm_demo_002_b2e50a30ab.jpg',
                publicPath: '/_processed_/2/e/csm_demo_002_b2e50a30ab.jpg'
              },
              useCase: 'default',
              ratio: '2:3'
            }
          ]
        ],
        media: [
          {
            publicUrl:
              'https://development.corporate.cms.del.exu.dev/fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_001.mp4',
            properties: {
              uidLocal: 17,
              type: 'video',
              ext: 'mp4',
              identifier: '/user_upload/delta-gruppe.de/zzz_demo/demo_001.mp4',
              url: 'fileadmin/user_upload/delta-gruppe.de/zzz_demo/demo_001.mp4',
              title: null,
              description: null
            },
            cdn: {
              publicUrl:
                'https://ik.imagekit.io/1kdwfdtgvnh/dev/user_upload/delta-gruppe.de/zzz_demo/demo_001.mp4',
              publicPath: '/user_upload/delta-gruppe.de/zzz_demo/demo_001.mp4'
            }
          }
        ]
      },
      dataStreamVideo: {
        appearance: {
          frameClass: 'default'
        },
        header: {
          text: 'stream video headline',
          layout: 1
        },
        variant: 'video-stream',
        position: 'media-right',
        animation: 'no',
        background: 'primary',
        bodytext: {
          text: 'This is a text for testing the module',
          layout: 1
        },
        metaHeadline: '',
        actions: [],
        previewImage: [
          [
            {
              publicUrl:
                'https://development.corporate.cms.del.exu.dev/fileadmin/_processed_/6/5/csm_DRX_Gebaeude_6_e9d2ef5906.jpg',
              properties: {
                title: null,
                alternative: null,
                description: null,
                mimeType: 'image/jpeg',
                type: 'image',
                filename: 'csm_DRX_Gebaeude_6_e9d2ef5906.jpg',
                originalUrl: 'fileadmin/user_upload/DRX_Gebaeude_6.jpg',
                uidLocal: 12,
                fileReferenceUid: 214,
                size: '165 KB',
                link: null,
                dimensions: {
                  width: 562,
                  height: 844
                },
                cropDimensions: {
                  width: 562,
                  height: 844
                },
                crop: {
                  desktop: {
                    cropArea: {
                      x: 0.31244444444444447,
                      y: 0,
                      width: 0.37511111111111106,
                      height: 1
                    },
                    selectedRatio: '2:3',
                    focusArea: null
                  }
                },
                autoplay: null,
                extension: 'jpg'
              },
              cdn: {
                publicUrl:
                  'https://ik.imagekit.io/1kdwfdtgvnh/dev/_processed_/6/5/csm_DRX_Gebaeude_6_e9d2ef5906.jpg',
                publicPath: '/_processed_/6/5/csm_DRX_Gebaeude_6_e9d2ef5906.jpg'
              },
              useCase: 'default',
              ratio: '2:3'
            }
          ]
        ],
        videoStream: [
          {
            id: 3,
            pid: 8,
            type: 'video_stream',
            content: {
              servide: 'youtube',
              title: 'This is the video title',
              start: null,
              end: null,
              id: 'https://www.youtube.com/watch?v=sY1S34973zA'
            }
          }
        ]
      }
    }
  }
}
</script>
