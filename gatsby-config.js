module.exports = {
  siteMetadata: {
    title: `Faizan's Portfolio`,
    description: `Faizan is a Full Stack Developer`,
    author: `@mdfaizan7 faizaanazim@gmail.com`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faizan's Portfolio`,
        short_name: `Faizan's Portfolio`,
        start_url: `/`,
        display: "standalone",
        description: "Faizan is a full stack dev with awesome skills 💯",
        background_color: `#fff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
