import React from 'react';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div className="w-full bg-theme-white p-[40px]">
      <p className="text-4 text-theme-black font-semibold mb-[40px]">
        Overview
      </p>
      <Cards />
    </div>
  );
};

export default Home;
