import './App.css';
import MainDash from './Components/MainDash/MainDash';
import Sidebar from './Components/Sidebar';
import Orders from './Components/Orders/Orders';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Products from './Components/Products/Products';
import OrderCalendar from './Components/OrderCalendar/OrderCalendar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar />
          <Routes>
            
            <Route path="/" element={<MainDash />} />
            <Route path="/maindash" element={<MainDash />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/ordercalendar" element={<OrderCalendar />} />
           
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;