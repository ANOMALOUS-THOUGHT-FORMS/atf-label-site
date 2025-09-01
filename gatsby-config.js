/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ANOMALOUS THOUGHT FORMS`,
    shortName: `ATF`,
    description: `A metalabel for ideas, art and other thought forms that deviate from what is standard, normal or expected.`,
    author: `Wip`,
    siteUrl: `https://anomalousthoughtforms.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          // (A) Research / Manifesto
          {
            name: "League Spartan",
            file: "https://fonts.googleapis.com/css2?family=League+Spartan:wght@700;800&display=swap",
          },
          {
            name: "Inter",
            file: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap",
          },

          // (B) Glitchy Portal
          {
            name: "Space Grotesk",
            file: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&display=swap",
          },
          {
            name: "IBM Plex Sans",
            file: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap",
          },

        ],
      },
      
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "thoughtforms",
        path: `${__dirname}/content/thought-forms/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
