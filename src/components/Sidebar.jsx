import React from 'react';
import { sideBarLinks } from '../constants';
import SidebarItem from './SidebarItem';
import { BsArrowRightCircle } from 'react-icons/bs';

const Sidebar = ({ isExpanded, setSidebarExpanded }) => {
  return (
    <div className="sidebar border-r bg-white h-[100vh] relative">
      {/* sidebar toggle */}
      <div className="absolute -right-[14px] top-9 bg-white cursor-pointer rounded-full shadow-md">
        <BsArrowRightCircle
          size={28}
          onClick={() => setSidebarExpanded(!isExpanded)}
          className={`text-theme-cyan pointer transition-all hover:text-theme-blue ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div className=" ">
        {sideBarLinks.map((data) => (
          <SidebarItem isExpanded={isExpanded} key={data.to} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
