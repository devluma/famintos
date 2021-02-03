import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Choose from '../pages/Choose';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" exact component={Register} />
    <Route path="/choose" component={Choose} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
