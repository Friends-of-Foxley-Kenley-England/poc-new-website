import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {What3wordsAddress} from "@what3words/react-components"

const HomeIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title={siteTitle}/>
        <h1>{siteTitle}</h1>
        <p>
          Volunteer group helping to manage the Foxley woods in Kenley, Surrey. 
        </p>
        <What3wordsAddress words="tune.then.global" icon-color="#0e4630" text-color="#0e4630" tooltip-location="entrance at Burwood Avenue"/>


        <h2> How can I help?</h2>
        <p>
          If you enjoy fresh air and light exercise come and help us look after the Foxley 
          Wood Nature Reserve located on the Purley/Kenley borders in Surrey.
        </p>
        <p>
          The Friends of Foxley meet on the second Sunday of each month (except November when 
          we meet on the third Sunday) and the last Wednesday of each month (except December).
        </p>
        <p>Go to <Link to="/work-days">Work Days</Link> to see the work we are planning in Foxley Wood this month and where we will meet.</p>
        <p>
          All are welcome and any time you can give on the day will be most appreciated. 
          Tools and equipment are provided, but please wear appropriate clothes and footwear 
          and bring your own refreshments.
        </p>
        <p>Also follow us on Facebook - click the Facebook logo to find us. </p>
        <p>
          Being a Friends of Foxley volunteer does not necessarily mean doing physical work, 
          recorders of wildlife and people with skills in fund raising, advertising, IT 
          and liaising are equally vital to the group and the conservation of Foxley Wood. 
          If you would like to become a member of the Friends of Foxley without any obligation 
          please download our membership form.
        </p>
        <p>
          <a href="http://www.friendsoffoxley.co.uk/pages/firewood.html" target="_blank" rel="noopener noreferrer">Firewood</a>: 
          excellent value firewood 
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
