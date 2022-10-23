import AnalyticsChart from '../components/AnalyticsChart';
import AnalyticsPieChart from '../components/AnalyticsPieChart';
import Cards from '../components/Cards';
import DataTable from '../components/DataTable';
import PageHeader from '../components/PageHeader';
import { analyticsCards, analyticsTableData } from '../constants';

const Analytics = () => {
  return (
    <div className="w-full min-h-screen bg-theme-white p-[40px]">
      <PageHeader title="Analytics" showButtons showDatePicker />
      <Cards data={analyticsCards} />
      {/* charts */}

      <div className="flex space-x-[20px] justify-between my-[30px]">
        {/* barchart */}
        <AnalyticsChart />
        {/* piechart */}
        <AnalyticsPieChart />
      </div>
      <div className="bg-white text-theme-black rounded-[6px] my-[50px] py-[40px] px-[30px] border shadow-md">
        <div className="text-[18px] font-semibold mb-[40px]">
          Analytics Traffic Channels & Goal
        </div>
        <DataTable data={analyticsTableData} />
      </div>
    </div>
  );
};

export default Analytics;
