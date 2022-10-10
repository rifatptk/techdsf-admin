import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ data }) => {
  const { title, to, icon } = data;
  return (
    <div className="sidebarItem group">
      <Link
        to={to}
        className="flex items-center px-[20px] py-[14px] space-x-4 group-hover:border-l-4 group-hover:border-l-theme-blue transition-all"
      >
        {icon}
        <div className="text-sm text-theme-black group-hover:text-theme-black">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
