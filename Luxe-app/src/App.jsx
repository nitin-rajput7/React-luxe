import React from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Webpages/Home'
import Shop from './components/Webpages/Shop'
import About from './components/Webpages/About'
import Contact from './components/Webpages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/Home' element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path='/Contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App