import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute.js'
import Header from './page_layout/Header.js';
import UsersContainer from './users/UsersContainer.js';
import Login from './auth/Login.js';
import { FlexColumnCenter } from './page_layout/FlexLayout.js';
import { ToastContainer } from 'react-toastify';

export const Main = () => (
  <Router>
    <FlexColumnCenter>
      <Header />
      <ToastContainer />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/users" component={UsersContainer} />
      <Redirect from='/' to='/users'/>
    </FlexColumnCenter>
  </Router>
);