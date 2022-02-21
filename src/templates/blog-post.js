import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as style from "./blog-post.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulNews;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node);
        return (
          <img
            key={node.data.target.fields.file.en.url}
            src={node.data.target.fields.file.en.url}
          />
        );
      },
    },
  };

  return (
    // <script src="https://assets.what3words.com/sdk/v3/what3words.js"></script>
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        // description={post.newsContent.raw || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article">
        <header>
          <h1 className={style.blogPostHeader} itemProp="headline">
            {post.title}
          </h1>
          <p className={style.blogPostPostedDate}>{post.createdAt}</p>
        </header>
        <section itemProp="articleBody" className={style.articleBody}>
          {renderRichText(post.newsContent, options)}
        </section>
        <hr className={style.spacer} />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className={style.blogPostNav}>
        <ul className={style.blogPostNavLinks}>
          <li>
            {previous && (
              <Link to={"/news/" + previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={"/news/" + next.slug} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulNews(id: { eq: $id }) {
      id
      title
      createdAt(formatString: "Do MMMM YYYY")
      newsContent {
        raw
        references {
          description
          gatsbyImageData(
            formats: JPG
            aspectRatio: 1.5
            placeholder: TRACED_SVG
          )
        }
      }
    }
    previous: contentfulNews(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: contentfulNews(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`;
