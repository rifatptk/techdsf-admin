import Cards from '../components/Cards';
import PageHeader from '../components/PageHeader';
import { analyticsCards } from '../constants';

const Analytics = () => {
  return (
    <div className="w-full bg-theme-white p-[40px]">
      <PageHeader title="Analytics" showButtons />
      <Cards data={analyticsCards} />
    </div>
  );
};

export default Analytics;
