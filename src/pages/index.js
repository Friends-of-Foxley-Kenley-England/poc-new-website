import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {What3wordsAddress} from "@what3words/react-components"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="Friends Of Foxley" />
        <p>
          Volunteer group helping to manage the Foxley woods in Kenley, Surrey. 
        </p>
        <What3wordsAddress words="tune.then.global" icon-color="#3CABAA" tooltip-location="entrance at Burwood Avenue"/>
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
