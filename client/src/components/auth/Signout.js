import React from 'react';
import Button from '@material-ui/core/Button';
import { AuthenticationService } from '../auth/AuthenticationService';
import { FlexEnd } from '../page_layout/FlexLayout.js';

const ButtonWrapper = FlexEnd.extend`
  height: 40px;
  margin-top: 10px;
  background-color: #FFFAF0;
  border-radius: 20px;
`

export default class Signout extends React.Component {

  onLogOut = () => {
    AuthenticationService.logout(() => window.location.href = '/');
  }

  getLogoutButton = () => {
    const loggedIn = AuthenticationService.isAuthenticated();
    
    if (loggedIn) {
      return <Button color="primary" onClick={this.onLogOut}>Log out</Button>   
    }
  }

  render() {
    return (
      <ButtonWrapper>
        {this.getLogoutButton()}
      </ButtonWrapper>
    )
  }
}

