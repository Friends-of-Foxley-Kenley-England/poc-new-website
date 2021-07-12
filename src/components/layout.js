import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"

const Layout = ({ location, title, children }) => {

  const data = useStaticQuery(graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                    menuLinks {
                      name
                      link
                    }
              }
            }
          }
        `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Header className="header-link-home" menuLinks={data.site.siteMetadata.menuLinks} siteTitle={title} />
    )
  } else {
    header = (
      <Header className="header-link-home" menuLinks={data.site.siteMetadata.menuLinks} siteTitle={title} />
    )
  }

  return (
    <div className="layout">
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <footer style={{bottom: "auto"}}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" style={{color: "white"}}>Gatsby</a>
      </footer>
    </div>

  )
}

export default Layout
