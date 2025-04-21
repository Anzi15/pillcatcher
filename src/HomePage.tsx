import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ProductShowcase from './components/ProductShowcase';
import FaqsSection from './components/FAQs';
import Footer from './components/Footer';
import BuyNow from './components/BuyNow';
import CheckoutForm from './components/Checkout/CheckoutForm';
import ThankYou from './components/ThankYou';
import Login from './components/Admin/Login';
import Dashboard from './components/Admin/Dashboard';
import orders from './data/orders.json';
import VideoEmbed from './components/Demo';
import ChildrenEating from './components/ChildrenEating';
import DolphinProductCard from './components/DolphinProductCard';

function Home() {
  const [currentView, setCurrentView] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [cart, setCart] = useState({ quantity: 1, total: 29.99 });

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleOrderSuccess = (orderData) => {
    const updatedOrders = [...orders, orderData];
    console.log('Order saved:', orderData);
    setCurrentView('thank-you');
  };

  if (window.location.pathname === '/admin') {
    if (!isAdminLoggedIn) {
      return <Login onLogin={() => setIsAdminLoggedIn(true)} />;
    }
    return <Dashboard onLogout={() => setIsAdminLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">

      <main className="pt-16">
        {currentView === 'home' && (
          <>
            <Hero />
              <div className='w-full flex justify-center items-center'>
                <img src="/pillcatcher.jpg" alt="" className='w-full' />
              </div>
            <VideoEmbed />
              <ProductShowcase />
              <DolphinProductCard />
            <ChildrenEating />
          </>
        )}
        {/* {currentView === 'buy' && (
          <BuyNow onCheckout={() => setCurrentView('checkout')} />
        )}
        {currentView === 'checkout' && (
          <CheckoutForm 
            total={cart.total * cart.quantity} 
            onSuccess={handleOrderSuccess}
          />
        )} */}
        {/* {currentView === 'thank-you' && <ThankYou />} */}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
