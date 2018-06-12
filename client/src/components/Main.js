import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute.js'
import UsersContainer from './users/UsersContainer.js';
import Login from './auth/Login.js';


export const Main = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/users" component={UsersContainer} />
    <Redirect from='/' to='/users'/>
  </Switch>
);