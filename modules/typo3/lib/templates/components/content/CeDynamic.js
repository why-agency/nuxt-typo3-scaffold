import { removeMetaPrefix } from '../../../utils/component-matching'

/**
 *
 * Typo3 plugins ussually have two variants, one for the list view, one for the detail view.
 * Here, we check which variant should be rendered,
 *
 * @param {string} type
 * @param {array} plugins
 * @param {object} data
 * @returns object
 */
const getPluginToRender = ({ type, plugins, data }) => {
  const pluginToRender = plugins.find(plugin => plugin.type === type)

  const pluginVariant = pluginToRender.variants.find(
    variant => variant.context === data.context.action
  )

  return {
    elementTag: pluginVariant.component,
    componentName: pluginVariant.component
  }
}
/**
 * Content elements are registered including meta data such as the element id.
 * In order to match the content element with the respective Vue component, we
 * remove any meta data.
 *
 * @param {string} type
 * @returns Object
 */
const getContentElementToRender = ({ type }) => {
  const typeWithoutMetaPrefix = removeMetaPrefix(type)
  const typeNameCamelCase = typeWithoutMetaPrefix.replace(
    /_([a-z4])/g,
    g => {
      return g[1].toUpperCase()
    }
  )

  return {
    elementTag: typeWithoutMetaPrefix.replace(/_/g, '-'),
    componentName:
      typeNameCamelCase[0].toUpperCase() + typeNameCamelCase.slice(1)
  }
}

const getComponentToRender = ({ type, plugins, data }) => {
  const isPlugin = plugins.some(plugin => plugin.type === type)

  return isPlugin
    ? getPluginToRender({ type, plugins, data })
    : getContentElementToRender({ type })
}

// Component to render CE based on type
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    index: {
      type: Number,
      default: -1
    }
  },
  render(createElement) {
    const createComponent = () => {
      const plugins = this.$nuxt.$typo3?.options?.plugins || []
      const { elementTag, componentName } = getComponentToRender({
        type: this.type,
        plugins,
        data: this.data
      })

      console.log(elementTag, componentName, this.$nuxt.$options.components)

      const componentToRender = this.$nuxt.$options.components[componentName]
        ? elementTag
        : 'ce-default'

      return createElement(componentToRender, {
        props: {
          ...{
            id: this.data.id,
            type: this.data.type,
            appearance: this.data.appearance,
            index: this.index
          },
          ...this.data.content
        },
        attrs: {
          id: `c${this.data.id}`
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
