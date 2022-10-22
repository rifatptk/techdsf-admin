import { TbUsers } from 'react-icons/tb';
import { TbUser } from 'react-icons/tb';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux';

const UserDropdown = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-theme-white p-2 border shadow-md rounded-[6px]">
      <div className="flex items-center space-x-2 text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer">
        <div className="bg-theme-lightgray rounded-full p-1">
          <TbUser />
        </div>
        <div className="text-[14px]">Profile</div>
      </div>
      <div className="flex items-center space-x-2 text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer">
        <div className="bg-theme-lightgray rounded-full p-1">
          <TbUsers />
        </div>
        <div className="text-[14px]">Profile</div>
      </div>
      <div
        onClick={() => dispatch(logout())}
        className="flex items-center space-x-2 text-theme-black hover:text-theme-blue p-2 hover:bg-theme-lightgray rounded-[6px] transition-colors cursor-pointer"
      >
        <div className="bg-theme-lightgray rounded-full p-1">
          <FiLogOut />
        </div>

        <div className="text-[14px]">Logout</div>
      </div>
    </div>
  );
};

export default UserDropdown;
