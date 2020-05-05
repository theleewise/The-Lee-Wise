import React from 'react'
import styled from 'styled-components'
import DogMp4 from "../images/hero-video.mp4"

const Hero = (props) => {
    return (
        <HeroWrapper>
            <HeroVideo>
                <video muted loop autoPlay>
                    <source src={DogMp4} type="video/mp4" />
                    {/* <source src={DogOgg} type="video/ogg" /> */}
                </video>
            </HeroVideo>
            <HeroContent>
                <HeroTitle>Hey, I'm Lee</HeroTitle>
                <HeroSubTitle>I'm a <span>Front End</span> Guy</HeroSubTitle>
            </HeroContent>
            <HeroMore>Don't Go There's More</HeroMore>
        </HeroWrapper>
    )
}

export default Hero;

const HeroWrapper = styled.div `
    background-color: var(--primary-color);
    height: 100vh;
    overflow: hidden;
    position: relative;
    transition: background-color 0.25s ease-in-out;
    width: 100%;
    z-index: 10;
`
const HeroVideo = styled.div `
    video {
        bottom: 0;
        filter: brightness(1.1);
        height: auto;
        mix-blend-mode: multiply;
        position: absolute;
        right: -10%;
        width: 120%;

        @media (min-width: 768px) {
                background: url(../videos/hero-fallback.jpg) no-repeat;
                background-size: cover;
                bottom: unset;
                height: auto;
                min-height: 100%;
                -ms-transform: translateX(0) translateY(-50%);
                -moz-transform: translateX(0) translateY(-50%);
                -webkit-transform: translateX(0) translateY(-50%);
                top: 50%;
                transform: translateX(0) translateY(-50%);
                width: auto;
            }
    }
`
const HeroContent = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 2;

    @media(max-width: 599px) {
        padding-top: 20vh;
    }

    @media (max-width: 767px){
        align-items: center;
    }

    @media(min-width: 600px){
        justify-content: center;
    }

    @media (min-width: 1200px) {
        margin-left: calc((100% - 1200px) / 2);
        width: 600px;
    }
`
const HeroTitle = styled.h1 `
    color: rgba(0,0,0,0.5);
    margin: 0 0 0.25em 0;
    font-size: 18vw;
    line-height: 1.1em;
    margin: 0;
    text-transform: uppercase;

    @media (min-width: 768px){
        font-size: 12rem;
    }
`
const HeroSubTitle = styled.p `
    color: rgba(255,255,255,0.5);
    margin: 0;
    
    font-size: 7.5vw;
    line-height: 1.1em;
    
    @media (min-width: 768px){
        font-size: 5rem;
    }

    span {
        font-weight: 900;
    }
`
const HeroMore = styled.div ``