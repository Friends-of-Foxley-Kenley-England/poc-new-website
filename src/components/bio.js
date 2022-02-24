/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      {author?.summary && <p>{author?.summary || null}</p>}
    </div>
  );
};

export default Bio;
