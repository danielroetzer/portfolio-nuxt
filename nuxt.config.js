const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,700", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Kalam:300,400,700", rel: "stylesheet" },
      //{ href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css", rel: "stylesheet" }
    ],
    script: [
      //{ src: "https://unpkg.com/ionicons@4.5.0/dist/ionicons.js", body: true } // Use body: true, to load scripts at the end of <body></body>
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#901F3E" },

  css: [
    "~assets/css/tailwind.css",
    { src: "~assets/scss/main.scss", lang: "scss" }
  ],

  router: {
    linkActiveClass: "is-active", // Declare the class to set on active routing items
    linkExactActiveClass: "is-active"
  }

}