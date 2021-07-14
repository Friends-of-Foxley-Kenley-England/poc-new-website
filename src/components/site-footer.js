import React from "react"
import * as style from "./site-footer.module.css"

const SiteFooter = () => (
    <footer className={style.siteFooter}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" className={style.gatsbyLink}>Gatsby</a>
    </footer>
)

export default SiteFooter;