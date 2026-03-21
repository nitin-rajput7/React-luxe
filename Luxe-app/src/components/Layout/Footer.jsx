import React from 'react'


function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="footer-container">

          <div className="footer-box">
            <h2>LUXE</h2>
            <p>
              Premium fashion for everyday confidence. Discover timeless style
              with our curated collection of high-quality clothing and
              accessories.
            </p>

            <div className="footer-icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact</li>
              <li>Collections</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Customer Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>FAQs</li>
              <li>Size Guide</li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Stay Updated</h3>
            <p>Subscribe to get special offers and updates.</p>

            <button className="footer-btn">Join</button>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 LUXE. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
