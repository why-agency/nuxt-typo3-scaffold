import {
  removeMetaPrefix
} from '../../../utils/component-matching'

// Component to render CE based on type
export default {
  props: {
    /**
     * Content elements data props
     */
    data: {
      type: Object,
      required: true
    },
    /**
     * type of content element
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * index of content element
     */
    index: {
      type: Number,
      default: -1
    }
  },
  render(createElement) {
    const createComponent = () => {
      // Content elements are registered including meta data such as the element id
      // In order to match the content element with the respective Vue component, we
      // remove any meta data
      const typeWithoutMetaPrefix = removeMetaPrefix(this.type)
      const typeNameCamelCase = typeWithoutMetaPrefix.replace(
        /_([a-z])/g,
        g => {
          return g[1].toUpperCase()
        }
      )

      let elementTag = typeWithoutMetaPrefix.replace(/_/g, '-')
      const componentName =
        typeNameCamelCase[0].toUpperCase() + typeNameCamelCase.slice(1)

      if (this.$nuxt.$options.components[componentName]) {
        elementTag = `ce-${this.type}`
      } else {
        elementTag = 'ce-default'
      }

      return createElement(elementTag, {
        props: {
          ...{
            id: this.data.id,
            type: this.data.type,
            appearance: this.data.appearance,
            index: this.index
          },
          ...this.data.content
        }
      })
    }

    if (this.$nuxt.$typo3.options.debug) {
      return createElement('ce-debug', { props: this.data }, [
        createComponent()
      ])
    }

    return createComponent()
  }
}
