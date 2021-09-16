import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as style from "./posts.module.css";

const WorkDaysIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Volunteer workdays" />
        <p>
          No workdays found. Add markdown posts to "content/work-days" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Volunteer workdays" />

      <h1>Volunteer days</h1>

      <p>
        All are welcome and any time you can give on the day will be most
        appreciated.
      </p>
      <p>
        Tools and equipment are provided, but please wear appropriate clothes
        and footwear and bring your own refreshments.
      </p>
      <p>
        We usually meet at 11am on the{" "}
        <strong>second Sunday of the month</strong> and 10am on the{" "}
        <strong>last Wednesday of the month</strong>.
      </p>
      <p>
        Please contact{" "}
        <Link to="/contact#Secretary-and-Membership">Chris Parker</Link> or{" "}
        <Link to="/contact#Chairman">Andrew Wood</Link> for details, for each
        workday, of where and when we will meet or to be added to the list of
        email addresses to be advised.
      </p>

      <h2>Dates:</h2>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;

          console.log("work day template", {
            slug: post.fields.slug,
            title: post.frontmatter.title,
            meeting_time: post.frontmatter.meeting_time,
            type: post.frontmatter.type,
          });

          return (
            <li key={post.fields.slug}>
              <article
                className={style.postListItem}
                itemScope
                itemType="http://schema.org/Article">
                <header>
                  <h3>
                    <Link to={"/work-days" + post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default WorkDaysIndex;

//, filter: { sourceInstanceName: { eq: "work-days" } }

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work-days/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
