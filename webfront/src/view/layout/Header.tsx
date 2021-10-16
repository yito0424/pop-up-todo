import React from 'react';

const Header: React.VFC = () => (
  <header className="h-header z-header bg-primary filter drop-shadow-md flex items-center justify-between">
    <h1 className="text-3xl ml-3">Logo</h1>
    <div>
        <a href="/" className="mx-3">Log in</a>
        <a href="/" className="mx-3 bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</a>
    </div>
  </header>
);

export default Header