import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as style from "./site-header.module.css"
import HamburgerMenu from '../../static/hamburger-menu.inline.svg'

const SiteHeader = ({ siteTitle, menuLinks }) => (
  <header className={style.navHeader}>
    <div className={style.navigationBar}>
      {/* <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1> */}
      <nav>
        {menuLinks.map(link => (
          <Link to={link.link}>
            {link.name}
          </Link>
        ))}
        <a className={style.hamburgerMenu}><HamburgerMenu /></a>
      </nav>
    </div>
  </header>
)

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader;