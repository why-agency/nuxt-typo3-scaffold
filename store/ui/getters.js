export default {
  getNavObject: (state, getters, rootState) => {
    return (
      rootState.typo3?.page?.structure?.navigation?.content ||
      rootState.typo3?.initial?.globals?.navigation?.content
    )
  },
  getNavMainOuter: (state, getters) => {
    return getters.getNavObject?.navigationOuterPages
  },
  getNavMainInner: (state, getters) => {
    return getters.getNavObject?.navigationInnerPages
  },
  getNavContext: (state, getters) => {
    const nav = getters.getNavObject?.navigationInnerContext
    return nav ? nav.filter(i => i.content).map(i => i.content) : null
  },
  getNavSocial: (state, getters) => {
    const nav = getters.getNavObject?.navigationInnerSocialMedia
    return nav ? nav.filter(i => i.content).map(i => i.content) : null
  },
  getBreadcrumbs: (state, getters, rootState) => {
    return getters.getNavObject?.navigationBreadcrumbs
  },
  getPageTheme: (state, getters, rootState) => {
    return rootState.typo3?.page?.page?.appearance?.theme || 'dark'
  }
}
