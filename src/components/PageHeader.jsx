import Button from './Button';
import { pageHeaderButtons } from '../constants';
import DatePicker from './DatePicker';

const PageHeader = ({ title, showButtons, showDatePicker }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[40px] ">
        <p className="text-4 text-theme-black font-semibold">{title}</p>
        <div className="flex space-x-[20px] items-center ">
          {showButtons && (
            <div className="bg-theme-lightgray flex text-theme-black p-[2px] rounded space-x-[2px]">
              {pageHeaderButtons.map((btn) => (
                <Button
                  key={btn.text}
                  text={btn.text}
                  background={btn.background}
                  color={btn.color}
                />
              ))}
            </div>
          )}
          {showDatePicker && (
            <div>
              <DatePicker />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
