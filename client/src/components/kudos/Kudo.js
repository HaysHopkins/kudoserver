import React from 'react';
import { FlexStart } from '../page_layout/FlexLayout.js';

const KudoWrapper = FlexStart.extend`
  border: solid;
  border-width: 1px;
  padding: 10px;
`
const Kudo = ({text, giver, given_at}) => {
 let kudoString = `"${text}" -${giver} (${given_at})`

 return <KudoWrapper>
          {kudoString}
        </KudoWrapper>;
}

export default Kudo;