import BiHome from 'react-icons/bi';
import BiBarChartAlt2 from 'react-icons/bi';
import TbFileInvoice from 'react-icons/tb';
import TbUsers from 'react-icons/tb';
import TbCalendarEvent from 'react-icons/tb';
import FiSettings from 'react-icons/fi';

// import FiMail from 'react-icons/fi';
// import TbMessageCircle from 'react-icons/tb';
// import IoNotificationsOutline from 'react-icons/io';
// import FiSearch from 'react-icons/fi';
// import TbFileDownload from 'react-icons/tb';
// import TbHelp from 'react-icons/tb';

export const sideBarLinks = [
  { title: 'Home', to: '/', icon: <BiHome /> },
  { title: 'Analytics', to: '/analytics', icon: <BiBarChartAlt2 /> },
  { title: 'Invoices', to: '/invoices ', icon: <TbFileInvoice /> },
  { title: 'Customers', to: '/customers', icon: <TbUsers /> },
  { title: 'Calendar', to: '/calendar', icon: <TbCalendarEvent /> },
  { title: 'Settings', to: '/settings', icon: <FiSettings /> },
];

export const overviewCards = [
  { title: 'Avg. Order Value', amount: 306.2, growth: -1.3 },
  { title: 'Order Quantity', amount: 7650, growth: -1.2 },
  { title: 'Unique Purchases', amount: 3137, growth: 2.3 },
];

export const yourTransaction = [
  { date: 'Today', source: 'Starbucks Cafe', type: 'Food', amount: 15.14 },
  { date: 'Today', source: 'Cash In', type: 'Egle', amount: 15.1214 },
  { date: '14.12.22', source: 'Call In', type: 'Jigla', amount: 154.14 },
  {
    date: 'Today',
    source: 'Spring Garden',
    type: 'Utilities',
    amount: 15.14,
  },
  { date: 'today', source: 'Rodela Gant', type: 'Organic', amount: 150.14 },
  { date: 'today', source: 'Email', type: 'Fashion', amount: 1995.14 },
];
