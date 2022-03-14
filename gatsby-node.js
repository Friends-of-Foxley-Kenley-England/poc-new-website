const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { StatsWriterPlugin } = require("webpack-stats-plugin");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const workDayPostTemplate = path.resolve(
    `./src/templates/work-day-information.js`,
  );

  //  sorted by date
  const result = await graphql(`
    {
      allContentfulWorkDay {
        nodes {
          slug
          createdAt
          id
        }
      }
      allContentfulNews {
        nodes {
          slug
          createdAt
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the work days and news`,
      result.errors,
    );
    return;
  }

  const posts = {
    news: result.data.allContentfulNews.nodes,
    workdays: result.data.allContentfulWorkDay.nodes,
  };

  createPostPage(posts.news, blogPostTemplate, "news", createPage);
  createPostPage(posts.workdays, workDayPostTemplate, "work-days", createPage);
};

/***
 * @summary creates the pages with post content (either news or workdays)
 * @param {array} posts - list of posts to create pages for
 * @param {string} template - path of the template to use to load the content in
 * @param {string} parentPage - prefix for the URL so it's `news/hello` instead of just `hello`
 */
function createPostPage(posts, template, parentPage, createPage) {
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: `${parentPage}/${post.slug}`,
        component: template,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  createTypes(`
    type SiteSiteMetadata {
      siteUrl: String
      social: Social
    }

    type Social {
      facebook: String
    }

    type Fields {
      slug: String
    }
  `);
};

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  console.log("stage", stage);
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [
        new StatsWriterPlugin({
          filename: "webpack-stats.json",
          stats: {
            context: "./src", // optional, will improve readability of the paths
            assets: true,
            entrypoints: true,
            chunks: true,
            modules: true,
          },
        }),
      ],
    });
  }
};
