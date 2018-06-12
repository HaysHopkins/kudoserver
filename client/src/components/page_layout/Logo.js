import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  background-color: #FFFAF0;
  border-radius: 20px;
  margin-right: 15px;
`

export const Logo = () => {
  return <StyledImage src="./kudos.png" />
}
