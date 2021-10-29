import React, { useContext, useState } from 'react';
import LocalStorageClient from '../utils/localStorageClient/LocalStorageClient';
import UserResponse from '../repository/response/UserResponse'

type UserInformation = {
  name: string;
};

type UserInformationState = {
  userInfoState: UserInformation;
  setUserInfoState: React.Dispatch<React.SetStateAction<UserInformation>>;
};

let reactUserInformationContext: React.Context<UserInformationState>;

const UserInformationProvider: React.FC = ({ children }) => {
  const localStorageClient = new LocalStorageClient('key')
  const defaultUserInformation: UserInformation = {
    name: '',
  };
  const localStorage= localStorageClient.getItem<UserResponse>()

  // 削除したいとき用
  // localStorageClient.setItem(null)

  if (localStorage != null){
    defaultUserInformation.name = localStorage.name
  }

  const [userInfo, setUserInfo] = useState<UserInformation>(
    defaultUserInformation,
  );

  const userInformationState: UserInformationState = {
    userInfoState: userInfo,
    setUserInfoState: setUserInfo,
  };
  reactUserInformationContext =
    React.createContext<UserInformationState>(userInformationState);

  const ReactUserInformationProvider = reactUserInformationContext.Provider;

  return (
    <ReactUserInformationProvider value={userInformationState}>
      {children}
    </ReactUserInformationProvider>
  );
};

export default UserInformationProvider;
export const useUserInformation = () => useContext(reactUserInformationContext);
