import Vue from 'vue'

import CeDebug from '~typo3/components/content/CeDebug'
import CeDynamic from '~typo3/components/content/CeDynamic'
import CeFrame from '~typo3/components/content/CeFrame'
import CeRenderer from '~typo3/components/content/CeRenderer'
import CeDefault from '~typo3/components/content/CeDefault'

const components = {
  CeDebug,
  CeDefault,
  CeDynamic,
  CeFrame,
  CeRenderer
}

export default () => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
