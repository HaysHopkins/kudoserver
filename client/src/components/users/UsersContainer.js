import React from 'react';
import List from '@material-ui/core/List';
import { ApiRequester } from '../utilities/apiRequesterService.js';

export default class UsersContainer extends React.Component {
  state = {
    users: [{name: "Steve", kudos_given: 0, kudos_received: 0},
            {name: "John", kudos_given: 4, kudos_received: 2}],
  }

  componentDidMount = () => {
    ApiRequester.get("users").then( resp => {
      debugger;
      this.state.users =  resp.body;
    });
  }

  render() {
    let userContainers = this.state.users.map( user => <div>{user.first_name}</div>);
    
    return(
      <List>
        {userContainers}
      </List>
    )
  }
}