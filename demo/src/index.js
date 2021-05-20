import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Example from './example/index.js';
import Home from './example/home.js';


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #demo {
    height: 100%;
    min-width: 1024px;
  }
`;

class Demo extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <Switch>
          <Route path={`/templateBuilder`} >
            <Example />
          </Route>

          <Route path={`/`}exact={true}>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<React.Fragment><Demo /></React.Fragment>, document.querySelector('#demo'));
