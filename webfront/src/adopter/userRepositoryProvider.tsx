import React, { useContext } from 'react';
import IUserRepository from '../repository/IUserRepository';
import UserRepository from '../repository/UserRepository';
import LocalStorageClient from '../utils/localStorageClient/LocalStorageClient';
import APIClient from '../utils/APIClient/APIClient';

const userRepository: IUserRepository = new UserRepository(new LocalStorageClient("key"), new APIClient());

const ReactUserRepositoryContext =
  React.createContext<IUserRepository>(userRepository);

const ReactUserRepositoryProvider = ReactUserRepositoryContext.Provider;

const UserRepositoryProvider: React.FC = ({ children }) => (
  <ReactUserRepositoryProvider value={userRepository}>
    {children}
  </ReactUserRepositoryProvider>
);
export default UserRepositoryProvider;
export const useUserRepository = () => useContext(ReactUserRepositoryContext);
