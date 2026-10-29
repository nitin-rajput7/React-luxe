import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api, FALLBACK_PRODUCTS } from '../../services/api';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

function Detailpg_productdetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        if (id) {
          const data = await api.getProductById(id);
          if (isMounted) {
            setProduct(data);
            if (data?.sizes?.length) setSelectedSize(data.sizes[0]);
            if (data?.colors?.length) setSelectedColor(data.colors[0]);
          }
        } else {
          // Default to first product if no ID specified
          const defaultProd = FALLBACK_PRODUCTS[1]; // Elegant Black Dress
          if (isMounted) {
            setProduct(defaultProd);
            setSelectedSize('M');
            setSelectedColor(defaultProd.colors ? defaultProd.colors[0] : 'Black');
          }
        }
      } catch (err) {
        console.error('Error loading product details:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center', color: '#666' }}>
        <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '28px', marginBottom: '12px' }}></i>
        <p>Loading luxury product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p>The requested luxury garment could not be retrieved.</p>
        <Link to="/Shop" className="luxe-primary-btn" style={{ display: 'inline-block', maxWidth: '200px' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  const isWished = isInWishlist(product._id);
  const sizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL'];
  const colors = product.colors || ['Classic Black', 'Onyx Grey'];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="product-container" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 2rem' }}>
      {/* LEFT IMAGE */}
      <div className="product-image" style={{ position: 'relative' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', maxHeight: '600px', objectFit: 'cover', borderRadius: '12px' }}
        />
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            fontSize: '18px',
            color: isWished ? '#e11d48' : '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Save to Wishlist"
        >
          <i className={`fa-${isWished ? 'solid' : 'regular'} fa-heart`}></i>
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="product-details">
        <p className="category" style={{ letterSpacing: '2px', color: '#888', fontSize: '13px', fontWeight: 600 }}>
          {product.category?.toUpperCase()} / ATELIER
        </p>

        <h1 style={{ fontSize: '2rem', margin: '0.5rem 0', fontWeight: 700 }}>{product.title}</h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.8rem' }}>
          <div className="rating" style={{ color: '#f59e0b', fontSize: '13px' }}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
          </div>
          <span style={{ fontSize: '13px', color: '#666' }}>
            {product.rating || 4.9} ({product.reviewsCount || 24} verified reviews)
          </span>
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0 1.25rem 0', color: '#111' }}>
          ${Number(product.price).toFixed(2)}
        </h2>

        <p className="desc" style={{ lineHeight: '1.7', color: '#555', marginBottom: '1.5rem' }}>
          {product.description}
        </p>

        {/* COLORS */}
        <div className="section" style={{ marginBottom: '1.25rem' }}>
          <p className="label" style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px' }}>
            COLOR: <span style={{ textTransform: 'uppercase', color: '#222' }}>{selectedColor}</span>
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedColor(c)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: selectedColor === c ? '2px solid #000' : '1px solid #ccc',
                  backgroundColor: selectedColor === c ? '#000' : '#fff',
                  color: selectedColor === c ? '#fff' : '#000',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* SIZE */}
        <div className="section" style={{ marginBottom: '1.5rem' }}>
          <div className="size-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <p className="label" style={{ fontWeight: 600, fontSize: '13px', margin: 0 }}>
              SELECT SIZE: <strong>{selectedSize}</strong>
            </p>
            <span className="size-guide" style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', color: '#666' }}>
              SIZE GUIDE
            </span>
          </div>

          <div className="sizes" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: selectedSize === sz ? '2px solid #000' : '1px solid #ddd',
                  backgroundColor: selectedSize === sz ? '#000' : '#fff',
                  color: selectedSize === sz ? '#fff' : '#000',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  minWidth: '45px',
                }}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* QUANTITY AND ADD TO CART */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              style={{ background: 'none', border: 'none', padding: '10px 16px', cursor: 'pointer', fontSize: '16px' }}
            >
              -
            </button>
            <span style={{ padding: '0 8px', fontWeight: 600 }}>{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              style={{ background: 'none', border: 'none', padding: '10px 16px', cursor: 'pointer', fontSize: '16px' }}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="cart-btn"
            onClick={handleAddToCart}
            style={{
              flex: 1,
              backgroundColor: '#111',
              color: '#fff',
              border: 'none',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '1px',
              cursor: 'pointer',
            }}
          >
            ADD TO BAG (${(Number(product.price) * quantity).toFixed(2)})
          </button>
        </div>

        {/* INFO BOX */}
        <div className="info-box" style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '8px', fontSize: '13px', color: '#555' }}>
          <p style={{ margin: '0 0 6px 0' }}>
            <i className="fa-solid fa-truck-fast" style={{ marginRight: '8px', color: '#111' }}></i>
            Complimentary White Glove Delivery on orders over $150
          </p>
          <p style={{ margin: 0 }}>
            <i className="fa-solid fa-rotate-left" style={{ marginRight: '8px', color: '#111' }}></i>
            30-Day Bespoke Atelier Return & Exchange Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detailpg_productdetail;