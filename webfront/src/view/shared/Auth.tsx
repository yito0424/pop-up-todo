import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUserInformation } from '../../adopter/UserInformationProvider';

const Auth: React.FC = ({ children }) => {
  const { userInfoState } = useUserInformation();

  return userInfoState.name ? (children as React.ReactElement) : <Redirect to="/user/new" />;
};

export default Auth;
