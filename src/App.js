import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import Invoices from './pages/Invoices';
import Calendar from './pages/Calendar';
import Customers from './pages/Customers';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { useState } from 'react';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        ) : (
          <>
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
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
