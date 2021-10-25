import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './service/Service';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import BackgroundSkin from './layout/BackgroundSkin';
import SignUpForm from './signup/SignUpForm';
import RepositoryProvider from '../adopter/RepositoryProvider';

function App() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <RepositoryProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              Top Page
            </Route>
            <Route path="/user/new">
              <SignUpForm />
            </Route>
            <Route path="/service">
              <SideBar open={open}/>
              <BackgroundSkin />
              <Service />
            </Route>
          </Switch>
        </Router>
      </RepositoryProvider>
    </>
  );
}

export default App;
