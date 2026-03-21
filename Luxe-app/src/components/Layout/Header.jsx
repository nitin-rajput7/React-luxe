import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
       <div className="Navbar">
        <div className="mainlogo">LUXE</div>
        
        <ul>
          <li> <NavLink to="/Home">Home</NavLink></li>
          <li><NavLink to="/Shop">Shop</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
       
        <div className="icons">
           <a href="w"><i class="fa-solid fa-magnifying-glass"></i></a>
           <a href="w"><i class="fa-regular fa-heart"></i></a>
           <a href="w"><i class="fa-solid fa-cart-arrow-down"></i></a>
           <a href="w"><i class="fa-regular fa-address-book"></i></a>
        </div>
       </div>
    </>
  );
}

export default Header;
