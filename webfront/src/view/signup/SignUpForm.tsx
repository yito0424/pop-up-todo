import React, { useCallback, useMemo } from 'react';
import Form, { InputTag, Input } from '../shared/Form';

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
  const onSubmit = useCallback(
    (data: Input) => {console.log(data)}
  , []);


  return (
    <div className="w-form mt-10 mx-auto py-5 px-10 bg-accent rounded">
      <h1 className="text-center my-5 text-2xl">ユーザ登録</h1>
      <Form onSubmitFunc={onSubmit} inputTags={inputTags} />
    </div>
  );
};

export default LoginForm;
