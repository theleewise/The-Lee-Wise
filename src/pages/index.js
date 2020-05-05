import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import PortfolioListing from "../components/portfolioListing"
import Split from "../components/split"
import ColorPicker from "../components/colorPicker"
import Icons from '../images/icons.svg';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
  const speakingImage = useStaticQuery(graphql`
    query test {
      file(relativePath: { eq: "speaking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).file.childImageSharp.fluid;
  
  const tech = [`sass`, `less`, `jquery`, `react`, `php`, `node`, `grunt`, `gulp`, `git`, `github`, `gatsby`,`drupal`, `wordpress`, `dnn`, `photoshop`, `illustrator`, `xd`, `sketch`];

  const sliderSettings = {
    infinite: true,

    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    slidesToShow: 10,
    responsive: [
      {
      breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };
    
  return (
    <Layout>
      <Icons />
      <SEO title="Home" />

      <Hero />

      <div style={ {height: '60px'} }></div>
      <div id="experience"></div>
      <Section
        heading={`Experience`}
        subheading = {
          `Coding for over 20 years! Yeah, you read that write.`
        }
      >
         <p>
           I
          know you're thinking "This guy looks too young for that to be true!",
          but it is.
        </p>
        <p>
          That's because even before I was doing this professionally I was
          coding way back in highschool just because that's how much I love
          front end development!
        </p>
      </Section>

      <PortfolioListing />

      <div id="tech"></div>
      <Section
        heading={`Favorite Technology`}
        subheading={`These technologies are my bread and butter!`}
      >
        <PrimaryTech>
          {['html','css','javascript'].map(item => (
            <li key={item}>
              <svg viewBox="0 0 128 128">
                <use xlinkHref={`#${item}`} />
              </svg>
            </li>
          ))}
        </PrimaryTech>
        
        <p className="text-center lead">Here are a bunch more that I really like to use</p>

        <Slider {...sliderSettings}>
          {tech.map(item => (
            <div key={item}>
              <svg height="5em" width="5em" viewBox="0 0 128 128">
                  <use xlinkHref={`#${item}`}></use>
              </svg>
            </div>
          ))}
        </Slider>
      </Section>

      <div id="speaking"></div>
      <Split heading={`Speaking & Training`} image={speakingImage}>
        <p>
          I love all aspects of front end development and that includes talking
          about it and teaching others.
        </p>
        <p>I 've spoken at 2 international conferences and 6 national onces</p>
        <p>
          I also know that I didn 't get where I am all alone but rather from
          the help and guidance of others so I'm passionate about doing the same
          for others
        </p>
        <p>
          I have extensive experience with training and guiding juinor
          developers.
        </p>
      </Split>

      <ColorPicker />
    </Layout>
  )
}

export default IndexPage


const PrimaryTech = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 6rem 0;
  justify-content: space-around;
  padding: 0;

  li {
    background-color: #eee;
    border: solid 1rem #fafafa;
    border-radius: 50%;
    list-style-type: none;
    line-height: 0;
    margin: 1.5rem auto;
    padding: 1rem;
    @media (min-width: 768px){
      overflow: hidden;
      padding: 6rem;
    }
  }

  svg {
    height: 30vw;

    @media (min-width: 768px){
      height: 15rem;
    }
    @media (min-width: 1200px){
      height: 20rem;
    }
  }
`