import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardComponent from './cardcomponent';
import { api } from '../../services/api';

const ShopProductGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromUrl = searchParams.get('search') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(300);
  const [selectedSize, setSelectedSize] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [searchKeyword, setSearchKeyword] = useState(searchFromUrl);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync state if URL search query changes
  useEffect(() => {
    setSearchKeyword(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    let isMounted = true;
    const fetchShopProducts = async () => {
      setLoading(true);
      try {
        const queryParams = {
          category: selectedCategory,
          maxPrice,
          sort: sortBy,
          search: searchKeyword,
        };
        const data = await api.getProducts(queryParams);

        let filtered = data;
        if (selectedSize) {
          filtered = filtered.filter(
            (p) => p.sizes && p.sizes.includes(selectedSize)
          );
        }

        if (isMounted) setProducts(filtered);
      } catch (err) {
        console.error('Error fetching shop products:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchShopProducts();

    return () => {
      isMounted = false;
    };
  }, [selectedCategory, maxPrice, selectedSize, sortBy, searchKeyword]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setMaxPrice(300);
    setSelectedSize('');
    setSortBy('newest');
    setSearchKeyword('');
    setSearchParams({});
  };

  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="shopGrid-main">
      <div className="Productfilter">
        <p className="product-count-text">
          {loading ? 'Updating catalog...' : `Showing ${products.length} products`}
          {searchKeyword && ` for "${searchKeyword}"`}
        </p>

        <div className="filter-controls-group">
          {/* Mobile Filter Toggle Button */}
          <button
            type="button"
            className="mobile-filter-btn"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            aria-label="Toggle Filters"
          >
            <i className="fa-solid fa-sliders"></i>
            {showMobileFilters ? 'Hide Filters' : 'Filters'}
          </button>

          <div className="sort-wrapper">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="shopGrid-container">
        {/* Filters Sidebar */}
        <aside className={`filter-box ${showMobileFilters ? 'open' : ''}`}>
          <div className="filter-box-header">
            <h2 className="title">
              <i className="fa-solid fa-sliders" style={{ marginRight: '8px' }}></i> Filters
            </h2>
            <button
              type="button"
              className="mobile-filter-close"
              onClick={() => setShowMobileFilters(false)}
            >
              &times;
            </button>
          </div>

          {/* Search in Shop */}
          <div className="section">
            <h3>Keyword Search</h3>
            <input
              type="text"
              placeholder="Filter by keyword..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="filter-search-input"
            />
          </div>

          {/* Category */}
          <div className="section">
            <h3>Category</h3>
            {categories.map((cat) => (
              <label key={cat} className="filter-category-label">
                <input
                  type="radio"
                  name="shop-category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="section">
            <h3>Max Price</h3>
            <div className="price">
              <span>$0</span>
              <span>${maxPrice}</span>
            </div>
            <input
              type="range"
              min="20"
              max="300"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          {/* Size */}
          <div className="section">
            <h3>Size</h3>
            <div className="sizes">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  className={selectedSize === sz ? 'size-btn active' : 'size-btn'}
                  onClick={() => setSelectedSize(selectedSize === sz ? '' : sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="clear-btn"
            onClick={() => {
              clearFilters();
              setShowMobileFilters(false);
            }}
          >
            Clear All Filters
          </button>
        </aside>

        {/* Right side product grid */}
        <div className="shopright">
          {loading ? (
            <div className="shop-loading-state">
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '24px', marginBottom: '10px' }}></i>
              <p>Fetching garments from MongoDB...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="shop-empty-state">
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '36px', marginBottom: '12px', color: '#ccc' }}></i>
              <h3>No products found</h3>
              <p>Try resetting filters or adjusting your search keyword.</p>
              <button
                type="button"
                className="clear-btn"
                onClick={clearFilters}
                style={{ maxWidth: '200px', margin: '1rem auto 0' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            products.map((p) => <CardComponent key={p._id} product={p} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopProductGrid;