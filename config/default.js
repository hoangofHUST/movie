module.exports = {
  isDev: process.env.NODE_ENV === 'development',

  nuxt: {
    routerBase: '/',
    globalName: 'nuxt',
    publicPath: '/_nuxt/',

    filename: {
      app: 'scripts',
      chunk: 'scripts',
      css: 'styles',
      img: 'images',
      font: 'fonts',
      video: 'videos',
      icon: 'icons',
    },
  },

  app: {
    name: 'Nuxt Movie',
    shortName: 'Nuxt Movie',
    description: 'Movie built with Nuxt.js',
    author: 'namesurname',

    title: 'Nuxt Movie',
    titleSeparator: ' — ',
    titleTemplate: 'Movie built with Nuxt.js',

    charset: 'utf-8',
    lang: 'en-US',
    locale: 'en_US',
    type: 'website',
    themeColor: '#00c58e',
    backgroundColor: '#f5f8f9',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}
