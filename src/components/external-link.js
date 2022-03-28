import * as React from "react";

const ExternalLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default React.memo(ExternalLink);
