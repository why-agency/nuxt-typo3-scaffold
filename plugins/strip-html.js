import Vue from 'vue'

/**
 * Strip HTML tags
 * @param {String} html
 */
const stripHTML = html => {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, '').trim()
}

Vue.filter('stripHtml', val => stripHTML(val))
