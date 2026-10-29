import React from 'react'
import '../Webpages/Home.css' 
// components--
import Hero from '../Models/Hero'
import ShopByCat from '../Models/ShopByCat'
import TrendingM from '../Models/TrendingP'
import Summercol from '../Models/Summercol'
import Whychoose from '../Models/Whychoose'

function Home(){
  return (
    <>
   <Hero/>
   <ShopByCat/>
   <TrendingM/>
   <Summercol/>
   <Whychoose/>
    </>
      
  )
}

export default Home;