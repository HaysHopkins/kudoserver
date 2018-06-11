import React from 'react';
import User from './User.js';
import Kudo from '../kudos/Kudo.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ApiRequester } from '../utilities/apiRequesterService.js';

export default class UserContainer extends React.Component {
  state = {
    kudos: [],
    givingKudo: false,
  }

  loadKudos = () => {
    if (this.state.kudos.length === 0) {
      ApiRequester.get('kudos').then((resp) => {
        this.setState({kudos: resp.data});
      });
    } else {
      this.setState({kudos: []});
    }
  }

  giveKudos = () => {
    this.setState({givingKudo: true});
  }

  render() {
    let kudos = this.state.kudos.map( kudo => <Kudo key={kudo.id} {...kudo} />);

    return (
      <List>
        <ListItem style={{marginBottom: '0px', padding: '0px'}}>
          <User user={this.props.user} onLoadKudos={this.loadKudos.bind(this)} onGiveKudos={this.giveKudos.bind(this)}/>
        </ListItem>
        {kudos}
      </List>
    )
  }
}
