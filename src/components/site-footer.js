import React from "react"
import * as style from "./site-footer.module.css"

const SiteFooter = () => (
    <footer className={style.siteFooter}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com" className={style.footerLink}  target="_blank" rel="noopener noreferrer">Gatsby</a>
        {` `}
        by <a href="https://github.com/eloisetaylor5693" className={style.footerLink}  target="_blank" rel="noopener noreferrer">Eloise Taylor</a>
    </footer>
)

export default SiteFooter;