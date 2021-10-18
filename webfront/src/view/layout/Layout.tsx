import React, {useState} from 'react';
import Header from './Header';
import SideBar from './SideBar';
import BackgroundSkin from './BackgroundSkin';

const Layout: React.VFC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
      <BackgroundSkin />
    </>
  );
};

export default Layout;
