const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const workDayPostTemplate = path.resolve(
    `./src/templates/work-day-information.js`,
  );

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors,
    );
    return;
  }

  const posts = getPosts(result);

  createPostPage(posts.news, blogPostTemplate, "news", createPage);
  createPostPage(posts.workdays, workDayPostTemplate, "work-days", createPage);
};

function getPosts(result) {
  const news = result.data.allMarkdownRemark.nodes.filter(x =>
    x.fileAbsolutePath.includes(`/content/news/`),
  );
  const workdays = result.data.allMarkdownRemark.nodes.filter(x =>
    x.fileAbsolutePath.includes(`work-days`),
  );

  return {
    news: news,
    workdays: workdays,
  };
}

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
        path: parentPage + post.fields.slug,
        component: template,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          //pagePath: path
        },
      });
    });
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      type: String
      title: String
      description: String
      date: Date @dateformat
      meeting_time: String
      type: String
    }

    type Fields {
      slug: String
    }
  `);
};

/*

Can access data:

{
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: ASC}
    limit: 1000
    filter: {excerpt: {}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          meeting_point_what3words
          meeting_point_description
          description
          date
          meeting_time
          title
          type
        }
      }
    }
  }
  markdownRemark(id: {eq: "ea91fc2f-a7b8-5363-aa4c-50a514fdba97"}) {
    id
    frontmatter {
      meeting_point_description
      meeting_point_what3words
      meeting_time
      title
      type
      date
      description
    }
  }
}


*/

/*

{
  markdownRemark(id: {}, frontmatter: {type: {eq: "work-day"}}) {
    id
    frontmatter {
      meeting_point_description
      meeting_point_what3words
      meeting_time
      title
      type
      date
      description
    }
  }
}*/
