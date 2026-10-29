import React, { useRef, useState, useEffect } from 'react';
import CardComponent from './cardcomponent';
import { FALLBACK_PRODUCTS } from '../../services/api';

function Detailpg_cardcontainer() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Provide 8 curated complementary luxury items
  const recommendations = FALLBACK_PRODUCTS.slice(0, 8);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (currentRef) currentRef.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 304; // 280px card + 24px gap
      const scrollDistance = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      scrollContainerRef.current.scrollBy({
        left: scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="ensemble-main">
      <div className="ensemble-heading">
        <div>
          <h2>Complete the Ensemble</h2>
          <p className="ensemble-sub">Curated pieces tailored to harmonize with your selection</p>
        </div>

        <div className="scroll-btn">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="carousel-nav-btn"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="carousel-nav-btn"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="ensemble-card-container" ref={scrollContainerRef}>
        {recommendations.map((item) => (
          <div key={item._id} className="ensemble-card-item">
            <CardComponent product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detailpg_cardcontainer;