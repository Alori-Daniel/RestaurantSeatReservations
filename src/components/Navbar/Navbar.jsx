import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);


    const toggleNav = () => {
        setShowNav(prev => !prev);
      };
  return (
    <div className='navbar'>
      <h2>Crisp & Crave</h2>
      <div className='ul-links'>
        <ul className={showNav ? 'navbar-ul show': 'navbar-ul'}>
        <i className='bx bx-x-circle icons' onClick={toggleNav}></i>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
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
