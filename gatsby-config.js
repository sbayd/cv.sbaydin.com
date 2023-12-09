/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Sbaydin CV',
    siteUrl: 'https://cv.sbaydin.com',
  },
  plugins: ['gatsby-plugin-sass', 'gatsby-transformer-remark', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  },
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        'G-QXDFGHSW36', // Google Analytics / GA
      ],
      pluginConfig: {
        head: false,
      },
    },
  },
  ],
};
