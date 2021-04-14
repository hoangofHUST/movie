import config from '../../config'

// I18n module configuration: https://i18n.nuxtjs.org/options-reference
export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.json',
    },
    {
      code: 'vi',
      iso: 'vi-VN',
      name: 'Tiếng Việt',
      file: 'vi.json',
    },
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  vuex: { syncLocale: true },
  strategy: 'prefix_except_default',
  // differentDomains: process.env.NODE_ENV === 'production',
  parsePages: false,
  pages: {
    index: {
      en: '/',
      vi: '/trang-chu',
    },
  },
  baseUrl: config.app.baseUrl,
}
