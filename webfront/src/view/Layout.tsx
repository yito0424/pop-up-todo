import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <SideBar />
    {children}
    <footer>
      <h1>coprlight</h1>
    </footer>
  </>
);

export default Layout;
