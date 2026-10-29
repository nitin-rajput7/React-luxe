import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useCart } from '../../context/CartContext';

function Layout() {
  const { toastMessage } = useCart();

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Global Slide-Over Cart Drawer */}
      <CartDrawer />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#111111',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          zIndex: 10000,
          fontSize: '14px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'fadeInOverlay 0.2s ease-out'
        }}>
          <i className="fa-solid fa-check" style={{ color: '#10b981' }}></i>
          {toastMessage}
        </div>
      )}
    </>
  );
}

export default Layout;