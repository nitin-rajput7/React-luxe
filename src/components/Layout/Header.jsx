import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./Header.css";

function Header() {
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="site-header">
      <nav className="Navbar">
        <div className="mainlogo">
          <Link to="/">LUXE</Link>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="icons">
          {/* Search Trigger */}
          <button
            type="button"
            className="icon-btn"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle Search"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* Wishlist Link */}
          <Link to="/Shop" className="icon-btn wishlist-icon" aria-label="Wishlist">
            <i className="fa-regular fa-heart"></i>
            {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
          </Link>

          {/* Cart Trigger */}
          <button
            type="button"
            className="icon-btn cart-icon"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Shopping Bag"
          >
            <i className="fa-solid fa-cart-arrow-down"></i>
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </button>

          {/* Contact / Profile */}
          <Link to="/Contact" className="icon-btn" aria-label="Customer Care">
            <i className="fa-regular fa-address-book"></i>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </nav>

      {/* Expandable Search Bar */}
      {showSearch && (
        <div className="header-search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search luxury garments, coats, dresses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Search</button>
            <button
              type="button"
              className="search-close"
              onClick={() => setShowSearch(false)}
            >
              &times;
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
