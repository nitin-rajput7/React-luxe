import React from 'react';
import { Link } from 'react-router-dom';

const Shop_allproduct = () => {
  return (
    <div className="shopallproduct-main">
      <h1>Shop All Products</h1>
      <div className="Links">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </li>
          <li>/</li>
          <li style={{ fontWeight: 600 }}>Shop Collection</li>
        </ul>
      </div>
    </div>
  );
};

export default Shop_allproduct;