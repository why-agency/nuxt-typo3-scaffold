import en from './locales/en'
import de from './locales/de'
import { dateTimeFormats } from './locales/dateTimeFormats'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gbk-corporate-pwa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /**
   * Environment variables
   */
  env: {
    cmsEndpoint: process.env.TYPO3_API
  },

  /**
   * Public runtime config
   */
  publicRuntimeConfig: {
    cmsEndpoint: process.env.TYPO3_API,
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#009FE3' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  /**
   * TailwindCSS config
   */
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/i18n',
    '@/plugins/strip-html',
    '@/plugins/scroll-lock.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/ivodolenc/nuxt-gsap-module#readme
    'nuxt-gsap-module',
    // https://composition-api.nuxtjs.org/getting-started/introduction
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@/modules/typo3',
    'nuxt-i18n',
    '@nuxtjs/gtm',
    'portal-vue/nuxt'
  ],

  /*
   ** TYPO3 module configuration
   ** https://github.com/TYPO3-Initiatives/nuxt-typo3
   */
  typo3: {
    baseURL: process.env.NUXT_HOST,
    api: {
      baseURL: process.env.TYPO3_API
    },
    extensions: [],
    locales: ['en', 'de'],
    defaultLocale: 'de'
  },

  extendPlugins(plugins) {
    const pluginIndex = plugins.findIndex(({ src }) =>
      src?.includes('axios.js')
    )
    const shouldBeFirstPlugin = plugins[pluginIndex]

    plugins.splice(pluginIndex, 1)
    plugins.unshift(shouldBeFirstPlugin)

    return plugins
  },

  /**
   * Google Tag Manager
   * https://github.com/nuxt-community/gtm-module
   */
  gtm: {
    id: '', // Used as fallback if no runtime config is provided
    debug: process.env.NODE_ENV === 'development'
  },

  /**
   * Nuxt i18n
   * https://i18n.nuxtjs.org/
   */
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    vueI18n: {
      dateTimeFormats,
      fallbackLocale: 'en',
      messages: {
        en,
        de
      }
    }
  },

  /**
   * GSAP configuration
   * https://github.com/ivodolenc/nuxt-gsap-module
   */
  gsap: {
    extraPlugins: {
      cssRule: false,
      draggable: false,
      easel: false,
      motionPath: false,
      pixi: false,
      text: false,
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: false,
      roughEase: false,
      slowMo: false,
      customEase: true
    },
    clubPlugins: {
      splitText: true
    }
  },

  /**
   * Axios configuration
   * https://go.nuxtjs.dev/config-axios
   */
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
