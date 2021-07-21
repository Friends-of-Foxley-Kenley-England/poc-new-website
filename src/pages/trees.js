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
          <li><a href="https://en.wikipedia.org/wiki/Beech" target="_blank" rel="noopener noreferrer">Beech</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Fraxinus" target="_blank" rel="noopener noreferrer">Ash</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Sycamore" target="_blank" rel="noopener noreferrer">Sycamore</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Juniper" target="_blank" rel="noopener noreferrer">Juniper</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Hazel" target="_blank" rel="noopener noreferrer">Hazel</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Ulmus_glabra" target="_blank" rel="noopener noreferrer">Wych Elm</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Yew" target="_blank" rel="noopener noreferrer">Yew</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Hornbeam" target="_blank" rel="noopener noreferrer">Hornbeam</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Whitebeam" target="_blank" rel="noopener noreferrer">Whitebeam</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Holly" target="_blank" rel="noopener noreferrer">Holly</a></li>
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
