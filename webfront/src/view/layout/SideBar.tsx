import React, { useCallback, useMemo } from 'react';

type SideBarProps = {
  open: boolean;
  //   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.VFC<SideBarProps> = ({ open }: SideBarProps) => {
  const changeOpenStatus = useCallback(
    (isOpen: boolean) => (isOpen ? 'translate-x-0' : '-translate-x-full'),
    [],
  );

  const openStatus = useMemo(
    () => changeOpenStatus(open),
    [open, changeOpenStatus],
  );

  return (
    <nav
      className={`fixed inset-y-0 left-0 bg-secondly w-sidebar mt-header z-sidebar text-sidebar text-primary py-2 transform transition-transform duration-300 ease-in-out ${openStatus}`}
    >
      <ul className="flex flex-col justify-center">
        <li className="text-center my-2">タスクの追加</li>
        <li className="text-center my-2">タスクの編集</li>
        <li className="text-center my-2">タスクの削除</li>
        <li className="text-center my-2">タスクの復元</li>
      </ul>
    </nav>
  );
};

export default SideBar;
