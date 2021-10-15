import React, {useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Burger from './Burger';

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Header />
      <SideBar open={open} />
      <Burger open={open} setOpen={setOpen}  />
      {children}
      <footer>
        <h1>coprlight</h1>
      </footer>
    </>
  );
};

export default Layout;
