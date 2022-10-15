import React from 'react';

const NotFound = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className=" flex flex-col justify-center">
        <h1 className="text-theme-red font-bold text-8xl">404 </h1>
        <br />
        <span className="text-theme-gray text-4xl"> Not Found!</span>
      </div>
    </div>
  );
};

export default NotFound;
