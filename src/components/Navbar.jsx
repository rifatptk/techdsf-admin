import { Avatar, IconButton } from '@mui/material';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Notifications from './Notifications';

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <nav className="bg-white px-5 flex items-center h-[70px] shadow">
      <div className="w-full flex justify-between items-center">
        <div className="logo text-theme-blue text-2xl tracking-widest font-bold  ">
          TECHDSF
        </div>
        <div className="right flex items-center space-x-[36px]">
          <div className="search flex items-center border border-theme-midgray rounded-md space-x-[10px] py-1 px-[10px]">
            <FiSearch size={24} className="text-theme-midgray" />
            <input
              className="outline-0 text-theme-gray text-[12px] w-[216px]"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="notification relative">
            <IconButton
              sx={{ m: 0, p: 0 }}
              onClick={() => setShowNotification(!showNotification)}
            >
              <div className="count w-4 h-4 rounded-full bg-theme-red text-white text-[12px] grid place-items-center absolute -top-[2px] -right-[2px]">
                9
              </div>
              <IoIosNotificationsOutline
                size={28}
                className="text-theme-gray"
              />
            </IconButton>
            {showNotification && (
              <div className="absolute right-0 top-9">
                <Notifications />
              </div>
            )}
          </div>
          <div className="user flex items-center space-x-[12px]">
            <Avatar
              sx={{ width: '36px', height: '36px' }}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
            <p className="text-theme-black font-semibold text-[14px]">
              Liton Ahmed
            </p>
            <IoIosArrowDown size={24} className="text-theme-gray" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
