import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import PortfolioListing from "../components/portfolioListing"
import Split from "../components/split"
import ColorPicker from "../components/colorPicker"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query test {
      file(relativePath: { eq: "speaking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Home" />

      <Hero />

      <Section heading={`Other Stuff`}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce rhoncus, nisl elementum dapibus laoreet, tortor odio gravida nulla, eget finibus sapien massa id purus.Cras vehicula, augue pulvinar congue pretium, nulla purus sodales velit, at tempor leo leo eget lorem.</p>
      </Section>

      <div id="tech"></div>
      <Section heading={`Favorite Technology`} subheading={`These technologies are my bread and butter!`}>
        <p>I've been using these for over 20 years! Yeah, you read that write. I know you're thinking "This guy looks too young for that to be true!", but it is.</p>
        <p>That 's because even before I was doing this professionally I was doing this even in highschool just because that's how much I love front end development!</p>
      </Section>

      <div id="experience"></div>
      <PortfolioListing />

      <div id="about"></div>
      <Split heading={`Speaking & Training`} image={data.file.childImageSharp.fluid}>
        <p>I love all aspects of front end development and that includes talking about it and teaching others.</p>
        <p>I 've spoken at 2 international conferences and 6 national onces</p>
        <p>I also know that I didn 't get where I am all alone but rather from the help and guidance of others so I'm passionate about doing the same for others</p>
        <p>I have extensive experience with training and guiding juinor developers.</p>
      </Split>

      <ColorPicker />
    </Layout>
  )
}

export default IndexPage
