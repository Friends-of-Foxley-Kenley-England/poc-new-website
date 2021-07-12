import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as style from "./layout.module.css"
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
      <Header className={style.headerLinkHome} menuLinks={data.site.siteMetadata.menuLinks} siteTitle={title} />
    )
  } else {
    header = (
      <Header className={style.headerLinkHome} menuLinks={data.site.siteMetadata.menuLinks} siteTitle={title} />
    )
  }

  return (
    <div className={style.layout}>
      <header className={style.globalHeader}>{header}</header>
      <div className={style.globalWrapper} data-is-root-path={isRootPath}>
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
