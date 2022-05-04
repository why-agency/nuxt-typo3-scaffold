import Vue from 'vue'

import OTextMulticolumn from '@/components/OTextMulticolumn'
import OTextMedia from '@/components/OTextMedia'
import OSliderCard from '@/components/OSliderCard'
import OTabBase from '@/components/OTextAccordion'
import OGridCardsIntro from '@/components/OGridCardsIntro'

const components = { OTextMulticolumn, OTextMedia, OTabBase, OSliderCard, OGridCardsIntro }

export default ({ app }) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
