const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,700", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Kalam:300,400,700", rel: "stylesheet" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  css: [
    '~assets/css/tailwind.css',
    { src: "~assets/scss/main.scss", lang: "scss" }
  ]
}