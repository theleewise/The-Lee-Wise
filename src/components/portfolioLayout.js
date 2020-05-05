import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Icons from '../images/icons.svg';
import Container from './container'
import Button from './button'

const portfolioLayout = (props) => {
    const { markdownRemark } = props.data;
    const { featuredImage, title, link, intro, color, stack, video, extra } = markdownRemark.frontmatter;
    const image = featuredImage ? <Img fluid={ featuredImage.childImageSharp.fluid } /> : '';

    return (
        <Wrapper bg={color[1]}>
            <Icons />
            <Container gutter>
                <Title data-text={title}>{title}</Title>
                <div>{image}</div>
                <p>{intro}</p>
                { stack ? (
                    <React.Fragment>
                        <h3>Tech Used:</h3>
                        <IconsList>
                            { stack.map(item => (
                                <li key={item}>
                                    <span>
                                        <svg viewBox="0 0 128 128">
                                            <use xlinkHref={`#${item.toLowerCase()}`} />    
                                        </svg>
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </IconsList>
                        {extra ? (
                            <ul>{extra.map(item => <li key={item}>{item}</li>)}</ul>
                        ) : `` }
                    </React.Fragment>
                ) : '' }
                { link ? <p><Button to={ link } newWindow>Visit Website</Button></p> : '' }

                
                <VideoWrapper>
                    <Container gutter>
                        <Row>
                            <Col>
                                {video ? (
                                    <video muted loop autoPlay>
                                        <source src={`${video.publicURL}`} type="video/mp4" />
                                    </video>
                                ) : `` }
                            </Col>
                            <Col>
                                <h3>Lorem Ipsum</h3>
                                <p>Qui fugiat fugiat et enim incididunt exercitation. Do aute aute consequat esse sit cillum enim ex laborum cupidatat. Ex est qui occaecat nulla irure do reprehenderit fugiat. Occaecat consequat cillum aliquip id voluptate sint exercitation aute dolor occaecat velit enim. Irure deserunt ullamco esse voluptate aliquip voluptate do ut elit tempor pariatur. Dolore excepteur enim veniam et aliqua ut ut anim irure irure nulla minim. Non reprehenderit ex dolor tempor eiusmod irure ad dolore do non excepteur ea pariatur aliqua.</p>
                            </Col>
                        </Row>
                    </Container>
                </VideoWrapper>

                <BackLink><Button to={`/#experience`} animate>Back</Button></BackLink>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: { eq: $slug }
        }) {
            html
            frontmatter {
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                slug
                link
                color
                stack
                intro
                extra
                video {
                    publicURL
                }
            }
        }
    }
`

const Wrapper = styled.div `
    background-color: ${props => props.bg };
    color: #fff;
    min-height: 100vh;
    position: relative;
    padding: 1px 0;
`

const BackLink = styled.div`
    left: 3rem;
    position: fixed;
    top: 3rem;
`

const Title = styled.h1 `
    font-size: 7.5rem;
    line-height: 1.1em;
    margin: 20rem 0 10rem 0;
    position: relative;
    text-align: right;
    
    &:before {
        content:attr(data-text);
        color: rgba(255,255,255,0.05);
        display: block;
        font-size: 20rem;
        line-height: 1em;
        position: fixed;
        top: 10rem;
        right: -10vw;
        white-space: nowrap;
    }

    + * { position: relative; }
`

const IconsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-size: 5rem;
    margin: 0;
    padding: 0;
    
    li {
        list-style-type: none;
        margin: 0 1rem;
        text-align: center;
    }
    
    span:nth-child(1){
        background-color: rgba(255,255,255,0.65);
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
        line-height: 0;
        padding: 1rem;
    }
    span:nth-child(2){
        display: block;
        font-family: 'Oswald', sans-serif;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1em;
        margin-top: 1em;
        opacity: 0.5;
        text-transform: uppercase;
    }

    svg {
        height: 1em;
        width: 1em;
    }
`

const VideoWrapper = styled.div`
    background: #eee;
    background: linear-gradient(156deg, #eee 0%, #aaa 100%);
    color: #333;
    left: 50%;
    margin-top: 9rem;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 9rem 0;
    position: relative;
    right: 50%;
    width: 100vw;
    
    video {
        box-shadow: 0px 5px 25px rgba(0,0,0,0.15);
        width: 100%;
    }
`

const Row = styled.div`
    align-items: center;
    display: flex;
`

const Col = styled.div`
    flex: 1 0 50%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`

export default portfolioLayout;