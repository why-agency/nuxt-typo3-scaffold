import Vue from 'vue'

import OTextMulticolumn from '@/components/OTextMulticolumn'

const components = { OTextMulticolumn }

export default ({ app }) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
