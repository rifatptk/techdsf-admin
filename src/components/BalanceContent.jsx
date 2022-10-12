import { BsBarChart } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';

const BalanceContent = () => {
  return (
    <div className="text-theme-gray">
      <p className=" my-[40px]">Balance Content</p>
      <div className="flex space-x-[40px] items-center mb-[50px] relative">
        <BsBarChart size={44} />
        <BsArrowDownRight
          size={24}
          className="absolute top-4 -left-10 -rotate-90"
        />
        <div>
          <p>Income</p>
          <p className="text-[36px] font-bold text-theme-green">$634.24</p>
        </div>
      </div>
      <div className="flex space-x-[40px] items-center relative">
        <BsBarChart size={44} style={{ transform: 'scaleX(-1)' }} />
        <BsArrowDownRight size={24} className="absolute top-4 -left-5" />
        <div>
          <p>Expense</p>
          <p className="text-[36px] font-bold text-theme-red">$634.24</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceContent;
