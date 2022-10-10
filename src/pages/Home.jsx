import React from 'react';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className="w-full bg-theme-lightgray p-[40px]">
      <p className="text-4 text-theme-black font-semibold">Overview</p>
      <Cards />
    </div>
  );
};

export default Home;
