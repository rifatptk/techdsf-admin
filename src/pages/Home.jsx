import React from 'react';
import Cards from '../components/Cards';
import Button from '../components/Button';
import HomeChart from '../components/HomeChart';
import BasicTable from '../components/BasicTable';
import BalanceContent from '../components/BalanceContent';
// import DatePicker from './DatePicker';

const buttonsData = [
  { text: 'Days', background: 'white', color: '#131523' },
  { text: 'Weeks', background: 'white', color: '#131523' },
  { text: 'Months' },
];

const Home = () => {
  return (
    <div className="w-full bg-theme-white p-[40px]">
      <div className="flex justify-between items-center mb-[40px] ">
        <p className="text-4 text-theme-black font-semibold">Overview</p>
        <div className="flex space-x-[20px] items-center ">
          <div className="bg-theme-lightgray flex text-theme-black p-1 rounded space-x-1">
            {buttonsData.map((btn) => (
              <Button
                key={btn.text}
                text={btn.text}
                background={btn.background}
                color={btn.color}
              />
            ))}
          </div>
          <div>{/* <DatePicker /> */}</div>
        </div>
      </div>
      <Cards />
      <HomeChart />
      <div className="flex justify-between space-x-[20px]">
        <div className="p-[20px] border rounded-[6px] shadow-md flex-[2]">
          <BasicTable />
        </div>
        <div className="p-[20px] border rounded-[6px] shadow-md flex-1">
          <BalanceContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
