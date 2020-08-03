module.exports = {
  siteMetadata: {
    title: `Schlacht um Otzenhausen`,
    date: "07.11.2020",
    siteUrl:
      process.env === "production"
        ? "https://suo-festival.de"
        : "http://localhost:8000",
    location: {
      title: "Hunnenringhalle",
      latitude: 49.605207,
      longitude: 6.995244,
      googleRoutesLink:
        "https://www.google.de/maps/dir//Hunnenringhalle+Otzenhausen,+Ringwallstra%C3%9Fe+8,+66620+Nonnweiler/@49.6050743,6.9931509,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47959061a7d8853d:0x3c977a515cdc0c51!2m2!1d6.9953396!2d49.6050743",
    },
    description: `Das Indoor-Metalfestival im Saarland!`,
    author: `@r3sMetz`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bands`,
        path: `${__dirname}/src/bands`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fake-data`,
        path: `${__dirname}/src/fake-data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-messages`,
        path: `${__dirname}/src/messages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-suo-fronted`,
        short_name: `suo`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#AD1F1F`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
