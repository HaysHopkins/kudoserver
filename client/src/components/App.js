import React from 'react';
import Header from './page_layout/Header.js';
import { Main } from './Main.js';
import { AppWrapper } from './page_layout/AppWrapper.js';
import { ToastContainer } from 'react-toastify';

const App = () => { 
  return <AppWrapper>
           <Header />
           <ToastContainer />
           <Main />
         </AppWrapper>
}

export default App;
