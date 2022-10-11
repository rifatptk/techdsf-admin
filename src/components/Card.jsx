import { FaLongArrowAltDown } from 'react-icons/fa';
import Chart from 'react-apexcharts';

const Card = ({ cardData: { title, amount, growth } }) => {
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: { show: false },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: 'series-1',
        data: [0, 20, 10, 25, 20, 0],
      },
    ],
  };

  return (
    <div className="flex-1 border shadow-md p-[20px] rounded-[6px] flex">
      <div className="content flex-1">
        <p className="text-theme-gray mb-[20px]">{title}</p>
        <p className="text-[28px] font-semibold text-theme-black">${amount}</p>
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
      <div className="chart flex-1">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          width="200"
          height={100}
        />
      </div>
    </div>
  );
};

export default Card;
