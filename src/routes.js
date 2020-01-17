import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/edit" component={Edit} />
    </Switch>
  );
}
