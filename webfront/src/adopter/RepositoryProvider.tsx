import React from 'react';
import UserRepositoryProvider from './userRepositoryProvider';

const RepositoryProvider: React.FC = ({ children }) => (
  <UserRepositoryProvider>{children}</UserRepositoryProvider>
);

export default RepositoryProvider;
