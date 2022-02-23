import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as style from "./resources.module.css";

const ResourcesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="resources" />
      <h1>Resources</h1>

      <p>
        Surveys, management plan, membership application form and other
        interesting documents.
      </p>

      <ul className={style.pdfFileListItem}>
        {data.allContentfulAsset.nodes.map(node => {
          return (
            <li className={style.linkText}>
              <a href={node.file.url} className={style.linkText}>
                {node.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default ResourcesIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulAsset(
      filter: { file: { contentType: { eq: "application/pdf" } } }
    ) {
      nodes {
        description
        title
        file {
          contentType
          url
          fileName
        }
      }
    }
  }
`;
