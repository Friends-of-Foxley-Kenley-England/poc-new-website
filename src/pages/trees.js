import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TreesIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="trees" />
      <h1>Trees of Foxley Wood</h1>
    
      <p>
        Here are the most prominent trees that make Foxley Wood such a special Local Nature Reserve.
        We will be adding links and information pages for the various species over the coming weeks and months.
      </p>

      <ul>
          <li><Link to="/trees/english-oak">English Oak</Link></li>
          <li>Beech</li>
          <li>Ash</li>
          <li>Sycamore</li>
          <li>Juniper</li>
          <li>Hazel</li>
          <li>Wych Elm</li>
          <li>Yew</li>
          <li>Hornbeam</li>
          <li>Whitebeam</li>
          <li>Holly</li>
      </ul>
    </Layout>
  )
}

export default TreesIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
