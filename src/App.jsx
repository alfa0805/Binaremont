import React, { useEffect, useState } from 'react';
import Header from './Companents/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Companents/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Mosaic } from 'react-loading-indicators';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 500,
      offset:0,
      once: false,
      easing: 'ease-in-out',
      delay: 100,
      mirror: true 
    });

    // Loading ni 2 sekundda yo‘q qilish
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen bg-[#d57e1a] flex justify-center items-center text-center">
        <Mosaic
          color="#84530b"
          size="large"
          text="House Hub"
          textColor="#84530b"
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
