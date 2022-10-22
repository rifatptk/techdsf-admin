import { TbCalendarEvent } from 'react-icons/tb';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { useState } from 'react';

const DatePicker = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div className="flex items-center bg-white text-theme-gray border rounded-[6px] px-[12px] py-[6px] cursor-default">
      <TbCalendarEvent size={24} />
      {/* <p className="text-[14px]">Jan, 2019 - Dec, 2019</p> */}

      <DateRangePicker onChange={onChange} value={value} />
    </div>
  );
};

export default DatePicker;
