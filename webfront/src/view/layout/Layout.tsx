import React, {useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';

const Layout: React.VFC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
    </>
  );
};

export default Layout;
