import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

export const AppWrapper = styled.div`
  font-family: 'Titillium Web', sans-serif;
`