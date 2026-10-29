import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-box">
          <h2>LUXE</h2>
          <p>
            Premium fashion for everyday confidence. Discover timeless style
            with our curated collection of high-quality clothing and
            accessories.
          </p>

          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <Link to="/Contact" aria-label="Email Concierge">
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </div>
        </div>

        <div className="footerbox">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/About" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></li>
            <li><Link to="/Shop" style={{ textDecoration: 'none', color: 'inherit' }}>Shop Collection</Link></li>
            <li><Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Concierge</Link></li>
            <li><Link to="/Shop?category=Women" style={{ textDecoration: 'none', color: 'inherit' }}>Women's Atelier</Link></li>
            <li><Link to="/Shop?category=Men" style={{ textDecoration: 'none', color: 'inherit' }}>Men's Tailoring</Link></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Customer Support</h3>
          <ul>
            <li><Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>Help & FAQs</Link></li>
            <li>Shipping & Complimentary Delivery</li>
            <li>30-Day Bespoke Returns</li>
            <li>Size & Fit Consultations</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Stay Updated</h3>
          <p>Subscribe to receive private salon invitations and seasonal preview lookbooks.</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #444',
                backgroundColor: '#222',
                color: '#fff',
                fontSize: '13px'
              }}
            />
            <button className="footer-btn" type="button">Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 LUXE Fashion Atelier. All rights reserved. | Built with MongoDB, Express, React & Node.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;
