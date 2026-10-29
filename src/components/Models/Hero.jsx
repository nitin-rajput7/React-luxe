import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="Hero">
      <div className="hero-text">
        <h1>Discover Your Style</h1>
        <p>Premium fashion for everyday confidence</p>
        <div className="hero-btn">
          <button type="button" onClick={() => navigate('/Shop')}>
            Shop Now &rarr;
          </button>
          <button
            type="button"
            className="outline"
            onClick={() => navigate('/Shop')}
          >
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;