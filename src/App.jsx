import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Webpages/Home';
import Shop from './components/Webpages/Shop';
import About from './components/Webpages/About';
import Contact from './components/Webpages/Contact';
import Detailpage from './components/Webpages/Detailpage';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="Shop" element={<Shop />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Detailpage" element={<Detailpage />} />
              <Route path="product/:id" element={<Detailpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;