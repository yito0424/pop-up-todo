import React from 'react';
import Burger from './Burger';

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.VFC<HeaderProps> = ({ open, setOpen }) => (
  <header className="h-header z-header bg-primary filter drop-shadow-md flex items-center justify-between">
    <div className="flex items-center">
      <Burger open={open} setOpen={setOpen} />
      <h1 className="text-3xl ml-3">Logo</h1>
    </div>
    <div>
      <a href="/" className="mx-3">
        Log in
      </a>
      <a
        href="/"
        className="mx-3 bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Get Started
      </a>
    </div>
  </header>
);

export default Header;
