import React from "react"
import * as style from "./site-footer.module.css"

const SiteFooter = () => (
    <footer >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" className={style.gatsbyLink}>Gatsby</a>
    </footer>
)

export default SiteFooter;