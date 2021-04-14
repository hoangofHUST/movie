import { defineNuxtConfig } from '@nuxtjs/composition-api'
import config from './config'
import routeTransition from './utils/routeTransition'
import {
  alias,
  modules,
  buildModules,
  plugins,
  head,
  build,
  css,
  features,
} from './nuxtConfig'

export default defineNuxtConfig({
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr
  ssr: true,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern
  modern: !config.isDev && 'client',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // https://nuxtjs.org/docs/2.x/features/loading
  loading: false,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-telemetry
  telemetry: false,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-global-name
  globalName: config.nuxt.globalName,

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-watch
  watch: ['~/config/*'],

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-alias
  alias,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build,

  features,

  dir: {
    static: 'public',
  },

  server: {
    port: config.server.port,
    host: config.server.hostname,
  },

  /**
   * @link https://github.com/nuxt/nuxt.js/issues/6028
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    ...routeTransition,
  },

  router: {
    trailingSlash: true,
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
  },

  generate: {
    dir: 'dist',
    fallback: true, // Error 404 page
  },

  publicRuntimeConfig: {
    app: {
      url: config.app.url,
      name: config.app.name,
      title: config.app.title,
      titleSeparator: config.app.titleSeparator,
      titleTemplate: config.app.titleTemplate,
      description: config.app.description,
      type: config.app.type,
    },
    screens: config.breakpoints,
  },

  privateRuntimeConfig: {},
})
