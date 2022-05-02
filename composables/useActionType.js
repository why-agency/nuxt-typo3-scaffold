const isExternalLink = to => {
  const externalProtocols = ['http:', 'https:', 'tel:', 'mailto:']

  try {
    const url = new URL(to)
    return externalProtocols.includes(url.protocol)
  } catch {
    // creating the URL failed -> internal URL e.g. /test or #c276
    return false
  }
}

export const useActionType = (to, tag = 'button') => {
  if (!to) {
    return { isAnchor: false, type: tag }
  }

  const isAnchor = typeof to === 'object' ? false : isExternalLink(to)
  const type = isAnchor ? 'a' : 'nuxt-link'

  return { isAnchor, type }
}
