import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as style from "./header.module.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className={style.navHeader}>
    <div>
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
        <div>
          <nav>
            <ul className={style.navigationLinks}>
              {menuLinks.map(link => (
                <li key={link.name} className={style.navigationLinkArea}>
                  <Link className={style.navigationLink} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;