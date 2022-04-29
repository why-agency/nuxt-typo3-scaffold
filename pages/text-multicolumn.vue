<template>
  <div>
    <section class="frame-default space-after-default">
      <OTextMulticolumn v-bind="data1" />
    </section>
    <section class="frame-default space-after-default">
      <OTextMulticolumn v-bind="data2" />
    </section>
    <section class="frame-default space-after-default">
      <OTextMulticolumn v-bind="data3" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {
        variant: '1col',
        background: 'primary',
        column1: {
          position: 'left',
          overline: {
            text: '',
            size: 2,
            position: 'left'
          },
          header: {
            text: "I'm gonna make him an offer he can't refuse",
            size: 1,
            position: 'left'
          },
          subline: {
            text: '',
            size: 1,
            position: 'left'
          },
          bodytext: {
            text: '',
            size: 1
          },
          actions: [
            {
              id: 4,
              pid: 7,
              type: 'a_01_01__action',
              content: {
                text: 'Alright I accept then',
                link: {
                  type: 'url',
                  url: 'https://www.youtube.com/watch?v=sY1S34973zA&ab_channel=Fan-MadeFilmTrailers',
                  target: '',
                  title: '',
                  class: ''
                },
                variant: 'outline',
                color: 'secondary',
                size: 'default',
                icon: {
                  name: 'ArrowRight',
                  position: 'trailing'
                }
              }
            },
            {
              id: 5,
              pid: 7,
              type: 'a_01_01__action',
              content: {
                text: 'No I still refuse!',
                link: {
                  type: 'url',
                  url: 'https://www.youtube.com/watch?v=sY1S34973zA&ab_channel=Fan-MadeFilmTrailers',
                  target: '',
                  title: '',
                  class: ''
                },
                variant: 'outline',
                color: 'secondary',
                size: 'default',
                icon: {
                  name: 'ArrowRight',
                  position: 'trailing'
                }
              }
            },
            {
              id: 6,
              pid: 7,
              type: 'a_01_01__action',
              content: {
                text: "Ah man, I can't decide...",
                link: {
                  type: 'url',
                  url: 'https://www.youtube.com/watch?v=sY1S34973zA&ab_channel=Fan-MadeFilmTrailers',
                  target: '',
                  title: '',
                  class: ''
                },
                variant: 'text',
                color: 'secondary',
                size: 'default',
                icon: {
                  name: 'ArrowRight',
                  position: 'trailing'
                }
              }
            }
          ]
        }
      },
      data2: {
        variant: '3col',
        background: 'none',
        column1: {
          position: 'left',
          overline: {
            text: '',
            size: 2,
            position: 'left'
          },
          header: {
            text: 'One Ring to rule them all, One Ring to find them,',
            size: 4,
            position: 'left'
          },
          subline: {
            text: '',
            size: 3,
            position: 'left'
          },
          bodytext: {
            text: '<p>Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die,&nbsp;One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie.<br> One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie.</p>',
            size: 1
          },
          actions: [
            {
              id: 7,
              pid: 7,
              type: 'a_01_01__action',
              content: {
                text: 'Explore Hobbiton',
                link: {
                  type: 'page',
                  url: '/api/o-03-01-text-multicolumn',
                  target: '',
                  title: '',
                  class: ''
                },
                variant: 'outline',
                color: 'primary',
                size: 'large',
                icon: {
                  name: 'ArrowUpRight',
                  position: 'trailing'
                }
              }
            }
          ]
        },
        column2: {
          position: 'left',
          overline: {
            text: '',
            size: 2,
            position: 'left'
          },
          header: {
            text: 'One Ring to bring them all, and in the darkness bind them,',
            size: 4,
            position: 'left'
          },
          subline: {
            text: '',
            size: 3,
            position: 'left'
          },
          bodytext: {
            text: '<p>Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die,&nbsp;One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie.<br> One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie.</p>',
            size: 1
          },
          actions: [
            {
              id: 8,
              pid: 7,
              type: 'a_01_01__action',
              content: {
                text: 'Fight at Minas Tirith',
                link: {
                  type: 'page',
                  url: '/api/o-03-01-text-multicolumn',
                  target: '',
                  title: '',
                  class: ''
                },
                variant: 'outline',
                color: 'primary',
                size: 'large',
                icon: {
                  name: 'ArrowUpRight',
                  position: 'trailing'
                }
              }
            }
          ]
        },
        column3: {
          position: 'left',
          overline: {
            text: '',
            size: 2,
            position: 'left'
          },
          header: {
            text: 'In the Land of Mordor where the Shadows lie.',
            size: 4,
            position: 'left'
          },
          subline: {
            text: '',
            size: 3,
            position: 'left'
          },
          bodytext: {
            text: '<p>Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die,&nbsp;One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie.<br> One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them, In the Land of Mordor where the Shadows lie.</p>',
            size: 1
          },
          actions: [
            {
              id: 10,
              pid: 7,
              type: 'a_01_01__action',
              content: {
                text: 'Visit Mordor',
                link: {
                  type: 'page',
                  url: '/api/o-03-01-text-multicolumn',
                  target: '',
                  title: '',
                  class: ''
                },
                variant: 'outline',
                color: 'primary',
                size: 'large',
                icon: {
                  name: 'ArrowUpRight',
                  position: 'trailing'
                }
              }
            }
          ]
        }
      },
      data3: {
        variant: '2col',
        background: 'none',
        column1: {
          position: 'left',
          overline: {
            text: 'Wizardry',
            size: 3,
            position: 'left'
          },
          header: {
            text: 'Wingardium Leviosa',
            size: 3,
            position: 'left'
          },
          subline: {
            text: 'Making things fly',
            size: 1,
            position: 'left'
          },
          bodytext: {
            text: '',
            size: 1
          },
          actions: []
        },
        column2: {
          position: 'left',
          overline: {
            text: '',
            size: 3,
            position: 'left'
          },
          header: {
            text: '',
            size: 3,
            position: 'left'
          },
          subline: {
            text: '',
            size: 1,
            position: 'left'
          },
          bodytext: {
            text: "<p>It was difficult. Harry and Seamus swished and flicked, but the feather they were supposed to be sending skyward just lay on the desktop. Seamus got so impatient that he prodded it with his wand and set fire to it-- Harry had to put it out with his hat. Ron, at the next table, wasn't having much more luck. ",
            size: 1
          },
          actions: []
        }
      }
    }
  }
}
</script>
