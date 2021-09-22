import { graphql } from "gatsby";
import * as page from "../ancient_beech_tree";

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default page.default;

/*

    This page exists to preserve a URL from the old website.

    A few leaflets, a QR code and other content may have this url

*/
