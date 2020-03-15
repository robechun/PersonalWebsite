require('dotenv').config()
const siteAddress = new URL('https://robertchung.me');

module.exports = {
  siteMetadata: {
    title: `Robert Chung blog`,
    author: `Robert Chung`,
    description: `Robert Chung's site. Has articles, books, and more.`,
    siteUrl: `https://www.robertchung.me`,
    social: {
      twitter: `_robertchung`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://ghost.robertchung.me`,
        contentApiKey: process.env.GATSBY_CONTENT_API,
        version: `v3`
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'www.robertchung.me',
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: "https://www.robertchung.me",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robert's blog`,
        short_name: `Robert's blog`,
        description: `Robert Chung's site. Has articles, books, and more.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        start_url: `/`,
      },
    },
  ],

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
}
