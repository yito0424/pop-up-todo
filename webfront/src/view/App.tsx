import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Service from './service/Service';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import BackgroundSkin from './layout/BackgroundSkin';
import SignUpForm from './signup/SignUpForm';
import RepositoryProvider from '../adopter/RepositoryProvider';
import UserInfomationProvider from '../adopter/UserInformationProvider';
import Auth from './shared/Auth';

function App() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <UserInfomationProvider>
        <Router>
          <Header open={open} setOpen={setOpen} />
          <RepositoryProvider>
            <Switch>
              <Route exact path="/">
                Top Page
              </Route>
              <Route path="/user/new" component={SignUpForm} />
              <Auth>
                <Switch>
                  <Route path="/service">
                    <SideBar open={open} />
                    <BackgroundSkin />
                    <Service />
                  </Route>
                  <Redirect to="/user/new" />
                </Switch>
              </Auth>
            </Switch>
          </RepositoryProvider>
        </Router>
      </UserInfomationProvider>
    </>
  );
}

export default App;
