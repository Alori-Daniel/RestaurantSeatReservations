import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className='footer-left'>
        <h2>Crisp & <br /> Crave</h2>
        <p>@2024 All right Reserved, Crisp & Crave</p>
        <p><a href="">Terms of Use</a></p>
        <p><a href="">Privacy Policy</a></p>
        <p><a href="#aboutUs">About Us</a></p>
        <p><a href="">Menu</a></p>
        <p><a href="">Contact Us</a></p>
        <div className='footer-icons'>
        <i className='bx bxl-instagram'></i>
        <i className='bx bxl-twitter'></i>
        <i className='bx bxl-whatsapp' ></i>
        </div>
      </div>
      <div className='footer-right'>
        <div className='footer-right-div'>
        <h1>Support</h1>
        <p>Have questions? Get in touch or contact our Help Centre</p>
        </div>
        <div className='footer-right-p'>
            <p>you can also call our support on +2349100004444</p>
            <p>Or on whatsapp on +2349100004444</p>
            <p>Or send a mail to help@crispandcrave.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
