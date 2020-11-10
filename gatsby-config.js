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
        icon: "src/images/icon.png",
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon.pmg",
            sizes: "96x96 128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
