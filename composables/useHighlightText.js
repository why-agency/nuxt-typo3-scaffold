export const useHighlightText = text => {
  if (!text) {
    return ''
  }

  const regex = /##(.*?)##/g
  const matches = text.match(regex)

  if (matches && matches.length) {
    let newText = text
    matches.forEach(highlightedText => {
      const replacement = highlightedText
        .split(' ')
        .map((word, index, arr) => {
          const separator = index < arr.length - 1 ? ' ' : ''
          return `<span class="text-secondary">${word}${separator}</span>`
        })
        .join(' ')
      newText = newText.replace(highlightedText, replacement)
    })
    return newText.replace(/##/g, '')
  }

  return text
}
