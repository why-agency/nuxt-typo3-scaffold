import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state: () => ({
    isMenuVisible: false,
    activeCategory: null,
    activeSecondaryCategory: null,
    activeTertiaryCategory: null
  }),
  getters,
  mutations,
  actions
}
