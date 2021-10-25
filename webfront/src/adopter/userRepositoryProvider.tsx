import React, { useContext } from 'react';
import IUserRepository from '../repository/IUserRepository';
import MockUserRepository from '../repository/MockUserRepository';

const userRepository: IUserRepository = new MockUserRepository();

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
