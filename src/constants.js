import { BiHome } from 'react-icons/bi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { TbFileInvoice } from 'react-icons/tb';
import { TbUsers } from 'react-icons/tb';
import { TbCalendarEvent } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import { MdSync } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const iconStyle = { size: 24 };

//sidebar links data
export const sideBarLinks = [
  {
    title: 'Home',
    to: '/',
    icon: (
      <BiHome
        size={iconStyle.size}
        className="icon text-theme-gray group-hover:text-theme-black transition-colors"
      />
    ),
  },
  {
    title: 'Analytics',
    to: '/analytics',
    icon: (
      <BiBarChartAlt2
        size={iconStyle.size}
        className="icon text-theme-gray group-hover:text-theme-black transition-colors"
      />
    ),
  },
  {
    title: 'Invoices',
    to: '/invoices',
    icon: (
      <TbFileInvoice
        size={iconStyle.size}
        className="icon text-theme-gray group-hover:text-theme-black transition-colors"
      />
    ),
  },

  {
    title: 'Customers',
    to: '/customers',
    icon: (
      <TbUsers
        size={iconStyle.size}
        className="icon text-theme-gray group-hover:text-theme-black transition-colors"
      />
    ),
  },
  {
    title: 'Calendar',
    to: '/calendar',
    icon: (
      <TbCalendarEvent
        size={iconStyle.size}
        className="icon text-theme-gray group-hover:text-theme-black transition-colors"
      />
    ),
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: (
      <FiSettings
        size={iconStyle.size}
        className="icon text-theme-gray group-hover:text-theme-black transition-colors"
      />
    ),
  },
];

//homepage cards data
export const overviewCards = [
  {
    title: 'Avg. Order Value',
    amount: '$306.2',
    growth: -1.3,
    chartData: {
      options: {
        chart: {
          id: 'avg-order-value',
          toolbar: { show: false },
        },
        fill: {
          colors: '#21D59B',
          gradient: {
            shade: 'light',
            opacityFrom: 1,
            opacityTo: 0,
          },
        },
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'round',
          colors: ['#21D59B'],
          width: 2,
          dashArray: 0,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [5, 10, 8, 15, 8],
        },
      ],
    },
  },
  {
    title: 'Order Quantity',
    amount: 7650,
    growth: -1.2,
    chartData: {
      options: {
        chart: {
          id: 'order-quantity',
          toolbar: { show: false },
        },
        fill: {
          colors: '#FFC700',
          gradient: {
            shade: 'light',
            opacityFrom: 1,
            opacityTo: 0,
          },
        },
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'round',
          colors: ['#FFC700'],
          width: 2,
          dashArray: 0,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [10, 20, 10, 25, 20, 10],
        },
      ],
    },
  },
  {
    title: 'Unique Purchases',
    amount: 3137,
    growth: 2.3,
    chartData: {
      options: {
        chart: {
          id: 'unique-purchase',
          toolbar: { show: false },
        },
        fill: {
          colors: '#0058FF',
          gradient: {
            shade: 'light',
            opacityFrom: 1,
            opacityTo: 0,
          },
        },
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'round',
          colors: ['#0058FF'],
          width: 2,
          dashArray: 0,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        grid: {
          show: false,
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [10, 20, 10, 25, 20, 30],
        },
      ],
    },
  },
];

//analytics page cards data
export const analyticsCards = [
  {
    title: 'Total Sessions',
    amount: '14k',
    growth: 2.3,
    icon: <MdSync size={iconStyle.size} />,
  },
  {
    title: 'Total Bounce Rate',
    amount: '56%',
    growth: 2.1,
    icon: <FaPercent size={iconStyle.size} />,
  },
  {
    title: 'Total Revenues',
    amount: '$768,342',
    growth: -1.8,
    icon: <RiMoneyDollarCircleLine size={iconStyle.size} />,
  },
  {
    title: 'Total Users',
    amount: '20k',
    growth: 1.3,
    icon: <TbUsers size={iconStyle.size} />,
  },
];

