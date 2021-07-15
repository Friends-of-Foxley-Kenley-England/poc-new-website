import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as style from "./site-header.module.css"

const SiteHeader = ({ siteTitle, menuLinks }) => (
  <header >

    <nav id="navbar" className={style.navigationBar}>

      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />   

      <div id="navlinks" className={style.navigationLinks}>
        {menuLinks.map(link => (
          <Link to={link.link}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>

  </header>
)

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader;