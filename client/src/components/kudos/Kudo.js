import React from 'react';
import { FlexStart } from '../page_layout/FlexLayout.js';

const KudoWrapper = FlexStart.extend`
  border: solid;
  border-width: 1px;
  padding: 10px;
  word-wrap: break-word;
`
const Kudo = ({text, giver, given_at}) => {
 const KudoString = `"${text}" -${giver} (${given_at})`

 return <KudoWrapper>
          {KudoString}
        </KudoWrapper>;
}

export default Kudo;