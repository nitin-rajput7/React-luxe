import React from 'react'
// css---
import '../Webpages/Detailpage.css'


import Detailpg_productdetail from '../Models/Detailpg_productdetail'
import Detailpg_compositioncare from '../Models/Detailpg_compositioncare'
import Detailpg_cardcontainer from '../Models/Detailpg_cardcontainer'
import Detailpg_review from '../Models/Detailpg_review'


function Detailpage() {
  return (
    <>
    <Detailpg_productdetail />
    <Detailpg_compositioncare />
    <Detailpg_cardcontainer/>
    <Detailpg_review/>
    </>
  )
}

export default Detailpage ;