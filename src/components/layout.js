import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as style from "./layout.module.css"
import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"

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
  let siteHeader

  if (isRootPath) {
    siteHeader = (
      <SiteHeader 
          className={style.headerLinkHome} 
          menuLinks={data.site.siteMetadata.menuLinks} 
          siteTitle={title} />
    )
  } else {
    siteHeader = (
      <SiteHeader 
          className={style.headerLinkHome} 
          menuLinks={data.site.siteMetadata.menuLinks} 
          siteTitle={title} />
    )
  }

  return (
    <div className={style.layout}>
      <header className={style.globalHeader}>{siteHeader}</header>
      <div className={style.globalWrapper} data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <SiteFooter/>
    </div>

  )
}

export default Layout
