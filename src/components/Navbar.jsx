import { Avatar } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  return (
    <nav className=" px-5 flex items-center h-[70px] shadow">
      <div className="w-full flex justify-between items-center">
        <div className="logo text-theme-blue text-2xl  font-bold  ">
          techDSF
        </div>
        <div className="right flex items-center space-x-5">
          <div className="search flex items-center border border-theme-midgray rounded-md space-x-3 p-2">
            <FiSearch size={24} className="text-theme-midgray" />
            <input
              className="outline-0 text-theme-gray"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="notification relative">
            <div className="count w-4 h-4 rounded-full bg-theme-red text-white text-[12px] grid place-items-center absolute -top-[2px] -right-[2px]">
              9
            </div>
            <IoIosNotificationsOutline size={28} className="text-theme-gray" />
          </div>
          <div className="user flex items-center space-x-2">
            <Avatar
              sx={{ width: '38px', height: '38px' }}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
            <p className="text-theme-black font-semibold text-[14px]">
              Liton Ahmed
            </p>
            <IoIosArrowDown size={20} className="text-theme-gray" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
