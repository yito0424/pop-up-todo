import React, {useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Burger from './Burger';

const Layout: React.VFC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Header />
      <SideBar open={open} />
      <Burger open={open} setOpen={setOpen}  />
    </>
  );
};

export default Layout;
