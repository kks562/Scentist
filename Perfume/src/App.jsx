import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductDetail from './ProductDetail';
import Cart1 from './Cart1';
import { CartProvider } from './CartContext';
import ProductGrid from './Components/ProductGrid';
import Contact from './Contact';
import About from './Components/About';
import Payment from './Payment';
import './index.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/mens" element={<ProductGrid gender="men" />} />
          <Route path="/womens" element={<ProductGrid gender="women" />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart1 />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
