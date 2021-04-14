import config from '../config'

export default {
  htmlAttrs: {
    lang: config.app.lang,
  },

  bodyAttrs: {},

  /**
   * Corrects the page title when routes have a delayed transition
   * @link https://github.com/nuxt/vue-meta/issues/621
   */
  title:
    config.app.title + config.app.titleSeparator + config.app.titleTemplate,

  meta: [
    {
      hid: 'charset',
      charset: config.app.charset,
    },
    {
      hid: 'http-equiv',
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      hid: 'viewport',
      name: 'viewport',
      content: 'width=device-width,initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: config.app.description,
    },
    {
      hid: 'robots',
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
  ],
}
