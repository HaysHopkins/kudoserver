import React from 'react';
import { Kudo } from './Kudo.js';

export default class Kudos extends React.Component {
  render() {
    let kudos = this.props.kudos.map( kudo => <Kudo {...kudo} />);
    
    return(
        {kudos}
    )
  }
}