import React from 'react'

import '../Models/cardcomponent.css'

function cardcomponent(product) {
  return (
     <div className="cards-component">
        <div className="card-img1 card-img-- "><img src={product.image} alt="" /></div>
        <div className="card-others">
          <p>{product.title}</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
          <div className="price-details">
            <p>{product.price}</p>
            <button  onClick={() => navigate("/Detailpage")}>   View Details </button>
          </div>
        </div>
      </div>
  );
}

export default cardcomponent