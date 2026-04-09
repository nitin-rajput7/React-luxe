import React from 'react'
// css----
import '../Webpages/About'

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

const ShopProductGrid = () => {
  return (
    <>
    <div className="shopGrid-main">
        <div className="Productfilter">
            <p>Showing 12 products</p>
            <p>Most Popular --</p>
        </div>
      
        <div className="shopGrid-container">
          <div className="filter-box">

  <h2 className="title">⚙ Filters</h2>

  <div className="section">
    <h3>Category</h3>
    <label><input type="checkbox"/> Men</label>
    <label><input type="checkbox"/> Women</label>
    <label><input type="checkbox"/> Kids</label>
    <label><input type="checkbox"/> Accessories</label>
  </div>

  <div className="section">
    <h3>Price Range</h3>
    <div className="price">
      <span>$0</span>
      <span>$300</span>
    </div>
    <input type="range" min="0" max="300"/>
  </div>


  <div className="section">
    <h3>Size</h3>
    <div className="sizes">
      <button>XS</button>
      <button>S</button>
      <button>M</button>
      <button>L</button>
      <button>XL</button>
      <button>XXL</button>
    </div>
  </div>

 
  <div className="section">
    <h3>Color</h3>
    <div className="colors">
      <span className="c black"></span>
      <span className="c white"></span>
      <span className="c gray"></span>
      <span className="c brown"></span>
      <span className="c blue"></span>
      <span className="c red"></span>
    </div>
  </div>

  <button className="clear-btn">Clear All Filters</button>

</div>

{/* right side---- */}

    <div className="shopright">
       <div className="shop-img-div">
        <div className="shop-image"><img src={leatherjac} alt="" /></div>
        <div className="card-others">
          <p>Leather Jacket Premium</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$89.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={elegantdress} alt="" /></div>
        <div className="card-others">
          <p>Elegant Black Dress</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$149.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={winterwool} alt="" /></div>
        <div className="card-others">
          <p>Winter Wool Coat</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$249.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={whitetshirt} alt="" /></div>
        <div className="card-others">
          <p>Classic White T-Shirt</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$29.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={whitesneaker} alt="" /></div>
        <div className="card-others">
          <p>Premium White Sneaker</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$119.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={handbag} alt="" /></div>
        <div className="card-others">
          <p>Designer Handbag</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$189.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={denimjeans} alt="" /></div>
        <div className="card-others">
          <p>Slim Fit Denim Jeans</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$89.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={leatherboot} alt="" /></div>
        <div className="card-others">
          <p>Leather Boots</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$159.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={beigesweater} alt="" /></div>
        <div className="card-others">
          <p>Beige Knit Sweater</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$79.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={streethoodie} alt="" /></div>
        <div className="card-others">
          <p>Street Style Hoodie</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$69.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={casualshirt} alt="" /></div>
        <div className="card-others">
          <p>Casual Button-Up Shirt</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$59.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>
       <div className="shop-img-div">
        <div className="shop-image"><img src={kids} alt="" /></div>
        <div className="card-others">
          <p>Kids Casual Outfit</p>
          <div className="rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> </div>
          <div className="price-details">
            <p>$49.99</p>
            <button>View Details</button>
          </div>
        </div>
      </div>

       

    </div>

    </div>
        <div className="next-pages">
          <a href=""> Previous</a>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">Next</a>
        </div>
    <div className="reviewcard">
      
      <div className="securepay"><h3>Secure Payement</h3><p>Visa,Mastercard,PayPal,Apple Pay Accepted</p></div>
      <div className="securepay"><h3>Fast Delivery</h3><p>Free Shipping on oder over $100</p></div>
      <div className="securepay"><h3>Easy Return</h3><p>30-day money-back guarantee</p></div>
    </div>
    </div>
    </>
  )
}

export default ShopProductGrid 