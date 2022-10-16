import Button from './Button';
import { pageHeaderButtons } from '../constants';
import DatePicker from './DatePicker';
import { useState } from 'react';

const PageHeader = ({ title, showButtons, showDatePicker }) => {
  const [activeButton, setactiveButton] = useState(2);
  return (
    <div>
      <div className="flex justify-between items-center mb-[40px] ">
        <p className="text-4 text-theme-black font-semibold">{title}</p>
        <div className="flex space-x-[20px] items-center ">
          {showButtons && (
            <div className="bg-theme-lightgray flex text-theme-black p-[2px] rounded space-x-[2px]">
              {pageHeaderButtons.map((btn, i) => (
                <Button
                  key={btn.text}
                  text={btn.text}
                  active={activeButton === i}
                  onClick={() => setactiveButton(i)}
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
