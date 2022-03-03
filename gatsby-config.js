require("dotenv").config();

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const contentfulConfig = {
  downloadLocal: true,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

console.log("process.env.CONTENTFUL_SPACE_ID", process.env.CONTENTFUL_SPACE_ID);

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided.",
  );
}

module.exports = {
  siteMetadata: {
    title: `Friends Of Foxley`,
    description: `The Friends of Foxley are a group of volunteers who manage Foxley Wood in Kenley, Surrey. `,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      facebook: `https://www.facebook.com/pages/Friends-of-Foxley-Wood/151238351586387`,
    },
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "News",
        link: "/news",
      },
      {
        name: "Volunteer",
        link: "/work-days",
      },
      {
        name: "History",
        link: "/history",
      },
      {
        name: "Trees",
        link: "/trees",
      },
      {
        name: "Resources",
        link: "/resources",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-bundle-stats",
      options: {
        stats: {
          context: "./src",
          assets: true,
          modules: true,
          entrypoints: true,
          chunks: true,
          builtAt: true,
          hash: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Friends of Foxley`,
        short_name: `FOF`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/history`, `/contact`, `/work-days/*`],
      },
    },

    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
  ],
};
