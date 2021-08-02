export const removeMetaPrefix = type => {
  const typeWithoutMaskPrefix = type.replace('mask_', '')
  const typePrefix = typeWithoutMaskPrefix[0]
  const splits = typeWithoutMaskPrefix.split('__')

  if (splits.length === 1) {
    return type
  }

  return `${typePrefix}_${splits[1]}`
}

export const checkExtensionComponents = (type, extensions) => {
  return extensions.includes(type)
}
