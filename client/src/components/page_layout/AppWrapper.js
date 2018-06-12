import { FlexColumnCenter } from './FlexLayout.js';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

export const AppWrapper = FlexColumnCenter.extend`
  font-family: 'Titillium Web', sans-serif;
`