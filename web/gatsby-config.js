require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./config')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

// Get Sanity config
// const {
//   api: { projectId, dataset },
// } = requireConfig('../studio/sanity.json')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    defaultBanner: config.banner,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: config.googleTagID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'r6reilsl',
        dataset: 'production',
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        // token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: false
      }
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: 'r6reilsl',
        dataset: 'production',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#8C7746`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.ico',
        include_favicon: true,
      },
    },
  ],
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

// function requireConfig(path) {
//   try {
//     return require('../studio/sanity.json')
//   } catch (e) {
//     console.error(
//       'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
//     )
//     return {
//       api: {
//         projectId: process.env.GATSBY_SANITY_PROJECT_ID || '',
//         dataset: process.env.GATSBY_SANITY_DATASET || '',
//       },
//     }
//   }
// }
