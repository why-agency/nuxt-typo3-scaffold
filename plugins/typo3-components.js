import Vue from 'vue'

import OTextMulticolumn from '@/components/OTextMulticolumn'
import OTextMedia from '@/components/OTextMedia'

const components = { OTextMulticolumn, OTextMedia }

export default ({ app }) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
