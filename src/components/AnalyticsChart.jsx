import Chart from 'react-apexcharts';
import { columnChartData } from '../constants';

const AnalyticsChart = () => {
  return (
    <div className="p-[20px] border rounded-[6px] shadow-md flex-[2]">
      <div className="flex justify-between items-center px-[20px]">
        <p className="text-[18px] text-theme-black font-semibold">
          Sales Report
        </p>
      </div>
      <Chart
        options={columnChartData.options}
        series={columnChartData.series}
        type="bar"
        width="100%"
        height={400}
      />
    </div>
  );
};

export default AnalyticsChart;
