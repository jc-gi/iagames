module.exports = {
  siteMetadata: {
    title: `TypeTech`,
    description: `We are TypeTech, a group of devs dedicated to Open Sourcing and freelancing software with cutting edge technologies`,
    author: `@typetech`,
    location: `Currently outsourcing only in the Americas 🌎`,
    siteUrl: "https://typetech.vercel.app",
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
        name: `typetech-website`,
        short_name: `typetech`,
        start_url: `/`,
        background_color: `#039be5`,
        theme_color: `#039be5`,
        display: `minimal-ui`,
        icon: `src/images/typetechlogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `500`, `600`, `700`, `800`, `900`],
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
