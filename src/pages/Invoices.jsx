import Cards from '../components/Cards';
import PageHeader from '../components/PageHeader';
import { invoiceCards } from '../constants';

const Invoices = () => {
  return (
    <div className="w-full min-h-screen bg-theme-white p-[40px]">
      <PageHeader title="Invoice History" showDatePicker />
      <Cards data={invoiceCards} />
    </div>
  );
};

export default Invoices;
