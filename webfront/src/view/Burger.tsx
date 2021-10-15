import React from 'react';

type BurgerProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Burger: React.VFC<BurgerProps> = ({ open, setOpen }: BurgerProps) => (
  <button
    onClick ={()=>{setOpen(!open)}}
    className="absolute inset-5percent left-2 flex flex-col justify-around w-12 h-12 rounded-md bg-accent cursor-pointer p-2 z-burger"
    aria-label="Burger"
    type="button"
  >
      <div className="h-1 w-8 bg-primary rounded-10px transition-all duration-300 ease-linear relative" />
      <div className="h-1 w-8 bg-primary rounded-10px transition-all duration-300 ease-linear relative" />
      <div className="h-1 w-8 bg-primary rounded-10px transition-all duration-300 ease-linear relative" />
  </button>
);

export default Burger;
