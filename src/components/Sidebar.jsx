import React from 'react';
import { sideBarLinks } from '../constants';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div
        className=" w-[250px] border-r "
        style={{ height: `calc(${100}vh - 70px)` }}
      >
        {sideBarLinks.map((data) => (
          <SidebarItem key={data.to} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
