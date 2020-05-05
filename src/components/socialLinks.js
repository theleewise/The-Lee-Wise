import React from 'react'
import styled from 'styled-components'

const SocialLinks = (props) => {
    return (
        <SocialLinksWrapper>
            {props.items.map(item => (
                <li key={item.name}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <svg height="2rem" width="2rem" viewBox="0 0 128 128">
                            <use xlinkHref={`#social-${item.name}`}></use>
                        </svg>
                    </a>
                </li>
            ))}
        </SocialLinksWrapper>
    )
}


const SocialLinksWrapper = styled.ul`
    display: inline-flex;
    color: var(--primary-color);
    margin: 0;
    padding: 0;
    
    li {
        background-color: var(--primary-color);
        color: #fff;
        border-radius: 50%;
        list-style-type: none;
        line-height: 0;
        margin: 0.25em;
        overflow: hidden;
    }

    a {
        display: block;
        color: inherit;
        padding: 1rem;
        text-decoration: none;
    }

    svg, g, path {
        fill: currentColor;
    }
`

export default SocialLinks;