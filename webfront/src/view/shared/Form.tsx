import React from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';

type InputTag = {
  name: string;
  label: string;
  type: 'text' | 'password' | 'email';
};

type Input = {
  [keys: string]: any; 
}

type FormParams = {
  onSubmitFunc: SubmitHandler<Input>; 
  inputTags: InputTag[];
};

const Form: React.VFC<FormParams> = ({ onSubmitFunc, inputTags }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(onSubmitFunc);

  return (
    <form onSubmit={onSubmit} className="w-full">
      {/* inputの順番が動的に変わることはないのでkey=indexを用いる */}
      {inputTags.map((inputTag, index) => (
        /* eslint-disable react/no-array-index-key */
        <div key={index} className="mb-3">
          <label htmlFor={inputTag.name} className="block text-xl">
            {inputTag.label}
          </label>
          {/* eslint-disable react/jsx-props-no-spreading */}
          <input
            className="w-full p-1 rounded-sm"
            type={inputTag.type}
            {...register(inputTag.name)}
          />
        </div>
      ))}
      {/* eslint-disable jsx-a11y/control-has-associated-label */}
      <button
        type="submit"
        className="block w-16 py-1 px-2 bg-primary mx-auto rounded-sm border-secondly border-2"
      >
        送信
      </button>
    </form>
  );
};

export default Form;
export type { InputTag, Input }
