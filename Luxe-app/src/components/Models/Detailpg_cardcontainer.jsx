import React from 'react'
import Cardcomponent from './cardcomponent'

// image---
import leatherjac from '../../assets/images/Background\ \(1\).png'
import elegantdress from '../../assets/images/Elegant\ Black\ Dress.png'
import winterwool from '../../assets/images/Winter\ Wool\ Coat.png'
import whitetshirt from '../../assets/images/Background.png'
import whitesneaker from '../../assets/images/Premium\ White\ Sneakers.png'
import handbag from '../../assets/images/Accessories.png'
import denimjeans from '../../assets/images/Background\ \(3\).png'
import leatherboot from '../../assets/images/Background\ \(5).png'
import beigesweater from '../../assets/images/Background\ \(2).png'
import streethoodie from '../../assets/images/Street\ Style\ Hoodie.png'
import casualshirt from '../../assets/images/Background\ \(4).png'
import kids from '../../assets/images/kids.png'

function Detailpg_cardcontainer() {
      let product =[
        {
        title: "Classiic White T-shirt",
        price:"$29.99",
        image:"",
        }
        
      ]
  return (
    <>
    <div className="ensemble-main">
      <div className="ensemble-heading">
      <h1>Complete the Ensemble</h1>
      <div className="scroll-btn">
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
      </div></div>
      <div className="ensemble-card-container">
    <Cardcomponent title="Leather jacket" price="$29.99" image={leatherjac }/>
    <Cardcomponent title="Classic White T-shirt" price="$39.99" image={whitetshirt }/>
    <Cardcomponent title="Street Hoodie" price="$49.99" image={streethoodie } />
    <Cardcomponent title="Hand Bag" price="$59.99" image={handbag } />
    <Cardcomponent title="White Sneaker" price="$39.99" image={whitesneaker } />
    <Cardcomponent title="Casual Shirt" price="$29.99" image={casualshirt } />
    </div>
    </div>
    </>
  )
}

export default Detailpg_cardcontainer 