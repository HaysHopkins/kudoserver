import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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
const DropDownImg = styled.img``

const renderDropDownIndicator = (expanded) => {
  if (!expanded) {
    return <DropDownImg src="./keyboard_arrow_right.svg" />
  } else {
    return <DropDownImg src="./keyboard_arrow_down.svg" />
  }
}

export const User = ({
  onLoadKudos, 
  onGiveKudos, 
  user, 
  expanded}) => {
  return <UserWrapper>
           {renderDropDownIndicator(expanded)}
           <UserInfoColumn onClick={onLoadKudos}>        
            <UserDatum>User:<br/> {user.first_name + " " + user.last_name}</UserDatum>
            <UserDatum>Kudos Given:<br/> {user.kudos_given_count || 0}</UserDatum>
            <UserDatum>Kudos Received:<br/> {user.kudos_received_count || 0}</UserDatum>
           </UserInfoColumn> 
           <Button color="primary" onClick={onGiveKudos}>
             Give Kudo!
           </Button>
         </UserWrapper>
}

User.propTypes = {
  onLoadKudos: PropTypes.func.isRequired,
  onGiveKudos: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
};

User.defaultProps = {
  expanded: false,
};