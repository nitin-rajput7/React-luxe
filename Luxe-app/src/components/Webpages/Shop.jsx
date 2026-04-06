import React from 'react'
// css---
import '../Webpages/Shop.css'

import Shop_allproduct from '../Models/Shop_allproduct'
import ShopProductGrid from '../Models/ShopProductGrid'



function Shop() {
  return (
    <>
    <Shop_allproduct/>
    <ShopProductGrid/>
    </>
  )
}

export default Shop