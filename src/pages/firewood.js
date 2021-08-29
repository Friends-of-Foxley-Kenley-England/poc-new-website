import * as React from "react";
import { graphql, Link } from "gatsby";
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
        We ask for a donation of £4.50 per bag plus an additional 50p for local
        delivery.
      </p>
      <p>
        Other than occasional donations from local people this is our only
        source of funds to help buy and maintain essential tools.
      </p>
      <p>
        Order via <strong>Carl</strong> or <strong>Alison</strong> on the{" "}
        <Link to="/contact">contact</Link> page
      </p>
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
