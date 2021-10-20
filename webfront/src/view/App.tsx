import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './service/Service';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import BackgroundSkin from './layout/BackgroundSkin';

function App() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
    <Header open={open} setOpen={setOpen}/>
    <Router>
      <Switch>
        <Route exact path="/">
          Top Page
        </Route>
        <Route path="/login">
          Login Page
        </Route>
        <Route path="/service">
          <SideBar open={open}/>
          <BackgroundSkin />
          <Service />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
