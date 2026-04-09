import React from 'react'
import summerimage from '../../assets/images/Summer\ Collection.png'

function Summercol() {
  return (
    <>

  <section class="summer">
  <div class="summer-container">

    
    <div class="summer-left">
      <h1>Summer Collection</h1>
      <p>
        Embrace the warmth of summer with our latest collection. 
        Fresh styles, vibrant colors, and comfortable fabrics 
        perfect for the season.
      </p>

      <button class="summer-btn">
        View Collection →
      </button>
    </div>

    
    <div class="summer-right">
      <img src={summerimage} alt="" />
     
    </div>

  </div>
</section>
    
    </>
  );
}

export default Summercol ; 