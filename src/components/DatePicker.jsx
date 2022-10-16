import { TbCalendarEvent } from 'react-icons/tb';

const DatePicker = () => {
  return (
    <div className="flex items-center bg-white text-theme-gray border rounded-[6px] px-[12px] py-[6px] cursor-default">
      <TbCalendarEvent size={24} />
      <p className="text-[14px]">Jan, 2019 - Dec, 2019</p>
    </div>
  );
};

export default DatePicker;
