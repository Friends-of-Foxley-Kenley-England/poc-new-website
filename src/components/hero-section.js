import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as style from "./hero-section.module.css";

const HeroSection = title => {
  return (
    <section className={style.container}>
      <StaticImage
        src="../images/hero-image-2.jpg"
        alt="photo of the tree canopy in Foxley woods"
        imgClassName={style.imageStyling}
        loading="eager"
        objectFit="cover"
        layout="fullWidth"
      />
      <h1 className={style.centered}>Friends of Foxley</h1>
    </section>
  );
};

export default HeroSection;
