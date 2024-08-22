import React from 'react'
import './aboutus.css'
import interior from '../../assets/interior.png'
import chef from '../../assets/chef.png'
import kitchen from '../../assets/kitchen.png'

const AboutUs = () => {
    // style={{margin:"2rem 6rem 2rem 6rem", border:"1px solid red", display:"flex", flexDirection:"column", alignItems:"center"}} 
  return (
    <div className='AboutUs' id='aboutUs'>
        <h1>About Us</h1>
      <div className='aboutus-div'>
        <div className='left-content'>
        <p style={{marginBottom:"3rem"}}> <span className='left-content-span'> Welcome to our restaurant</span>, where we bring the heart and soul of Africa to your dining experience. Our mission is to celebrate the rich culinary heritage of the African continent by offering authentic, handcrafted dishes that tell the story of our diverse cultures. From the vibrant streets of Lagos to the tranquil plains of Ethiopia, our menu is a journey through Africa's most cherished flavors.</p>
        <p>Each dish is carefully prepared using traditional recipes passed down through generations, made with the freshest ingredients and a passion for excellence. Our chefs are not just cooks; they are custodians of history, preserving the unique tastes and traditions that make African cuisine so special.</p>
        <div className='left-content-image'>
            <img src={kitchen} alt="" />
        </div>
        </div>
        <div className='right-content'>
            <img src={interior} alt="" />
            <img src={chef} alt="" />
        <p className='p-aboutUs'>Whether you're here for a casual meal with friends or a special celebration, we aim to provide an unforgettable dining experience that nourishes both body and soul. Join us in savoring the essence of Africa, one bite at a time.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