//homepage chart data
export const homeChartData = {
  options: {
    chart: {
      id: 'total-sales',
      toolbar: { show: false },
    },
    legend: { position: 'top' },

    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: ['#0058FF', '#21D59B'],
      width: 2,
      dashArray: 0,
    },
    dataLabels: {
      enabled: false,
    },
    // tooltip: {
    //   enabled: false,
    // },
    grid: {
      show: false,
    },
    // xaxis: {
    // show: true,
    // type: 'category',
    // categories: ['Jan', 'Feb', 'Mar', 'Apr'],
    // labels: {
    //   show: true,
    // },
    // axisBorder: {
    //   show: false,
    // },
    // axisTicks: {
    //   show: false,
    // },
    // },
    // yaxis: {
    //   labels: {
    //     show: false,
    //   },
    // },
  },
  series: [
    {
      name: 'Offline',
      data: [
        { x: 'Jan', y: 8 },
        { x: 'Feb', y: 45 },
        { x: 'Mar', y: 23 },
        { x: 'Apr', y: 35 },
        { x: 'May', y: 23 },
        { x: 'Jun', y: 33 },
      ],
    },
    {
      name: 'Online',
      data: [
        { x: 'Jan', y: 12 },
        { x: 'Feb', y: 22 },
        { x: 'Mar', y: 45 },
        { x: 'Apr', y: 20 },
        { x: 'May', y: 43 },
        { x: 'Jun', y: 23 },
      ],
    },
  ],
};

//homepage your transaction table's data
export const yourTransaction = [
  {
    id: 1,
    date: 'Today',
    source: 'Starbucks Cafe',
    type: 'Food',
    amount: 15.14,
  },
  { id: 2, date: 'Today', source: 'Cash In', type: 'Egle', amount: 15.1214 },
  { id: 3, date: '14.12.22', source: 'Call In', type: 'Jigla', amount: 154.14 },
  {
    id: 4,
    date: 'Today',
    source: 'Spring Garden',
    type: 'Utilities',
    amount: 15.14,
  },
  {
    id: 5,
    date: 'today',
    source: 'Rodela Gant',
    type: 'Organic',
    amount: 150.14,
  },
  { id: 6, date: 'today', source: 'Email', type: 'Fashion', amount: 1995.14 },
];

//page hader buttons
export const pageHeaderButtons = [
  { text: 'Days' },
  { text: 'Weeks' },
  { text: 'Months' },
];

//analytics page column chart data
export const columnChartData = {
  series: [
    {
      name: 'Income',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Expense',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    grid: { show: false },
    xaxis: {
      categories: [
        'Feb 20',
        'Mar 20',
        'Apr 20',
        'May 20',
        'Jun 20',
        'Jul 20',
        'Aug 20',
        'Sep 20',
        'Oct 20',
      ],
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + '';
        },
      },
    },
  },
};

//analytics page pie chart data
export const pieChartData = {
  series: [44, 55, 41, 17, 15],

  options: {
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'bottom',
      // width: '100%',
      horizontalAlign: 'center',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  },
};

//notifications data
export const notificationsData = [
  { text: 'New order added', time: 'Just now' },
  { text: 'Order #675876 delivered', time: '2m ago' },
  { text: 'Order #674258 cancelled', time: '3m ago' },
  { text: 'Asad messaged you', time: '3m ago' },
  { text: 'Welcome to the new era', time: '6m ago' },
  { text: 'Order #675876 delivered', time: '7m ago' },
  { text: 'New order added', time: 'Just now' },
  { text: 'Order #675876 delivered', time: '8m ago' },
  { text: 'Order #674258 cancelled', time: '10m ago' },
  { text: 'Asad messaged you', time: '1h ago' },
  { text: 'Welcome to the new era', time: '1h ago' },
  { text: 'Order #675876 delivered', time: '2h ago' },
];
