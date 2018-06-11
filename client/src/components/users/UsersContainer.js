import React from 'react';
import List from '@material-ui/core/List';
import UserContainer from './UserContainer.js';
import { ApiRequester } from '../utilities/apiRequesterService.js';

export default class UsersContainer extends React.Component {
  state = {
    users: [],
  }

  componentDidMount = () => {
    ApiRequester.get('users').then( resp => {
      this.setState({users: resp.data});
    });
  }

  render() {
    let userContainers = this.state.users.map( user => <UserContainer key={user.id} user={user} />);
    
    return(
      <List>
        {userContainers}
      </List>
    )
  }
}