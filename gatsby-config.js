module.exports = {
  siteMetadata: {
    title: `Bristol City Council`,
    description: `Information for residents about Bristol City Council services including council tax, bins and recycling, schools, leisure, streets and parking.`,
    author: ``,
    navLinks: [
      {
        name: "Residents",
        link: "/",
      },
      {
        name: "Business",
        link: "/business",
      },
      {
        name: "Council and Mayor",
        link: "/council-and-mayor",
      },
    ],
    footerLinks: [
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Complaints and feedback",
        link: "/complaints",
      },
      {
        name: "Cookies",
        link: "/cookies",
      },
      {
        name: "Privacy",
        link: "/privacy",
      },
      {
        name: "Accessibility",
        link: "/accessibility",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
