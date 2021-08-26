import * as React from "react"

const ExternalLink = ({ href, className, children }) => {

    return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
    )
}

export default ExternalLink
