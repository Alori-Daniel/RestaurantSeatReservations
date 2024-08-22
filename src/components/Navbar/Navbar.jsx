import React, { useState } from 'react'
import './navbar.css'
import crisp from '../../assets/crisp.png'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);


    const toggleNav = () => {
        setShowNav(prev => !prev);
      };
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={crisp} alt="" className='image-logo' />
      <h2>Crisp <br /> & Crave</h2>
      </div>
      <div className='ul-links'>
        <ul className={showNav ? 'navbar-ul show': 'navbar-ul'}>
        <i className='bx bx-x-circle icons' onClick={toggleNav}></i>
            <li> <a href="#home">Home </a></li>
            <li>Menu</li>
            <li> <a href="#aboutUs"> About Us</a></li>
            <li>Contact Us</li>
            
        </ul>
        
      </div>
      
      <button className='button-booknow btn-shine'>
        Book Now
      </button>
      <div>
      
      <i className='bx bx-menu nav_icon' onClick={toggleNav}></i>
      </div>
      
    </div>
  )
}

export default Navbar
