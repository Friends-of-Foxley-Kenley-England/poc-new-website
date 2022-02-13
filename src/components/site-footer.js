import React from "react";
import * as style from "./site-footer.module.css";
import ExternalLink from "./external-link";
import { StaticImage } from "gatsby-plugin-image";

const SiteFooter = () => (
  <footer className={style.siteFooter}>
    <StaticImage
      src="../images/facebook/FindUs-FB-RGB-Wht.svg"
      alt="find us on facebook"
      className={style.facebookImage}
      loading="lazy"
      objectFit="contain"
      placeholder="tracedSVG"
    />

    <span className={ style.builtBy }>
      © {new Date().getFullYear()}, Built with
      {` `}
      <ExternalLink
        href="https://www.gatsbyjs.com"
        className={style.footerLink}>
        Gatsby
      </ExternalLink>
      {` `}
      by{" "}
      <ExternalLink
        href="https://github.com/eloisetaylor5693"
        className={style.footerLink}>
        Eloise Taylor
      </ExternalLink>
    </span>
  </footer>
);

export default SiteFooter;
