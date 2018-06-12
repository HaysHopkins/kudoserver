import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Logo } from '../page_layout/Logo.js';

const UserWrapper = styled.div`
  display: flex;
  width: 100%;
  border: solid;
  border-width: 1px;
`;
const UserInfoColumn = styled.div`
  width: 90%;
  margin-right: 20px;
`;
const UserDatum = styled.div`
  width: 125px;
  margin: 10px 30px;
  display: inline-block;
`

export default class User extends React.Component {
  render() {
    return (
      <UserWrapper>

        <UserInfoColumn onClick={this.props.onLoadKudos}>
          <UserDatum>User:<br/> {this.props.user.first_name + " " + this.props.user.last_name}</UserDatum>
          <UserDatum>Kudos Given:<br/> {this.props.user.kudos_given_count || 0}</UserDatum>
          <UserDatum>Kudos Received:<br/> {this.props.user.kudos_received_count || 0}</UserDatum>
        </UserInfoColumn>

        <Button variant="outlined" color="primary" onClick={this.props.onGiveKudos}>
          Give Kudo!
        </Button>

      </UserWrapper>
    )
  } 
}