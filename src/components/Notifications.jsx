import { notificationsData } from '../constants';
import Notification from './Notification';

const Notifications = () => {
  return (
    <div className="bg-theme-white p-2 rounded-[6px] w-[400px] border shadow-md">
      {notificationsData.slice(0, 10).map((notification, i) => (
        <Notification notification={notification} />
      ))}
      {notificationsData.length > 10 && (
        <small className="text-theme-cyan hover:text-theme-blue transition-colors cursor-pointer p-2">
          See All
        </small>
      )}
    </div>
  );
};

export default Notifications;
