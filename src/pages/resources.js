import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as style from "./resources.module.css";

const ResourcesIndex = ({ data, location }) => {
  console.log("data", data);

  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const resourcesPageData = data.allContentfulResourcesPage?.nodes[0];

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Resources" />
      <h1>{resourcesPageData.title}</h1>

      <p>{resourcesPageData.subTitle}</p>

      {/* https://stackoverflow.com/questions/13354578/custom-li-list-style-with-font-awesome-icon */}
      {/* <FontAwesomeIcon icon="fa-regular fa-file" /> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-file-image" /> */}
      {/* <FontAwesomeIcon icon="fa-regular fa-file-lines" /> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-file-pdf" /> */}
      <ul className={style.pdfFileListItem}>
        {resourcesPageData.resourceFiles.map(resourceFile => {
          return (
            <li className={style.linkText}>
              <a href={resourceFile.file.url} className={style.linkText}>
                {resourceFile.title}
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
  query ResourcesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulResourcesPage {
      nodes {
        title
        subTitle
        id
        resourceFiles {
          file {
            contentType
            fileName
          }
          description
          title
          url
        }
      }
    }
  }
`;
