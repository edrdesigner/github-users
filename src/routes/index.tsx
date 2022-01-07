import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Person } from '../pages/Person';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path=":personId" element={<Person />} />
    </Switch>
  );
}
