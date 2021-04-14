import config from '../config'

export default {
  publicPath: config.nuxt.publicPath,

  extractCSS: true,

  filenames: {
    app: ({ isDev }) =>
      isDev ? '[name].js' : `${config.nuxt.filename.app}/[contenthash:7].js`,
    chunk: ({ isDev }) =>
      isDev ? '[name].js' : `${config.nuxt.filename.chunk}/[contenthash:7].js`,
    css: ({ isDev }) =>
      isDev ? '[name].css' : `${config.nuxt.filename.css}/[contenthash:7].css`,
    img: ({ isDev }) =>
      isDev
        ? '[path][name].[ext]'
        : `${config.nuxt.filename.img}/[contenthash:7].[ext]`,
    font: ({ isDev }) =>
      isDev
        ? '[path][name].[ext]'
        : `${config.nuxt.filename.font}/[contenthash:7].[ext]`,
    video: ({ isDev }) =>
      isDev
        ? '[path][name].[ext]'
        : `${config.nuxt.filename.video}/[contenthash:7].[ext]`,
  },

  postcss: {
    plugins: {
      'postcss-import': true,
    },
  },
}
