import React, { useCallback, useMemo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form, { InputTag, Input } from '../shared/Form';
import User from '../../domain/User';
import { useUserRepository } from '../../adopter/userRepositoryProvider';
import Alert from '../shared/Alert';
import { useUserInformation } from '../../adopter/UserInformationProvider';

type UserInput = {
  Name: string;
  Password: string;
};

function isUserInput(arg: any): arg is UserInput {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  return arg?.Name !== undefined && arg?.Password !== undefined;
}

const LoginForm: React.VFC = () => {
  const userRepository = useUserRepository();
  const { userInfoState, setUserInfoState } = useUserInformation();
  const [errorMsg, setErrorMsg] = useState('');
  const createInputTag = useCallback(
    (
      _name: InputTag['name'],
      _label: InputTag['label'],
      _type: InputTag['type'],
    ): InputTag => ({
      name: _name,
      label: _label,
      type: _type,
    }),
    [],
  );

  const inputTags = useMemo(
    () => [
      createInputTag('Name', 'ユーザ名', 'text'),
      createInputTag('Password', 'パスワード', 'password'),
    ],
    [createInputTag],
  );

  const onSubmit = (data: Input): void => {
    console.log(data);
    if (isUserInput(data)) {
      const user: User = data;
      userRepository
        .signUp(user)
        .then((result) => {
          if (!result.isSucceeded) {
            setErrorMsg(result.message);

            return;
          }
          setUserInfoState({ name: result.name });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      {userInfoState.name && <Redirect to="/service" />}
      {errorMsg && <Alert message={errorMsg} />}
      <div className="w-form mt-10 mx-auto py-5 px-10 bg-accent rounded">
        <h1 className="text-center my-5 text-2xl">ユーザ登録</h1>
        <Form onSubmitFunc={onSubmit} inputTags={inputTags} />
      </div>
    </>
  );
};

export default LoginForm;
