const path = require('path')

module.exports = {
  mode: 'jit',
  content: [
    path.resolve(__dirname, './public/**/*.html'),
  ],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
