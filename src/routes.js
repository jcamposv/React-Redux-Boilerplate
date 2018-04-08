import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import App from './App';

import Home from './containers/Home';

export default function Routes(props) {
  return (
    <ConnectedRouter {...props}>
      <App>
        <Route path="/" component={Home} />
      </App>
    </ConnectedRouter>);
}
