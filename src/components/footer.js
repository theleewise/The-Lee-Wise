import React from "react"
import Container from './container'
import Field from './field'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    background-color: #333;
    color: #ddd;
    padding: 1.5rem;


`

const Footer = () => (
    <FooterWrapper>
        <div id="contact"></div>
        <Container gutter>
            <form method="post" action="#">
                <Field label={`Name`} type={`text`} required />
                <Field label={`Email`} type={`email`} required />
                
                <div>
                    <label>
                        <span>Message</span>
                        <textarea name="message" id="message" rows="5" />
                    </label>
                </div>
                <button type="submit">Send</button>
            </form>
        </Container>
    </FooterWrapper>
)

export default Footer