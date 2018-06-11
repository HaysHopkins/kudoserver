import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Header from './page_layout/Header.js';
import UsersContainer from './users/UsersContainer.js';
import { FlexColumnCenter } from './page_layout/FlexLayout.js';

export const Main = () => (
  <Router>
    <FlexColumnCenter>
      <Header />
      <Route path="/users" component={UsersContainer} />
      <Redirect from='/' to='/users'/>
    </FlexColumnCenter>
  </Router>
);