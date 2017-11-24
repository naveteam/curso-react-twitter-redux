import React, { Component } from 'react';
import './App.css';

import Routes from './components/Routes';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
