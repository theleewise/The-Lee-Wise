import React from 'react'
import Img from 'gatsby-image'
import PropsTypes from "prop-types"
import styled from 'styled-components'
// import Slide from 'react-reveal/Slide';
import Container from './container'

const SplitWrapper = styled.div`
    align-items: stretch;
    background-color: #eee;
    background: linear-gradient(45deg, #fff, #ddd);
    display: flex;
    flex-direction: ${props => props.flip ? 'row-reverse' : 'row'}; 
    flex-wrap: wrap;
    
    > * {
        flex: 1 0 100%;
        
        @media (min-width: 640px){
            flex: 1;
        }
    }
`
    
const SplitImage = styled.div`
    clip-path: polygon(${props => props.flip ? 
        '0 0, 100% 0, 100% 100%, 23% 100%'
        : '0 0, 77% 0, 100% 100%, 0% 100%'
    });

    > * {
        height: 100%;
    }
`

const SplitBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-bottom: 6rem;
    padding-top: 6rem;
    s
    > * {
        @media(min-width: 640px) {
            margin-${props => props.flip ? 'right' : 'left'}: 0;
            padding-${props => props.flip ? 'right' : 'left'}: 60px;
        }
    }
`

const SplitHeading = styled.h2`
    color: var(--primary-color);
`

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
    image: PropsTypes.object.isRequired,
    flip: PropsTypes.bool,
}

export default Split;