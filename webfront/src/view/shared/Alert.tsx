import React from 'react';

type AlertProps = {
  message: string;
};

const Alert: React.VFC<AlertProps> = ({ message }) => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-alert mx-auto mt-10"
    role="alert"
  >
    <span className="block sm:inline">{message}</span>
  </div>
);

export default Alert;
