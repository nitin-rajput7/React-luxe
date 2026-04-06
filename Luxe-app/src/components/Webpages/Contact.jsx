import React from 'react'
// css----
import '../Webpages/Contact.css'

import Contact_Getintouch from '../Models/Contact_Getintouch'
import Contact_form from '../Models/Contact_form'
import Contact_FAQ from '../Models/Contact_FAQ'

function Contact() {
  return (
    <>
    <Contact_Getintouch/>
    <Contact_form/>
    <Contact_FAQ/>
    </>
  )
}

export default Contact