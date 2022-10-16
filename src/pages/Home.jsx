import React from 'react';
import Cards from '../components/Cards';
import HomeChart from '../components/HomeChart';
import BasicTable from '../components/BasicTable';
import BalanceContent from '../components/BalanceContent';
import { overviewCards } from '../constants';
import PageHeader from '../components/PageHeader';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-theme-white p-[40px]">
      <PageHeader title="Overview" showButtons showDatePicker />
      <Cards data={overviewCards} />
      <HomeChart />
      <div className="flex justify-between space-x-[20px] ">
        <div className="bg-white p-[20px] border rounded-[6px] shadow-md flex-[2]">
          <BasicTable />
        </div>
        <div className="bg-white p-[20px] border rounded-[6px] shadow-md flex-1">
          <BalanceContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
