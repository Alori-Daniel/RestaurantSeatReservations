import React, { useState } from 'react'
import './navbar.css'
import crisp from '../../assets/crisp.png'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

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
            <li onClick={()=> navigate('/')}> <a href="#home">Home </a></li>
            <li onClick={()=> navigate('/menu')}>Menu</li>
            <li onClick={()=> navigate('/')}> <a href="#aboutUs"> About Us</a></li>
            <li> <a href="#contact">Contact Us</a></li>
            
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
