import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Calendar from './pages/Calendar';
import Customers from './pages/Customers';
import Home from './pages/Home';
import Invoices from './pages/Invoices';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
