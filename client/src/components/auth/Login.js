import React from 'react';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";
import { AuthenticationService } from './AuthenticationService';
import { Logo } from '../page_layout/Logo.js';
import { FormInput } from '../utilities/FormInput';
import Button from '@material-ui/core/Button';
import { FlexColumnCenter } from '../page_layout/FlexLayout.js';


const LoginWrapper = FlexColumnCenter.extend`
  border: solid;
  border-width: 1px;
  padding: 10px;
  margin-top: 100px;
`
const LoginHeader = styled.h3``
const ButtonWrapper = styled.div``
export default class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    returningUser: true,
    username: '',
    password: '',
  };

  handleUserInput = ({ target }) => {
    const { name, value } = target;
    this.setState({[name]: value})
  }

  login = () => {
    if (this.state.returningUser) {
      AuthenticationService.authenticate(
        {username: this.state.username, password: this.state.password}, 
        () => { this.setState({ redirectToReferrer: true });}
      );
    } else {
      this.setState({returningUser: true});
    }
  };

  signUp = () => {
    if (!this.state.returningUser) {
      AuthenticationService.signUp(
        {username: this.state.username, password: this.state.password}, 
        () => { this.setState({ redirectToReferrer: true });}
      );
    } else {
      this.setState({returningUser: false});
    }
  }

  renderHeader = () => {
    if (this.state.returningUser) {
      return <LoginHeader>Welcome back to kudoserver!</LoginHeader>        
    } else {
      return <LoginHeader>Welcome to kudoserver!</LoginHeader>
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    const header = this.renderHeader();
    return (
      <LoginWrapper>
          {header}
          <Logo />
          <FormInput inputName={'username'}
                      changeCb={this.handleUserInput.bind(this)}
                      inputValue={this.state.username} />
          <FormInput inputName={'password'}
            changeCb={this.handleUserInput.bind(this)}
            inputValue={this.state.password}
            type='password' />
          <ButtonWrapper>
            <Button onClick={this.login.bind(this)}>Log in</Button>
            <Button onClick={this.signUp.bind(this)}>Sign up</Button>
          </ButtonWrapper>
      </LoginWrapper>
    );
  }
}