import React from 'react';
import styled from 'styled-components';
import { FlexLayout } from "./FlexLayout.js";

const HeaderWrapper = FlexLayout.extend`
  width: 100%;
  background-color: #333333;
  padding-top: 20px;
  padding-left: 20px;
  height: 100px;
`
const LinkWrapper = styled.a``
const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 2px;
`
const Title = styled.div `
  font-size: 36px;
  font-family: proxima-nova;
  color: #FFFAF0;
`
const Header = () => {
  <HeaderWrapper>
    <LinkWrapper href="/stacks">
      <StyledImage src="" />
    </LinkWrapper>
    <LinkWrapper href="/stacks" style={{textDecoration: "none"}}>
      <Title>Kudoserver</Title>
    </LinkWrapper>
  </HeaderWrapper>
}

export default Header;
