import Vue from 'vue'

import OTextMulticolumn from '@/components/OTextMulticolumn'
import OTextMedia from '@/components/OTextMedia'
import OTabBase from '@/components/OTextAccordion'

const components = { OTextMulticolumn, OTextMedia, OTabBase }

export default ({ app }) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
