import React from 'react'
import elegantblackdress from '../../assets/images/detailpageblackdress.png'

function Detailpg_productdetail() {
  return (
    <>
    {/* <div className="detail-main">
        <div className="product-image"></div>
        <div className="product-about">
            <div className="name_price">
            <h1>Elegant Black Dress</h1>
            <p>$149.99</p>
            </div>
            <div className="product-discription">
            <p>Crafted with meticulous attention to detail, this timeless silhouette is
the epitome of modern elegance. Made from a premium, breathable
silk blend that drapes effortlessly, it features a sophisticated cowl
neckline and a subtle side slit for a touch of allure. Perfect for gala
events or intimate evenings, this dress is a staple for the discerning
wardrobe.</p>
        </div>

        <div className="color-size-addcart">
        <div className="color-select">
            <div className="color black"></div>
            <div className="color grey"></div>
        </div>

        <div className="size-select">
            <div className="p">SELECT SIZE</div>
            .
        </div>


        </div>
          
        </div>
    </div> */}
    

<div class="product-container">

  {/* <!-- LEFT IMAGE --> */}
  <div class="product-image">
    <img src={elegantblackdress} alt="Black Dress"/>
  </div>

  {/* <!-- RIGHT CONTENT --> */}
  <div class="product-details">

    <p class="category">EVENING WEAR / DRESSES</p>

    <h1>Elegant Black Dress</h1>
    <h2>$149.99</h2>

    <p class="desc">
      Crafted with meticulous attention to detail, this timeless silhouette is the epitome of modern elegance.
      Made from a premium, breathable silk blend that drapes effortlessly, it features a sophisticated cowl neckline
      and a subtle side slit for a touch of allure.
    </p>

    {/* <!-- COLORS --> */}
    <div class="section">
      <p class="label">COLOR: BLACK</p>
      <div class="colors">
        <span class="color black active"></span>
        <span class="color gray"></span>
      </div>
    </div>

    {/* <!-- SIZE --> */}
    <div class="section">
      <div class="size-header">
        <p class="label">SELECT SIZE</p>
        <span class="size-guide">SIZE GUIDE</span>
      </div>

      <div class="sizes">
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </div>
    </div>

    {/* <!-- BUTTON --> */}
    <button class="cart-btn">ADD TO CART</button>

    {/* <!-- INFO --> */}
    <div class="info-box">
      <p> ## Complimentary White Glove Delivery</p>
      <p>↩ 30-Day Bespoke Return Policy</p>
    </div>

  </div>

</div>
    </>
  )
}

export default Detailpg_productdetail ;