export default {
  openMenu({ commit }, { activeCategory }) {
    commit('SET_MENU_STATE', true)
    commit('SET_ACTIVE_CATEGORY', activeCategory)
    this.$scrollLock.enable()
  },
  closeMenu({ commit, dispatch }) {
    commit('SET_MENU_STATE', false)
    dispatch('resetAllCategories')
    this.$scrollLock.disable()
  },
  resetAllCategories({ commit }) {
    commit('SET_ACTIVE_CATEGORY', null)
    commit('SET_ACTIVE_SECONDARY_CATEGORY', null)
    commit('SET_ACTIVE_TERTIARY_CATEGORY', null)
  }
}
