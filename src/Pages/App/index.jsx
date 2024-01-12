import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrderLast from '../MyOrderLast';
import { Sign } from '../Sign';
import Navbar from '../../Components/Navbar';
import { MiContextProvider } from '../../Components/Context';
import './App.css';

// Usamos Routes
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clothes" element={<Home />} />
      <Route path="/jewelery" element={<Home />} />
      <Route path="/electronics" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-orders/last" element={<MyOrderLast />} />
      <Route path="/my-orders/:id" element={<MyOrderLast />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  );
};

const App = () => {   
  return (
    <MiContextProvider>
      <BrowserRouter basename='/shopi-online/'>
        <AppRoutes />
        <Navbar />

      </BrowserRouter>
    </MiContextProvider>
  );
};

export default App;
