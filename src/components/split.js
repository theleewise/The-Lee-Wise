import React from 'react'
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import styled from 'styled-components'
// import Slide from 'react-reveal/Slide';
import Container from './container'

const Split = (props) => {
    return (
        <SplitWrapper flip={props.flip} secondary={props.secondary}>
            <SplitImage flip={props.flip}>
                {/* <Slide {...(props.flip ? {left: true} : {right: true})}> */}
                <Img fluid={props.image} />
                {/* </Slide> */}
            </SplitImage>
            <SplitBody flip={props.flip}>
                <Container gutter half>
                    <SplitHeading>{ props.heading }</SplitHeading>
                    {props.children}
                </Container>
            </SplitBody>
        </SplitWrapper>
    )
}

Split.propTypes = {
    image: PropTypes.object.isRequired,
    flip: PropTypes.bool,
}

export default Split;
const SplitWrapper = styled.div `
    align-items: stretch;
    background-color: #eee;
    background: linear-gradient(45deg, #fff, #ddd);
    display: flex;
    flex-direction: ${props => props.flip ? 'row-reverse' : 'row'}; 
    flex-wrap: wrap;
    
    > * {
        flex: 1 0 100%;
        
        @media (min-width: 768px){
            flex: 1;
        }
    }
`

const SplitImage = styled.div `
    @media (min-width: 768px){
        clip-path: polygon(${props => props.flip ? 
            '0 0, 100% 0, 100% 100%, 23% 100%'
            : '0 0, 77% 0, 100% 100%, 0% 100%'
        });
    }

    > * {
        height: 100%;
    }
`

const SplitBody = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-bottom: 12rem;
    padding-top: 12rem;
    s
    > * {
        @media(min-width: 768px) {
            margin-${props => props.flip ? 'right' : 'left'}: 0;
            padding-${props => props.flip ? 'right' : 'left'}: 60px;
        }
    }
`

const SplitHeading = styled.h2 `
    color: var(--primary-color);
    font-size: 3.8rem;
    line-height: 1.1em;
    text-transform: uppercase;
`