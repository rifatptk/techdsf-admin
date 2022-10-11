import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ data: { title, to, icon }, isExpanded }) => {
  return (
    <NavLink
      to={to}
      end
      className="sidebarLink group flex items-center px-[16px] py-[14px] space-x-[20px] border-l-4 border-l-transparent [&.active]:border-l-theme-blue transition-all [&.active>.icon]:text-theme-blue [&.active>.title]:text-theme-blue"
    >
      <div>{icon}</div>

      <div
        className={`${
          !isExpanded ? 'opacity-0' : ''
        } transition-all title text-sm text-theme-black group-hover:text-theme-black`}
      >
        {title}
      </div>
    </NavLink>
  );
};

export default SidebarItem;
