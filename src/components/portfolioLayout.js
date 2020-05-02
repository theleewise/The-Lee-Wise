import React from 'react'
import { graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from './container'

const portfolioLayout = (props) => {
    const { markdownRemark } = props.data;
    const { title, link } = markdownRemark.frontmatter;

    return (
        <Container>
            <h1>{ title }</h1>
            { link ? <p><a href={ link } target="_blank" rel="noopener noreferrer">Visit Website</a></p> : '' }
            <p><AniLink to="/#experience">Back</AniLink></p>
        </Container>
    )
}

export default portfolioLayout;


export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
               eq: $slug
            }
        }) {
            html
            frontmatter {
                title
                slug
                link
            }
        }
    }
`