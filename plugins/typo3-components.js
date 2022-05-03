import Vue from 'vue'

import OTextMulticolumn from '@/components/OTextMulticolumn'
import OTextMedia from '@/components/OTextMedia'
import OSliderCard from '@/components/OSliderCard'

const components = { OTextMulticolumn, OTextMedia, OSliderCard }

export default ({ app }) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
