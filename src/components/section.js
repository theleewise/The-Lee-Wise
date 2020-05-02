import React from 'react'
import styled from 'styled-components'
import Container from "./container"

const SectionWrapper = styled.div`
    ${props => props.fill ? `text-align: center;` : ``}
    ${props => props.fill ? `
        background-color: #243a3e;
        padding-bottom: 9rem;
        padding-top: 9rem;
    ` : `
        margin-bottom: 9rem;
        margin-top: 9rem;
    `}
`

const SectionHeading = styled.h2`
    color: var(--primary-color);
    font-size: 3.3rem;
    font-weight: 300;z
    text-align: center;
    line-height: 1em;
    margin: 0 0 6rem 0;

    margin-bottom: ${props => props.bffs ? '0' : '' };
    + * {
        margin-top: ${props => props.bffs ? '0' : '' };
    }
`
const SectionSubHeading = styled.p `
    font-size: 2.2rem;
    font-weight: 100;
    line-height: 2em;
`

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