import React from 'react';

const SideBar: React.VFC = () => (
  <nav className=" fixed inset-y-0 left-0 bg-secondly w-sidebar mt-header z-sidebar text-sidebar text-primary py-2">
    <ul className="flex flex-col justify-center">
      <li className="text-center my-2">タスクの追加</li>
      <li className="text-center my-2">タスクの編集</li>
      <li className="text-center my-2">タスクの削除</li>
      <li className="text-center my-2">タスクの復元</li>
    </ul>
  </nav>
);

export default SideBar;
