import Chart from 'react-apexcharts';
import { pieChartData } from '../constants';

const AnalyticsPieChart = () => {
  return (
    <div className="p-[20px] border rounded-[6px] shadow-md flex-1">
      <div className="flex justify-between items-center px-[20px]">
        <p className="text-[18px]  text-theme-black font-semibold">
          Sales Breakdown By Product
        </p>
      </div>
      <Chart
        options={pieChartData.options}
        series={pieChartData.series}
        type="donut"
        width="100%"
        height={400}
      />
    </div>
  );
};

export default AnalyticsPieChart;
