import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './service/Service';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          Top Page
        </Route>
        <Route path="/service">
          <Layout />
          <Service />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
