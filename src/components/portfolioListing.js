import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from 'gatsby-image'
import styled from 'styled-components'

const PORTFOLIO_QUERY = graphql`
query BlogPostListing {
    allMarkdownRemark(limit: 6) {
        edges {
            node {
                excerpt
                frontmatter {
                    slug
                    title
                    summary
                    color
                    featuredImage {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                            	...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
}`

const Listing = styled.div `
	background-color: #333;
	@media (min-width: 768px){
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1200px){
		grid-template-columns: repeat(3, 1fr);
	}
`

const ContentBox = styled.div `
	background-color: rgba(0,0,0,0.85);
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	opacity: 0;
	text-align: center;
	transition: opacity 0.25s ease-in-out;
	padding: 5%;
	z-index: 2;

	a {
		color: inherit;
		display: inline-block;
		border: solid 1px;
		line-height: 1em;
		padding: 0.5em 1em;
		text-decoration: none;

		&:hover {
			background-color: #fff;
			color: #000;
		}
	}
`

const ListingItem = styled.div`
	position: relative;
	&:hover ${ContentBox} { opacity: 1; }
`

const ImageBox = styled.div `
	background: ${props => props.color[0]};
	background: linear-gradient(156deg, ${props => props.color[0]} 0%, ${props => props.color[1]} 100%);
	min-height: 100%;
	padding: 10%;
	> * {
		box-shadow: 0px 5px 25px rgba(0,0,0,0.15);
	}
`
    
export default () => {
	
	return (
		<Listing>
			<StaticQuery
				query={ PORTFOLIO_QUERY }
				render={ ({ allMarkdownRemark }) =>
					allMarkdownRemark.edges.map(({ node }, i) => {
						const { slug, title, summary, featuredImage, color } = node.frontmatter;
						const image = featuredImage ? <Img fluid={ featuredImage.childImageSharp.fluid } /> : '';
						console.log(color[1]);
						return (
							<ListingItem key={slug}>
								<ContentBox>
								<h3>{title}</h3>
								<p>{summary}</p>
								<p><AniLink hex={color[1]} paintDrip to={`/portfolio${node.frontmatter.slug}`}>Read More</AniLink></p>
								</ContentBox>
								<ImageBox color={color}>
									<div data-sal="slide-up" data-sal-delay={300+(150*i)} data-sal-easing="ease">
										{ image }
									</div>
								</ImageBox>
							</ListingItem>
						)
					})
				}
			/>
		</Listing>
	)
}