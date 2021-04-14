import config from '../../config'

// Sitemap module configuration: https://sitemap.nuxtjs.org/guide/configuration
export default {
  path: '/sitemap.xml',
  hostname: config.app.url,
  trailingSlash: true,
  gzip: true,
  exclude: ['/.git'],
  defaults: {
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(),
    lastmodrealtime: true,
  },
}
