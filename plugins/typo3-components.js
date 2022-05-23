import Vue from 'vue'

import OTextMultiColumn from '@/components/organisms/o-03-01-TextMultiColumn'
import OTextMedia from '@/components/organisms/o-03-02-TextMedia'
import OSliderCard from '@/components/organisms/o-04-01-SliderCards'
import OTabBase from '@/components/organisms/o-03-04-TextAccordion'
import OGridCardsIntro from '@/components/OGridCardsIntro'

const components = {
  OTextMultiColumn,
  OTextMedia,
  OTabBase,
  OSliderCard,
  OGridCardsIntro
}

export default ({ app }) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
