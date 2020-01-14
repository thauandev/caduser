import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
    </Switch>
  );
}
