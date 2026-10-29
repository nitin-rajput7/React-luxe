import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from './cardcomponent';
import { api } from '../../services/api';

function TrendingP() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchTrending = async () => {
      try {
        const data = await api.getProducts({ featured: true });
        if (isMounted) {
          // If less than 4, take first 4 from all products
          if (data && data.length >= 4) {
            setProducts(data.slice(0, 4));
          } else {
            const all = await api.getProducts();
            setProducts(all.slice(0, 4));
          }
        }
      } catch (err) {
        console.error('Failed to load trending products', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchTrending();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="trending-main" style={{ padding: '3rem 7vw', maxWidth: '1440px', margin: '0 auto' }}>
      <div className="tp" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 700, margin: 0, color: '#111' }}>Trending Products</h2>
        <Link to="/Shop" style={{ textDecoration: 'none', color: '#111', fontWeight: 600, fontSize: '0.95rem' }}>
          View All &rarr;
        </Link>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>
          Loading trending styles...
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.75rem',
            justifyItems: 'center',
          }}
        >
          {products.map((item) => (
            <CardComponent key={item._id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingP;