import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import PageWrapper from './components/common/layout/PageWrapper';

import Products from './pages/Products';

import Main from './pages/Main';

import Ankara from './pages/Ankara';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <PageWrapper>
          <Switch>
          <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/ankara">
              <Ankara />
            </Route>
          </Switch>
        </PageWrapper>
      </ChakraProvider>
    </Router>
  );
}

export default App;
