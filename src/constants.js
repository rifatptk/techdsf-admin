import { BiHome } from 'react-icons/bi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { TbFileInvoice } from 'react-icons/tb';
import { TbUsers } from 'react-icons/tb';
import { TbCalendarEvent } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';

const iconStyle = { size: 24, color: '#7E84A3' };

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

export const overviewCards = [
  {
    title: 'Avg. Order Value',
    amount: 306.2,
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
          data: [10, 20, 10, 25, 20, 8],
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
          data: [0, 20, 10, 25, 20, 0],
        },
      ],
    },
  },
];

export const homeChartData = {
  options: {
    title: { text: 'Total Sales', margin: 32, fontFamily: '"Poppins", Arial' },
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
    xaxis: {
      show: true,
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    // yaxis: {
    //   labels: {
    //     show: false,
    //   },
    // },
  },
  series: [
    {
      name: 'Offline',
      data: [0, 20, 10, 25, 20, 0],
    },
    {
      name: 'Online',
      data: [10, 30, 5, 25, 10, 15, 17, 0],
    },
  ],
};

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
