import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './cardcomponent.css';

function CardComponent(props) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Handle both { product } object and direct props
  const product = props.product || props;
  const isWished = isInWishlist(product._id);

  const handleNavigate = () => {
    navigate(`/product/${product._id || ''}`);
  };

  return (
    <div className="cards-component">
      <div className="card-img-wrapper" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
        <img src={product.image} alt={product.title || 'Product'} />
        <button
          type="button"
          className={`wishlist-heart-btn ${isWished ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label="Toggle wishlist"
        >
          <i className={`fa-${isWished ? 'solid' : 'regular'} fa-heart`}></i>
        </button>
      </div>

      <div className="card-others">
        <p className="card-title" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
          {product.title}
        </p>

        <div className="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <span style={{ fontSize: '11px', color: '#888', marginLeft: '4px' }}>
            ({product.reviewsCount || 12})
          </span>
        </div>

        <div className="price-details">
          <p className="price-tag">
            ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
          </p>
          <div className="card-actions">
            <button
              type="button"
              className="quick-cart-btn"
              onClick={() => addToCart(product, 'M', 'Default', 1)}
              title="Add to Cart"
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
            <button
              type="button"
              className="view-btn"
              onClick={handleNavigate}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;