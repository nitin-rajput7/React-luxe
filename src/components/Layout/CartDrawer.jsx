import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { api } from '../../services/api';
import './CartDrawer.css';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shippingFee,
    totalAmount,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  if (!isCartOpen) return null;

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.address || !formData.city) {
      setError('Please fill in all required shipping fields.');
      return;
    }

    setLoading(true);
    try {
      const orderPayload = {
        items: cart.map((item) => ({
          product: item.product._id,
          title: item.product.title,
          price: item.product.price,
          quantity: item.quantity,
          size: item.size,
          image: item.product.image,
        })),
        customer: formData,
        subtotal,
        shippingFee,
        totalAmount,
      };

      const result = await api.createOrder(orderPayload);
      if (result.success || result.data) {
        setOrderPlaced(result.data);
        clearCart();
        setIsCheckingOut(false);
      } else {
        setError(result.message || 'Failed to submit order');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setIsCartOpen(false);
    setOrderPlaced(null);
    setIsCheckingOut(false);
    setError('');
  };

  return (
    <div className="cart-drawer-overlay" onClick={resetAndClose}>
      <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <h2>
            <i className="fa-solid fa-bag-shopping"></i> Your Luxury Bag
          </h2>
          <button className="cart-close-btn" onClick={resetAndClose} aria-label="Close cart">
            &times;
          </button>
        </div>

        {/* Order Confirmed Screen */}
        {orderPlaced ? (
          <div className="cart-success-view">
            <div className="success-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h3>Thank You for Your Order!</h3>
            <p className="order-id">
              Order ID: <strong>{orderPlaced._id || 'CONFIRMED'}</strong>
            </p>
            <p className="success-note">
              A confirmation email has been sent to <strong>{formData.email}</strong>. We are preparing your luxury garments.
            </p>
            <button className="luxe-primary-btn" onClick={resetAndClose}>
              Continue Shopping
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Form View */
          <div className="cart-checkout-view">
            <h3>Shipping & Contact Details</h3>
            {error && <div className="cart-error-banner">{error}</div>}
            <form onSubmit={handleCheckoutSubmit} className="cart-checkout-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Eleanor Vance"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="eleanor@example.com"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="10001"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Street Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Fifth Avenue, Apt 4B"
                  required
                />
              </div>

              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  required
                />
              </div>

              <div className="checkout-summary-mini">
                <div className="sum-row">
                  <span>Total Due:</span>
                  <strong>${totalAmount.toFixed(2)}</strong>
                </div>
              </div>

              <div className="checkout-btn-group">
                <button
                  type="button"
                  className="luxe-secondary-btn"
                  onClick={() => setIsCheckingOut(false)}
                  disabled={loading}
                >
                  Back to Bag
                </button>
                <button type="submit" className="luxe-primary-btn" disabled={loading}>
                  {loading ? 'Processing...' : `Place Order ($${totalAmount.toFixed(2)})`}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Normal Cart Items View */
          <>
            <div className="cart-items-list">
              {cart.length === 0 ? (
                <div className="cart-empty-state">
                  <i className="fa-solid fa-basket-shopping empty-icon"></i>
                  <p>Your luxury bag is currently empty.</p>
                  <button className="luxe-primary-btn" onClick={resetAndClose}>
                    Explore Collection
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={`${item.product._id}-${item.size}-${index}`} className="cart-item-card">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <h4>{item.product.title}</h4>
                      <p className="item-specs">
                        Size: <span>{item.size}</span>
                      </p>
                      <p className="item-price">${Number(item.product.price).toFixed(2)}</p>

                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product._id,
                              item.size,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product._id,
                              item.size,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.product._id, item.size, item.color)}
                      title="Remove item"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {shippingFee === 0 ? 'Complimentary (Free)' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>

                <button className="luxe-primary-btn" onClick={() => setIsCheckingOut(true)}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
