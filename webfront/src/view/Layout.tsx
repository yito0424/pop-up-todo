import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
    <footer>
      <h1>coprlight</h1>
    </footer>
  </div>
);

export default Layout;
