import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

export const contentfulRenderingOptions = {
  renderNode: {
    "embedded-asset-block": node => {
      const { gatsbyImageData } = node.data.target;

      if (!gatsbyImageData) {
        // asset is not an image
        return null;
      }
      console.log(node);
      console.log(gatsbyImageData.title);
      return (
        <GatsbyImage image={gatsbyImageData} alt={gatsbyImageData.title} />
      );
    },
  },
};
