import AnalyticsChart from '../components/AnalyticsChart';
import AnalyticsPieChart from '../components/AnalyticsPieChart';
import Cards from '../components/Cards';
import PageHeader from '../components/PageHeader';
import { analyticsCards } from '../constants';

const Analytics = () => {
  return (
    <div className="w-full bg-theme-white p-[40px]">
      <PageHeader title="Analytics" showButtons showDatePicker />
      <Cards data={analyticsCards} />
      {/* charts */}

      <div className="flex space-x-[20px] justify-between my-[30px]">
        {/* barchart */}
        <AnalyticsChart />
        {/* piechart */}
        <AnalyticsPieChart />
      </div>
    </div>
  );
};

export default Analytics;
