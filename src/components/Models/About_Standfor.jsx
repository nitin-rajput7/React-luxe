import React from 'react'
import delivery from '../../assets/images/SVG.png'
import customerfocus from '../../assets/images/customer.png'
import substance from '../../assets/images/substance.png'
import sustainable from '../../assets/images/sustainable.png'
function About_Standfor() {
  return (
    <>
    
       <div className="standfor-main">
            <h1>What We Stand For</h1>
        <div className="standfor-container">
            <div className="standfor-box">
                
                    <div className="box-svg displayflexcenter"><img src={delivery} alt="" /></div>
                    <p className='boldp'>Quality First</p>
                    <p className='whyp'>Every piece is carefully selected and tested
for durability and comfort.  </p>
    
             
            </div>
            <div className="standfor-box">
                
                    <div className="box-svg displayflexcenter"><img src={customerfocus} alt="" /></div>
                    <p className='boldp'>Customer Focused</p>
                    <p className='whyp' >Your satisfaction is our priority. We're here to
help at every step.</p>
    
             
            </div>
            <div className="standfor-box">
                
                    <div className="box-svg displayflexcenter"><img src={substance} alt="" /></div>
                    <p className='boldp'>Style & Substance</p>
                    <p className='whyp'>Fashion that looks good and feels great,
without compromise.</p>
    
             
            </div>
            <div className="standfor-box">
                
                    <div className="box-svg displayflexcenter"><img src={sustainable} alt="" /></div>
                    <p className='boldp'>Sustainable</p>
                    <p className='whyp'>Committed to ethical practices and
environmental responsibility.</p>
    
             
            </div>
        </div>
       </div>
       
       
    </>
  )
}

export default About_Standfor