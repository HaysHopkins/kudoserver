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
const SignupWrapper = styled.div`
  padding: 10px;
  margin-top: 10px;
`
const LoginHeader = styled.h3``
const ButtonWrapper = styled.div``

export default class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    returningUser: true,
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    team: '',
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

  signUpParams = () => {
    return {
      username: this.state.username, 
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      team: this.state.team,
    }
  }

  signUp = () => {
    if (!this.state.returningUser) {
      AuthenticationService.signUp(
        this.signUpParams(), 
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

  renderSignup = () => {
    if (!this.state.returningUser) {
      return <SignupWrapper>
               <FormInput inputName={'first_name'}
                      changeCb={this.handleUserInput.bind(this)}
                      inputValue={this.state.first_name} 
                      placeholder="first_name" />
               <FormInput inputName={'last_name'}
                      changeCb={this.handleUserInput.bind(this)}
                      inputValue={this.state.last_name} 
                      placeholder="last name" />
               <FormInput inputName={'team'}
                      changeCb={this.handleUserInput.bind(this)}
                      inputValue={this.state.team} 
                      placeholder="team name" />
             </SignupWrapper>
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    const header = this.renderHeader();
    const signUp = this.renderSignup();
    return (
      <LoginWrapper>
          {header}
          <Logo />
          <FormInput inputName={'username'}
                      changeCb={this.handleUserInput.bind(this)}
                      inputValue={this.state.username} 
                      placeholder="username" />
          <FormInput inputName={'password'}
            changeCb={this.handleUserInput.bind(this)}
            inputValue={this.state.password}
            type='password'
            placeholder="••••••••" />
          {signUp}
          <ButtonWrapper>
            <Button onClick={this.login.bind(this)}>Log in</Button>
            <Button onClick={this.signUp.bind(this)}>Sign up</Button>
          </ButtonWrapper>
      </LoginWrapper>
    );
  }
}