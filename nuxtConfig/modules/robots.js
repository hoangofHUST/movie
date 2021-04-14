import config from '../../config'

// Robots module configuration: https://github.com/nuxt-community/robots-module#options
export default {
  UserAgent: () => ['*'],
  Disallow: () => [
    `${config.nuxt.publicPath}${config.nuxt.filename.img}/`,
    `${config.nuxt.publicPath}${config.nuxt.filename.font}/`,
    `${config.nuxt.publicPath}${config.nuxt.filename.video}/`,
    `${config.nuxt.publicPath}${config.nuxt.filename.icon}/`,
    `/${config.nuxt.filename.img}/`,
    `/${config.nuxt.filename.font}/`,
    `/${config.nuxt.filename.video}/`,
    `/${config.nuxt.filename.icon}/`,
  ],
  Sitemap: () => [`${config.app.url}/sitemap.xml`],
}
