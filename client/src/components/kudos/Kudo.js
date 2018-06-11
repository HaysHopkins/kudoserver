import React from 'react';
import { FlexColumnCenter } from '../page_layout/FlexLayout.js'

const KudoWrapper = FlexColumnCenter.extend`
  border: solid;
  border-width: 1px;
  padding: 10px;
`
const Kudo = ({text, giver, created_at}) => {
 return <KudoWrapper>
            "{text}" -{giver} ({created_at})
        </KudoWrapper>;
}

export default Kudo;