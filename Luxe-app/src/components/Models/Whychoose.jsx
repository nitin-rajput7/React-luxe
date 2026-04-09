import React from 'react'
import svg from "../../assets/images/SVG.png"
import svg1 from "../../assets/images/SVG (1).png"
import svg2 from "../../assets/images/SVG (2).png"
import svg3 from "../../assets/images/SVG (3).png"
function Whychoose(){
  return (
   <>

   <div className="whychoose-main">
        <h1>Why Choose Us</h1>
    <div className="whychoose-container">
        <div className="whych-box">
            
                <div className="box-svg displayflexcenter"><img src={svg} alt="" /></div>
                <p className='boldp'>Premium Quality</p>
                <p className='whyp'>Carefully selected materials and
                   exceptional craftsmanship</p>

         
        </div>
        <div className="whych-box">
            
                <div className="box-svg displayflexcenter"><img src={svg1} alt="" /></div>
                <p className='boldp'>Free Delivery</p>
                <p className='whyp' >Free shipping on all orders over $100</p>

         
        </div>
        <div className="whych-box">
            
                <div className="box-svg displayflexcenter"><img src={svg2} alt="" /></div>
                <p className='boldp'>Easy Return</p>
                <p className='whyp'>30-day hassle-free return policy</p>

         
        </div>
        <div className="whych-box">
            
                <div className="box-svg displayflexcenter"><img src={svg3} alt="" /></div>
                <p className='boldp'>Secure Payment</p>
                <p className='whyp'>100% secure payment processing</p>

         
        </div>
    </div>
   </div>
   
   
   </>
  );
}

export default Whychoose