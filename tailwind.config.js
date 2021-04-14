const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: false,
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
      },
    },
    fontFamily: {
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        body: { color: config('theme.colors.body') },
      })
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    // enabled: false,
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    // These options are passed through directly to PurgeCSS
    options: {},
  },
}
