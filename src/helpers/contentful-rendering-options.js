import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

export const contentfulRenderingOptions = {
  renderNode: {
    "embedded-asset-block": node => {
      const { gatsbyImageData, title } = node.data.target;

      if (!gatsbyImageData) {
        // asset is not an image
        return null;
      }

      return <GatsbyImage image={gatsbyImageData} alt={title} />;
    },
  },
};
