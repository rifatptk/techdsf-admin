import React from 'react';

const Notification = ({ notification: { text, time } }) => {
  return (
    <div className="flex justify-between items-center text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer">
      <div className="text-[14px]">{`${
        text.length > 20 ? text.slice(0, 20) + '...' : text
      }`}</div>
      <small className="text-theme-gray">{time}</small>
    </div>
  );
};

export default Notification;
