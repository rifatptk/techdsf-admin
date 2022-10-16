import { TbUsers } from 'react-icons/tb';

const UserDropdown = () => {
  return (
    <div className="bg-theme-white p-2 border shadow-md rounded-[6px]">
      <div className="flex justify-between items-center space-x-2 text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer">
        <TbUsers />
        <div className="text-[14px]">Profile</div>
      </div>
      <div className="flex justify-between items-center space-x-2 text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer">
        <TbUsers />
        <div className="text-[14px]">Profile</div>
      </div>
      <div className="flex justify-between items-center space-x-2 text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer">
        <TbUsers />
        <div className="text-[14px]">Logout</div>
      </div>
    </div>
  );
};

export default UserDropdown;
