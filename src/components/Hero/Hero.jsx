import React from 'react'
import './hero.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero' id='home'>
    <div className='hero-div'>
      <h1>Experience the <br /> <span>Rich</span>Flavors of <br /> Africa</h1>
      <h3>Authentic African Cuisine in the Heart of Nigeria</h3>

      <button onClick={()=> navigate('/book')} className='button-booknow btn-shine btn-hero'>
        Book Your Table
      </button>
    </div>
    </div>
  )
}

export default Hero
