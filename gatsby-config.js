module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '4qjv3ycn',
        dataset: 'production',

        // a token with read permissions is required
        // if you have a private dataset
        token: 'skPFWWnivIF4wQ26nwucmo8d83iUzRLnP85hBC3baf9WN2hctXVur1ukm2VHVWbpeOuN2dVt1mCt93PkE8x4DNtA4zD6jwk6hw8DscVL2kqLwcBpbRsyLItBUp1mIiAHNbpPk0SHjPoqO7QIqu2KOoOkgrzaFv1qCqnpbfwkmMiQxYVFKZ3V',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
        overlayDrafts: true,
        watchMode: true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
