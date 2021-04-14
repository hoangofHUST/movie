import pwa from './modules/pwa'
import robots from './modules/robots'
import sitemap from './modules/sitemap'
import i18n from './modules/i18n'
import axios from './modules/axios'
import svg from './modules/svg'

export default [
  // https://go.nuxtjs.dev/axios
  ['@nuxtjs/axios', axios],
  // https://go.nuxtjs.dev/pwa
  ['@nuxtjs/pwa', pwa],
  // https://github.com/nuxt-community/svg-module
  ['@nuxtjs/svg', svg],
  // https://github.com/nuxt-community/robots-module
  ['@nuxtjs/robots', robots],
  // https://sitemap.nuxtjs.org/
  ['@nuxtjs/sitemap', sitemap],
  // https://i18n.nuxtjs.org/
  ['nuxt-i18n', i18n],
]
