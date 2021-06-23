import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <App />
  </Router>,
  document.getElementById('app')
);
