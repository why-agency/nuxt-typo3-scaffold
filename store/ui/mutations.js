export default {
  SET_MENU_STATE(state, isVisible) {
    state.isMenuVisible = isVisible
  },
  SET_ACTIVE_CATEGORY(state, category) {
    state.activeCategory = category
  },
  SET_ACTIVE_SECONDARY_CATEGORY(state, category) {
    state.activeSecondaryCategory = category
  },
  SET_ACTIVE_TERTIARY_CATEGORY(state, category) {
    state.activeTertiaryCategory = category
  }
}
