<template>
  <div>
    <CeFrame>
      <OQuote v-bind="data1" />
    </CeFrame>
    <CeFrame>
      <OQuote v-bind="data2" />
    </CeFrame>
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
          spaceBefore: 'small',
          spaceAfter: 'small'
        },
        overline: 'Overline One ',
        quote: {
          text: ' "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."',
          layout: 12,
          position: 'left'
        },
        sourcename: 'Lorem ipsum',
        sourceposition: 'Donec diam mi'
      },
      data2: {
        overline: 'Overline Two ',
        quote: {
          text: ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies nibh at dolor tempus lobortis."',
          layout: 12,
          position: 'left'
        },
        sourcename: '',
        sourceposition: ''
      }
    }
  }
}
</script>
