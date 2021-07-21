const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const createPage = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const workDayPost = path.resolve(`./src/templates/work-day-information.js`)

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
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  console.log(result.data)
  console.log(result)
  const posts = result.data.allMarkdownRemark.nodes.filter(x => x.type === `news`)
  const workdayPosts = result.data.allMarkdownRemark.nodes.filter(x => x.type === `work-days`)

  console.log(posts)

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  createPostPage(posts, blogPost, createPage)
  createPostPage(workdayPosts, workDayPost, createPage)
 
}

function createPostPage(posts, component, createPage){
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: component,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

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
    }

    type Fields {
      slug: String
    }
  `)
}


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