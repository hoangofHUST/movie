import config from '../../config'

// PWA module configuration: https://go.nuxtjs.dev/pwa
export default {
  icon: {
    targetDir: config.nuxt.filename.icon,
    source: 'assets/favicons/icon.png',
    fileName: 'icon.png',
    sizes: [64, 192, 512],
  },

  meta: {
    author: config.app.author,
    mobileApp: true,
    ogType: false,
    ogTitle: false,
    ogSiteName: false,
    ogDescription: false,
  },

  manifest: {
    name: config.app.name,
    short_name: config.app.shortName,
    description: config.app.description,
    lang: config.app.lang,
    theme_color: config.app.themeColor,
    background_color: config.app.backgroundColor,
    orientation: 'portrait',
    display: 'standalone',
    useWebmanifestExtension: false,
  },
}
