import React from "react"
import Container from './container'
import styled from 'styled-components'
import SocialLinks from './socialLinks'

const socials = [
    {name:'linkedin', link: 'https://www.linkedin.com/in/lee-wise/'},
    {name:'github', link: 'https://github.com/theleewise'},
    {name:'stackoverflow', link: 'https://stackoverflow.com/users/800317/lee-wise'},
    {name:'twitter', link: 'https://twitter.com/theleewise'}
];

const Footer = () => {
    return (
        <FooterWrapper>
            <div id="contact"></div>
            <Container gutter>
                <SocialLinks items={socials} />
            </Container>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    background-color: #333;
    background: linear-gradient(45deg, #333, #111);
    color: #ddd;
    padding: 1.5rem;
    text-align: center;
    // min-height: calc(100vh - 6rem);
`

export default Footer