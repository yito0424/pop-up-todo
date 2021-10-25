import React, { useCallback, useMemo } from 'react';
import Form, { InputTag, Input } from '../shared/Form';
import User from '../../domain/User';
import {useUserRepository} from '../../adopter/userRepositoryProvider';

type UserInput = {
  userName: string;
  password: string;
}

function isUserInput(arg: any): arg is UserInput {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  return arg?.userName !== undefined && arg?.password !== undefined;
}

const LoginForm: React.VFC = () => {
  const userRepository = useUserRepository()
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
      createInputTag('userName', 'ユーザ名', 'text'),
      createInputTag('password', 'パスワード', 'password'),
    ],
    [createInputTag],
  );

  const onSubmit = useCallback(
    (data: Input) => {
      console.log(data);
      if (isUserInput(data)){
        const user: User = data;
        const res = userRepository.signUp(user);
      }
    }
  , []);

  return (
    <div className="w-form mt-10 mx-auto py-5 px-10 bg-accent rounded">
      <h1 className="text-center my-5 text-2xl">ユーザ登録</h1>
      <Form onSubmitFunc={onSubmit} inputTags={inputTags} />
    </div>
  );
};

export default LoginForm;
