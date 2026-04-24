import React from "react";
  

const CompositionCare = () => {
  return (
    <div className="care-container">

      {/* LEFT TEXT */}
      <div className="care-left">
        <h1>Composition & Care</h1>
        <p>
          95% Mulberry Silk, 5% Elastane. Lining: 100% Silk Georgette.
        </p>
      </div>

      {/* RIGHT BOXES */}
      <div className="care-right">

        <div className="care-box">
          <i class="fa-solid fa-shirt"></i>
          <p>HAND WASH COLD</p>
        </div>

        <div className="care-box">
          <i class="fa-regular fa-circle-xmark"></i>
          <p>DO NOT BLEACH</p>
        </div>

        <div className="care-box">
          <i>⌁</i>
          <p>LOW IRON</p>
        </div>

      </div>

    </div>
  );
};

export default CompositionCare;