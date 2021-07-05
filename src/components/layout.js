import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import {Header} from "../components/header"

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
      // <h1 className="main-heading">
      //   <Link to="/">{title}</Link>
      // </h1>
      <Header className="header-link-home" menuLinks={data.site.siteMetadata.menuLinks} siteTitle={title} />
    )
  } else {
    header = (
      // <Link className="header-link-home" to="/">
      //   {title}
      // </Link>
      <Header className="header-link-home" menuLinks={data.site.siteMetadata.menuLinks} siteTitle={title} />
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
