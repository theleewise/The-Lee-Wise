import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Button = (props) => {
    const { to, newWindow, children, animate  } = props;
    
    if(animate) return (
        <AniLink fade to={to} style={buttonStyles}>{children}</AniLink>
    )
    return (
        <a
            href={to}
            target={ (newWindow) ? `_blank` : `` }
            rel={ (newWindow) ? `noopener noreferrer` : `` }
            style={buttonStyles}
        >
            {children}
        </a>
    )
}

const buttonStyles = {
    border: `solid 2px`,
    borderRadius: `1em`,
    color: `inherit`,
    display: `inline-block`,
    fontFamily: `'Oswald', sans-serif`,
    lineHeight: `1em`,
    padding: `0.5em 1em`,
    textDecoration: `none`,
    textTransform: `uppercase`,
};

export default Button