import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/footer';
import Contact from '../pages/Contact/contact';
import Login from '../pages/Login/login';
import Products from '../pages/Products/products';
import About from '../pages/About/about';
import Home from '../pages/Home/home';

function AppRoutes() {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
