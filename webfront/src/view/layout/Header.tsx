import React from 'react';
import { Link } from 'react-router-dom'
import Burger from './Burger';
import { useUserInformation } from '../../adopter/UserInformationProvider';

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.VFC<HeaderProps> = ({ open, setOpen }) => {
  const { userInfoState } = useUserInformation();

  return (
    <header className="h-header z-header bg-primary filter drop-shadow-md flex items-center justify-between">
      <div className="flex items-center">
        <Burger open={open} setOpen={setOpen} />
        <h1 className="text-3xl ml-3">Logo</h1>
      </div>
      <div>
        {userInfoState.name ? <h1 className="inline mx-3">{userInfoState.name}</h1> : <Link to="/" className="mx-3">Log in</Link>}
        <Link to="/user/new" className="mx-3 bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
