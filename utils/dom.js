export const NAV_OFFSET = 160

export const findEl = (hash, x = 0) => {
  return (
    document.querySelector(hash) ||
    new Promise(resolve => {
      if (x > 50) {
        return resolve(document.querySelector('#app'))
      }
      setTimeout(() => {
        resolve(findEl(hash, ++x || 1))
      }, 100)
    })
  )
}
