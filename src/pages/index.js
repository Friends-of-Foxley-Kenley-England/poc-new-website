import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="Friends Of Foxley" />
        <p>
          Volunteer group helping to manage the Foxley woods in Kenley, Surrey. 
        </p>
      </Layout>
  )
}

export default HomeIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
