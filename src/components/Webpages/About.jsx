import React from 'react'
// -----CSS/
import '../Webpages/About.css'

import Aboutusbanner from '../Models/Aboutusbanner'
import About_Ourstory from '../Models/About_Ourstory'
import About_Standfor from '../Models/About_Standfor'
import AboutStats from '../Models/AboutStats'
import About_Meetourteam from '../Models/About_Meetourteam'

function About() {
  return (
    <>
    <Aboutusbanner/>
    <About_Ourstory/>
    <About_Standfor/>
    <AboutStats/>
    <About_Meetourteam/>
    </>
  )
}

export default About    