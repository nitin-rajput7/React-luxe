import React from 'react'
import marsmellow from '../../assets/images/SarahJohnson.png'

function About_Meetourteam() {
  return (
    <>
       
    <div className='meeting-maindiv'>
       <h1>Meet Our Team</h1>
      <div className="meeting-container">
        <div className="meet-cards">
          <img src={marsmellow} alt="" />
          <h3>Sarah Johnson</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="meet-cards">
          <img src={marsmellow} alt="" />
          <h3>Sarah Johnson</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="meet-cards">
          <img src={marsmellow} alt="" />
          <h3>Sarah Johnson</h3>
          <p>Founder & CEO</p>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default About_Meetourteam