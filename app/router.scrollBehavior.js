import { findEl, NAV_OFFSET } from '~/utils/dom'

export default async function (to) {
  if (to.hash) {
    const el = await findEl(to.hash)
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({
        top: el.offsetTop - NAV_OFFSET,
        behavior: 'smooth'
      })
    } else {
      return window.scrollTo(0, el.offsetTop - NAV_OFFSET)
    }
  }
  return { x: 0, y: 0 }
}
