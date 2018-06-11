import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Header from './page_layout/Header.js';
import UsersContainer from './users/UsersContainer.js';

export const Main = () => (
  <Router>
    <div>
      <Header />
      <PrivateRoute path="/users" component={UsersContainer} />
      <Redirect from='/' to='/users'/>
    </div>
  </Router>
);