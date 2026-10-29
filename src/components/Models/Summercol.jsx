import React from 'react';
import { useNavigate } from 'react-router-dom';
import summerimage from '../../assets/images/Summer Collection.png';

function Summercol() {
  const navigate = useNavigate();

  return (
    <section className="summer">
      <div className="summer-container">
        <div className="summer-left">
          <h1>Summer Collection</h1>
          <p>
            Embrace the warmth of summer with our latest collection. 
            Fresh styles, vibrant colors, and comfortable fabrics 
            perfect for the season.
          </p>

          <button
            type="button"
            className="summer-btn"
            onClick={() => navigate('/Shop')}
          >
            View Collection &rarr;
          </button>
        </div>

        <div className="summer-right">
          <img src={summerimage} alt="LUXE Summer Collection" />
        </div>
      </div>
    </section>
  );
}

export default Summercol;