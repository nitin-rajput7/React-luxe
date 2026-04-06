import React from 'react'

const ShopByCat = () => {
  return (
    <>
     <div className="categories-cards">

     <h1 className='h1'>Shop by Category</h1>
     <div className="cards-container">
     <div className="card1 cat-card"><div className="card-text">
        <h2>Men</h2><p>230+items</p>
        </div></div>
     <div className="card2 cat-card"><div className="card-text"><h2>Women</h2><p>340+ items</p></div></div>
     <div className="card3 cat-card"><div className="card-text"><h2>Kids</h2><p>150+ items</p></div></div>
     <div className="card4 cat-card"><div className="card-text"><h2>Accessories</h2><p>180+ items</p></div></div>
     </div>
        
     </div>
    </>
  )
}

export default ShopByCat