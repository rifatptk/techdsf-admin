import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import Invoices from './pages/Invoices';
import Calendar from './pages/Calendar';
import Customers from './pages/Customers';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { useState } from 'react';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="fixed z-10 w-full ">
          <Navbar />
        </div>
        <div className="flex w-full">
          <div
            className={`fixed z-0  ${
              sidebarExpanded ? 'w-[250px]' : 'w-[65px]'
            } transition-all pt-[70px] `}
          >
            <Sidebar
              isExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          </div>
          <div
            className={`main w-full ${
              sidebarExpanded ? 'ml-[250px]' : 'ml-[65px]'
            } transition-all  mt-[70px]`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
