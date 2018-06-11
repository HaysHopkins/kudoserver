import React from 'react';
import styled from 'styled-components';
import { FlexLayout } from "./FlexLayout.js";

const HeaderWrapper = FlexLayout.extend`
  width: 100%;
  background-color: #333;
  padding-top: 40px;
  padding-left: 40px;
  height: 100px;
`
const LinkWrapper = styled.a``
const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  background-color: #FFFAF0;
  border-radius: 20px;
  margin-right: 15px;
`
const Title = styled.div `
  font-size: 36px;
  font-family: proxima-nova;
  color: #FFFAF0;
`
const Header = () => {
  return <HeaderWrapper>
           <LinkWrapper href="/users">
             <StyledImage src="./kudos.png" />
           </LinkWrapper>
           <LinkWrapper href="/users" style={{textDecoration: "none"}}>
             <Title>kudoserver</Title>
           </LinkWrapper>
         </HeaderWrapper>
}

export default Header;
