import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { homeChartData } from '../constants';
import { MenuItem, Select } from '@mui/material';

const HomeChart = () => {
  const [filterBy, setfilterBy] = useState('year');
  return (
    <div className="my-[30px] w-full  border py-[20px] rounded-[6px] shadow-md">
      <div className="flex justify-between items-center px-[20px]">
        <p className="text-[18px] text-theme-black font-semibold">
          Total Sales
        </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterBy}
          // variant="standard"
          sx={{
            boxShadow: 'none',
            fontSize: 14,
            outline: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
          }}
          onChange={(e) => setfilterBy(e.target.value)}
        >
          <MenuItem value={'day'}>Day</MenuItem>
          <MenuItem value={'month'}>Last Month</MenuItem>
          <MenuItem value={'year'}>Last 12 Months</MenuItem>
        </Select>
      </div>
      <div className="w-[95%] mx-auto">
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

export default HomeChart;
