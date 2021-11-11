module.exports = {
  siteMetadata: {
    title: `GRINNING GOD`,
        description: `Grinning God is dedicated to making creative high detail 3d printable miniatures that tell a story. The content created will bring to life a unique fantasy world. The Models created will include all sorts of creatures summoned out of the Dark abyss`,
    author: `@gatsbyjs`,
        siteUrl: `https://www.instagram.com/gaetangrey.art/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `markdown-pages`,
              path: `${__dirname}/src/markdown-pages`,
          },
      },
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
      `gatsby-remark-images`,
      `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            // This will impact how browsers show your PWA/website
            // https://css-tricks.com/meta-theme-color-and-trickery/
            // theme_color: `#663399`,
            display: `minimal-ui`,
              icon: `src/images/GrinningGod_White.svg`, // This path is relative to the root of the site.
          },
      },
      {
          resolve: "gatsby-remark-embed-video",
          options: {
              width: 800,
              ratio: 1.77,
              height: 400,
              related: false,
              noIframeBorder: true
          },
      },
      `gatsby-remark-responsive-iframe`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
