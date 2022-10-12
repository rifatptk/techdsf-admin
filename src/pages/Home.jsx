import React from 'react';
import Cards from '../components/Cards';
import Chart from 'react-apexcharts';
import { homeChartData } from '../constants';

const Home = () => {
  return (
    <div className="w-full bg-theme-white p-[40px]">
      <p className="text-4 text-theme-black font-semibold mb-[40px]">
        Overview
      </p>
      <Cards />
      <div className="my-[30px]">
        <Chart
          options={homeChartData.options}
          series={homeChartData.series}
          type="line"
          width="100%"
          height={400}
        />
      </div>
    </div>
  );
};

export default Home;
