import tailwindcss from './buildModules/tailwindcss'
import googleFonts from './buildModules/googleFonts'

export default [
  // https://composition-api.nuxtjs.org/
  '@nuxtjs/composition-api',
  // 'nuxt-vite',
  // https://go.nuxtjs.dev/eslint
  '@nuxtjs/eslint-module',
  // https://go.nuxtjs.dev/tailwindcss
  ['@nuxtjs/tailwindcss', tailwindcss],
  // https://google-fonts.nuxtjs.org
  ['@nuxtjs/google-fonts', googleFonts],
]
