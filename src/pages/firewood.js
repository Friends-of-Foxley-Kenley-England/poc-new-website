import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Firewood" />
      <h1>Firewood</h1>

      <p>
        Firewood is normally available throughout the winter. We supply it split
        and ready to burn in good sized bags.
      </p>
      <p>
        For supplies of seasoned hardwood firewood from Foxley Wood, please
        speak to <strong>Alison</strong> (see contact info on the{" "}
        <Link to="/contact">contact</Link> page).
      </p>

      <p>
        We do request a donation because this is our only source of regular
        funds.
      </p>
      <StaticImage src="../images/firewood.jpeg" alt="Bags of firewood" />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
