import React, { useCallback, useMemo } from 'react';
import Form, { InputTag } from '../utils/Form';

const LoginForm: React.VFC = () => {
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
      createInputTag('user_name', 'ユーザ名', 'text'),
      createInputTag('password', 'パスワード', 'password'),
    ],
    [createInputTag],
  );

  return (
    <div className="w-form mt-10 mx-auto py-5 px-10 bg-accent rounded">
      <h1 className="text-center my-5 text-2xl">ユーザ登録</h1>
      <Form inputTags={inputTags} />
    </div>
  );
};

export default LoginForm;
