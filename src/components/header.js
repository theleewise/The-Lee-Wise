import React from "react"
import { useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import styled from 'styled-components'
import Container from './container'
import Sticky from './sticky'

const Header = () => {
  
  const data = useStaticQuery(
    graphql `
        query SiteMetaData {
          site {
            siteMetadata {
              menuLinks {
                name
                url
              }
            }
          }
        }
      `
  );
  
  const navLinks = data.site.siteMetadata.menuLinks;

  return (
    <Sticky scrollPoint={300}>
      <HeaderWrapper>
        <Container gutter>
          <nav>
            <NavLinks>
              {navLinks.map(link => (
              <NavItem key={link.url}>
              <AnchorLink to={link.url}>
                {link.name}
              </AnchorLink>
            </NavItem>
          ))}
            </NavLinks>
          </nav>
        </Container>
      </HeaderWrapper>
    </Sticky>
  )
}

export default Header

const HeaderWrapper = styled.header `
  background-color: transparent;
  font-size: 2rem;
  left: 0;
  padding: 3rem 0;
  position: absolute;
  transition: background-color 0.25s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 11;

  .is-sticky & {
    background-color: var(--primary-color);
    font-size: 1.6rem;
    padding: 1.5rem 0;
    position: fixed;
    z-index: 9;
  }
`

const NavLinks = styled.ul `
  display: flex;
  font-family: 'Oswald', sans-serif;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  text-transform: uppercase;
  padding: 0;

  a {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: rgba(255,255,255,1);
    }
  }
`

const NavItem = styled.li `
margin: 0 1.5rem;
`