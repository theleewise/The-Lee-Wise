import React from 'react'
import styled from 'styled-components'
import Container from "./container"

const Section = ( { fill, center, heading, subheading, children } ) => {
    const has_subheading = typeof subheading !== undefined;

    return (
        <SectionWrapper fill={ fill } center={ center }>
            <Container gutter>
                <SectionHeading bffs={has_subheading}>{ heading }</SectionHeading>
                <SectionSubHeading>{ subheading }</SectionSubHeading>
                {children}
            </Container>
        </SectionWrapper>
    )
}

export default Section;

const SectionWrapper = styled.div `
    ${props => props.fill ? `text-align: center;` : ``}
    ${props => props.fill ? `
        background-color: #243a3e;
        padding-bottom: 12rem;
        padding-top: 12rem;
    ` : `
        margin-bottom: 12rem;
        margin-top: 12rem;
    `}
`

const SectionHeading = styled.h2 `
    color: var(--primary-color);
    font-size: 3.8rem;
    text-transform: uppercase;
    line-height: 1.1em;
    margin: 0 0 6rem 0;
    position: relative;

    &:before {
        content: '';
        display: block;
        width: 20rem;
        background: rgba(0,0,0,0.1);
        height: 1rem;
        position: absolute;left: -1.5rem;
        top: 0.85em;
        z-index: -1;
        max-width: 90%; 
    }

    margin-bottom: ${props => props.bffs ? '0' : '' };
    + * {
        margin-top: ${props => props.bffs ? '0.5em' : '' };
    }
`
const SectionSubHeading = styled.p `
    color: #666;
    font-size: 2.6rem;
    font-weight: 100;
    line-height: 1.2em;
`