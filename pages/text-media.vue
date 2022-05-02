<template>
  <div>
    <CeFrame v-bind="dataImage.appearance">
      <OTextMedia v-bind="dataImage" />
    </CeFrame>
    <CeFrame>
      <OTextMedia v-bind="dataUploadVideo" />
    </CeFrame>
    <CeFrame>
      <OTextMedia v-bind="dataStreamVideo" />
    </CeFrame>
    <portal-target name="video-lightbox"></portal-target>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataImage: {
        appearance: {
          frameClass: 'default',
          background: 'bg-primary'
        },
        header: {
          text: 'Bauprojektmanagement',
          layout: 3
        },
        variant: 'image',
        position: 'media-right',
        animation: 'no',
        bodytext: {
          text: 'Risus quis varius quam quisque id diam vel quam elementum. Urna condimentum mattis pellentesque id. Elementum nisi quis eleifend quam adipiscing. Scelerisque purus semper eget duis at. Velit dignissim sodales ut eu. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Tincidunt vitae semper quis lectus nulla at volutpat diam. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Gravida rutrum quisque non tellus orci. Turpis massa tincidunt dui ut ornare lectus sit amet. Natoque penatibus et magnis dis parturient montes. Suspendisse sed nisi lacus sed viverra tellus. Augue eget arcu dictum varius duis at. Est lorem ipsum dolor sit amet consectetur adipiscing. Cras semper auctor neque vitae tempus quam pellentesque nec. Nulla aliquet enim tortor at auctor urna nunc id. Maecenas pharetra convallis posuere morbi. Nunc id cursus metus aliquam. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Suspendisse potenti nullam ac tortor.',
          layout: 1
        },
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
              variant: 'outline',
              color: 'white',
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
        header: {
          text: 'Wenn wir planen, planen wir nachhaltig und vorausdenkend.',
          layout: 2
        },
        variant: 'video-upload',
        position: 'media-right',
        animation: 'yes',
        bodytext: {
          text: 'Risus quis varius quam quisque id diam vel quam elementum. Elementum nisi quis eleifend quam adipiscing. Scelerisque purus semper eget duis at. Velit dignissim sodales ut eu. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Tincidunt vitae semper quis lectus nulla at volutpat diam. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Gravida rutrum quisque non tellus orci. Turpis massa tincidunt dui ut ornare lectus sit amet. Natoque penatibus et magnis dis parturient montes. Suspendisse sed nisi lacus sed viverra tellus. Augue eget arcu dictum varius duis at. Est lorem ipsum dolor sit amet consectetur adipiscing. Cras semper auctor neque vitae tempus quam pellentesque nec. Nulla aliquet enim tortor at auctor urna nunc id. Maecenas pharetra convallis posuere morbi. Nunc id cursus metus aliquam. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Suspendisse potenti nullam ac tortor.',
          layout: 2
        },
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
        header: {
          text: 'stream video headline',
          layout: 1
        },
        variant: 'video-stream',
        position: 'media-right',
        animation: 'yes',
        bodytext: {
          text: 'This is a text for testing the module',
          layout: 1
        },
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
              id: 'Wvv0dqZ_xa4'
            }
          }
        ]
      }
    }
  }
}
</script>
