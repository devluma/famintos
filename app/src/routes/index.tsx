import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Choose from '../pages/Choose';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />

    <Route path="/choose" component={Choose} isPrivate />
  </Switch>
);

export default Routes;
