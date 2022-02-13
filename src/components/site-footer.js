import React from "react";
import * as style from "./site-footer.module.css";
import ExternalLink from "./external-link";

const SiteFooter = () => (
  <footer className={style.siteFooter}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <ExternalLink href="https://www.gatsbyjs.com" className={style.footerLink}>
      Gatsby
    </ExternalLink>
    {` `}
    by{" "}
    <ExternalLink
      href="https://github.com/eloisetaylor5693"
      className={style.footerLink}>
      Eloise Taylor
    </ExternalLink>
  </footer>
);

export default SiteFooter;
