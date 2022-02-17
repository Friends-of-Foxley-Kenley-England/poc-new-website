import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as style from "./posts.module.css";

const NewsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allContentfulNews.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="News" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="News" />
      <h1>Latest news</h1>

      {posts.map(post => {
        const title = post.title || post.fields.slug;

        return (
          <article
            className={style.postListItem}
            itemScope
            itemType="http://schema.org/Article"
            id={post.id}>
            <header>
              <h2>
                <Link to={"/news/" + post.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <small>{post.createdAt}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.newsContent.raw || post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        );
      })}

      <Bio />
    </Layout>
  );
};

export default NewsIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulNews(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        newsContent {
          raw
        }
        title
        createdAt(formatString: "Do MMMM YYYY")
        slug
      }
    }
  }
`;
