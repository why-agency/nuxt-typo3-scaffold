<template>
  <div>
    <section class="frame-default">
      <OTextAccordion v-bind="data1" />
    </section>
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
        background: 'primary',
        header: {
          text: 'This is a accordion',
          layout: 1,
          position: 'left'
        },
        actions: [
          {
            id: 181,
            pid: 62,
            type: 'a_01_01__action',
            content: {
              text: 'Eins',
              link: {
                type: 'page',
                url: '/api/o-03-06-text-accordion',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary'
            }
          },
          {
            id: 187,
            pid: 62,
            type: 'a_01_01__action',
            content: {
              text: 'Leistungen',
              link: {
                type: 'page',
                url: '/leistungen',
                target: '',
                title: '',
                class: ''
              },
              variant: 'filled',
              color: 'primary'
            }
          }
        ],
        tabs: [
          {
            id: 179,
            pid: 62,
            type: 'o_03_06__text_accordion__tabs',
            content: {
              header: {
                text: 'Tab One',
                layout: 5,
                position: 'left'
              },
              bodytext: {
                text: '<p><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p> <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.</p>',
                layout: 1
              },
              actions: [
                {
                  id: 182,
                  pid: 62,
                  type: 'a_01_01__action',
                  content: {
                    text: 'An link',
                    link: {
                      type: 'page',
                      url: '/api/o-03-06-text-accordion',
                      target: '',
                      title: '',
                      class: ''
                    },
                    variant: 'text',
                    color: 'primary'
                  }
                }
              ]
            }
          },
          {
            id: 184,
            pid: 62,
            type: 'o_03_06__text_accordion__tabs',
            content: {
              header: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                layout: 5,
                position: 'left'
              },
              bodytext: {
                text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi. Diam phasellus vestibulum lorem sed risus ultricies. Eget arcu dictum varius duis at consectetur lorem donec massa. Senectus et netus et malesuada. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Nec nam aliquam sem et tortor consequat id porta. Orci a scelerisque purus semper eget duis at. Risus in hendrerit gravida rutrum. Dictum sit amet justo donec enim diam vulputate ut pharetra. Auctor urna nunc id cursus metus aliquam. Volutpat est velit egestas dui id ornare arcu. Id semper risus in hendrerit. Sodales ut etiam sit amet. Et netus et malesuada fames. Nec dui nunc mattis enim ut. Quisque non tellus orci ac auctor augue mauris augue. Dignissim cras tincidunt lobortis feugiat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.</p>',
                layout: 1
              },
              actions: null
            }
          }
        ]
      }
    }
  }
}
</script>
