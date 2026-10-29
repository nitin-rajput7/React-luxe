import React from "react";

const reviewsData = [
  {
    title: "A masterpiece of silhouette",
    name: "Elena Rostova",
    date: "October 14, 2026",
    review:
      "The drape of the silk is unparalleled. It fits true to size and the side slit adds just the right amount of movement. I wore it to an opera gala and received endless compliments throughout the evening.",
    rating: 5,
  },
  {
    title: "Pure sophistication & packaging",
    name: "Marcus Thorne",
    date: "September 28, 2026",
    review:
      "Ordered this piece for an anniversary celebration. The black linen bespoke gift box and ribbon presentation alone set a new standard for luxury fashion.",
    rating: 5,
  },
  {
    title: "Unmatched Craftsmanship & Hand-feel",
    name: "Sophia Laurent",
    date: "September 12, 2026",
    review:
      "The texture, stitching, and weight of the fabric are extraordinary. Breathable yet substantial. Truly heirloom-grade fashion.",
    rating: 5,
  },
  {
    title: "Exquisite tailoring and drape",
    name: "Alexander Wright",
    date: "August 30, 2026",
    review:
      "The precision in the neckline and seam work is immediately obvious. Comfortable for all-day wear while projecting commanding elegance.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      {/* LEFT SIDE */}
      <div className="reviews-left">
        <h1>Reviews & Ratings</h1>

        <div className="rating-summary">
          <h2>4.9</h2>
          <div className="stars">★★★★★</div>
          <p>BASED ON 148 VERIFIED PATRONS</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="reviews-right">
        {reviewsData.map((item, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <h3>"{item.title}"</h3>
              <span className="stars">★★★★★</span>
            </div>

            <p className="review-user">
              <strong>{item.name}</strong> — VERIFIED BUYER &bull; <span style={{ color: '#888' }}>{item.date}</span>
            </p>

            <p className="review-text">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;