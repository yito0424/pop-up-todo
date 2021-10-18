import React from 'react';
import './bubble.css';

type ServiceProps = {
  // name: string,
};

const Service: React.VFC<ServiceProps> = () => (
  <ul className="flex items-center mt-32 mx-20 px-5 h-44 border-accent border-4 rounded-md overflow-x-auto">
    <li className="bubble flex flex-shrink-0 items-center justify-center h-32 w-32 rounded-full m-5 cursor-pointer">
        <div>task</div>
    </li>
    <li className="bubble flex flex-shrink-0 items-center justify-center h-32 w-32 rounded-full m-5 cursor-pointer">
        <div>task</div>
    </li>
    <li className="bubble flex flex-shrink-0 items-center justify-center h-32 w-32 rounded-full m-5 cursor-pointer">
        <div>task</div>
    </li>
    <li className="bubble flex flex-shrink-0 items-center justify-center h-32 w-32 rounded-full m-5 cursor-pointer">
        <div>task</div>
    </li>
    <li className="bubble flex flex-shrink-0 items-center justify-center h-32 w-32 rounded-full m-5 cursor-pointer">
        <div>task</div>
    </li>
    <li className="bubble flex flex-shrink-0 items-center justify-center h-32 w-32 rounded-full m-5 cursor-pointer">
        <div>task</div>
    </li>
  </ul>
);

export default Service;
