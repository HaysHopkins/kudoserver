import React from 'react';
import styled from 'styled-components';
import { FlexAround } from './FlexLayout.js';
import { Logo } from './Logo.js';
import Signout from '../auth/Signout.js';

const HeaderWrapper = FlexAround.extend`
  width: 100%;
  background-color: #333;
  padding-top: 40px;
  height: 100px;
`
const LinkWrapper = styled.a`
  text-decoration: none;
`
const Title = styled.span `
  font-size: 36px;
  font-family: proxima-nova;
  color: #FFFAF0;
`

const Header = () => {
  return <HeaderWrapper>
           <LinkWrapper href="/users">
             <Logo />
             <Title>kudoserver</Title>
           </LinkWrapper>
           <Signout />
         </HeaderWrapper>
}

export default Header;
