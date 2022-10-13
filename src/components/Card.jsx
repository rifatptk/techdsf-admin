import { FaLongArrowAltDown } from 'react-icons/fa';
import Chart from 'react-apexcharts';

const Card = ({ cardData: { title, amount, growth, chartData, icon } }) => {
  return (
    <div className="flex-1 border shadow-md p-[20px] rounded-[6px] flex">
      <div className="content flex-1">
        <p className="text-theme-gray mb-[20px]">{title}</p>
        <p className="text-[28px] font-semibold text-theme-black">{amount}</p>
        <div
          className={`${
            growth < 0 ? 'text-theme-red' : 'text-theme-green'
          } flex items-center space-x-[6px] `}
        >
          <span className="font-semibold">{growth}</span>
          <span className={`${growth > 0 ? 'rotate-180' : ''}`}>
            <FaLongArrowAltDown />
          </span>
          <span className="text-[12px] text-theme-gray">than last year</span>
        </div>
      </div>
      <div className="chart flex items-center ">
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            width="150"
            height={100}
          />
        )}
        {icon && (
          <div className="border border-theme-cyan/50 p-[20px] bg-theme-lightgray text-theme-blue rounded-full">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
