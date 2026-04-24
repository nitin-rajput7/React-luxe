import React from "react";


const reviewsData = [
  {
    title: "A masterpiece of silhouette",
    name: "Elena V.",
    review:
      "The drape of the silk is unparalleled. It fits true to size and the side slit adds just the right amount of movement. I wore it to a gallery opening and received endless compliments.",
    rating: 5,
  },
  {
    title: "Pure sophistication",
    name: "Marcus T.",
    review:
      "Bought this for my wife. The quality of the packaging alone felt like a luxury experience. The dress itself is timeless.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">

      {/* LEFT SIDE */}
      <div className="reviews-left">
        <h1>Reviews</h1>

        <div className="rating-summary">
          <h2>4.9</h2>
          <div className="stars">★★★★★</div>
          <p>BASED ON 124 REVIEWS</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="reviews-right">
        {reviewsData.map((item, index) => (
          <div className="review-card" key={index}>
            
            <div className="review-header">
              <h3>"{item.title}"</h3>
              <span className="stars">{"★★★★"}</span>
            </div>

            <p className="review-user">
              {item.name} — VERIFIED BUYER
            </p>

            <p className="review-text">{item.review}</p>

          </div>
        ))}componentDidCatch(error, info) {
          
        }
      </div>

    </div>
  );
};

export default Reviews;