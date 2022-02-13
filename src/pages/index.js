import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <p>
        The Friends Of Foxley are a volunteer group which manages Foxley Wood in
        Kenley, Surrey, on behalf of and in partnership with Croydon Council.
      </p>
      <h2> How can I help?</h2>
      <p>
        If you enjoy fresh air and light exercise come and help us look after
        the Foxley Wood Local Nature Reserve located on the Purley/Kenley
        borders in Surrey.
      </p>
      <p>
        Go to <Link to="/work-days">Work Days</Link> to see the work we are
        planning in Foxley Wood this month and where we will meet.
      </p>
      <p>
        All are welcome and any time you can give on the day will be most
        appreciated. Tools and equipment are provided, but please wear
        appropriate clothes and footwear and bring your own refreshments.
      </p>
      <p>
        Being a Friends of Foxley volunteer does not necessarily mean doing
        physical work, recorders of wildlife and people with skills in fund
        raising, advertising, IT and liaising are equally vital to the group and
        the conservation of Foxley Wood. If you would like to become a member of
        the Friends of Foxley without any obligation please download our
        membership form.
      </p>
      <p>
        <Link to="/firewood">Firewood</Link>: excellent value firewood
      </p>
    </Layout>
  );
};

export default HomeIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
