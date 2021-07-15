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
          <li><a href="https://en.wikipedia.org/wiki/Beech">Beech</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Fraxinus">Ash</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Sycamore">Sycamore</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Juniper">Juniper</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Hazel">Hazel</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Ulmus_glabra">Wych Elm</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Yew">Yew</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Hornbeam">Hornbeam</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Whitebeam">Whitebeam</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Holly">Holly</a></li>
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
