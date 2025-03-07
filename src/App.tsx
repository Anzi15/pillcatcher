import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./HomePage";
import BuyNow from './components/BuyNow';
import NavBar from './components/NavBar';
import CheckoutPage from './components/Checkout/CheckoutForm';
import ThankYouPage from './components/ThankyouPage';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
