import React from 'react';
import User from './User.js';
import Kudo from '../kudos/Kudo.js';
import GiveKudo from '../kudos/GiveKudo.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ApiRequester } from '../utilities/ApiRequesterService.js';

export default class UserContainer extends React.Component {
  state = {
    kudos: [],
    givingKudo: false,
  }

  loadKudos = () => {
    if (this.state.kudos.length === 0) {
      ApiRequester.get(`users/${this.props.user.id}/kudos`).then((resp) => {
        this.setState({kudos: resp.data});
      });
    } else {
      this.setState({kudos: []});
    }
  }

  giveKudo = () => {
    this.setState({givingKudo: true, });
  }

  givingKudo = () => {
    return this.state.givingKudo ? 
      <GiveKudo onSubmit={this.createKudo.bind(this)} onCancel={this.cancelKudo.bind(this)} /> : null;
  }

  createKudo = (kudo) => {
    ApiRequester.post(`kudos`, {giver_id: 1, receiver_id: this.props.user.id, text: kudo}).then(() => {
      this.setState({givingKudo: false});
    });
  }

  cancelKudo = () => {
    this.setState({givingKudo: false});
  }

  render() {
    let kudos = this.state.kudos.map( kudo => <Kudo key={kudo.id} {...kudo} />);

    return (
      <List>
        <User user={this.props.user} onLoadKudos={this.loadKudos.bind(this)} onGiveKudos={this.giveKudo.bind(this)}/>
        {this.givingKudo()}
        {kudos}
      </List>
    )
  }
}
