import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import styled from 'styled-components'
import Container from './container'

const HeaderWrapper = styled.header`
  background-color: transparent;
  font-size: 2rem;
  left: 0;
  padding: 3rem 0;
  position: absolute;
  transition: background-color 0.25s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 11;

  &.is-sticky {
    background-color: var(--primary-color);
    font-size: 1.6rem;
    padding: 1.5rem 0;
    position: fixed;
    z-index: 9;
  }
`

const NavLinks = styled.ul`
  color: #fff;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`

const NavItem = styled.li`
 @media (min-width: 768px){
    margin: 0 1.5rem;
 }
`

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

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
    <HeaderWrapper className={`${isSticky ? ' is-sticky' : ''}`} ref={ref}>
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
  )
}

export default Header