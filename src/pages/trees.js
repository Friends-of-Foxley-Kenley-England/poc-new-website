import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ExternalLink from "../components/external-link";

const TreesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="trees" />
      <h1>Trees of Foxley Wood</h1>

      <p>
        Here are the most prominent trees that make Foxley Wood such a special
        Local Nature Reserve. We will be adding links and information pages for
        the various species over the coming weeks and months.
      </p>

      <ul>
        <li>
          <Link to="/trees/english-oak">English Oak</Link>
        </li>
        <li>
          <Link to="wych-elm">Wych Elm</Link>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Beech">
            Beech
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Fraxinus">
            Ash
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Sycamore">
            Sycamore
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Juniper">
            Juniper
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Hazel">
            Hazel
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Yew">
            Yew
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Hornbeam">
            Hornbeam
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Whitebeam">
            Whitebeam
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://en.wikipedia.org/wiki/Holly">
            Holly
          </ExternalLink>
        </li>
      </ul>
    </Layout>
  );
};

export default TreesIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
