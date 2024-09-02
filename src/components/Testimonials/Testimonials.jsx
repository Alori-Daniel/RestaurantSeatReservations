import React from 'react';
import './testimonial.css';
import user1 from '../../assets/user1.png'; // 
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import quote from '../../assets/quote.png';

const testimonialsData = [
  {
    text: "A true gem in the heart of the city! The moment I stepped in, I felt like I was transported to Africa. The Jollof Rice was perfectly spiced, and the ambiance made it a dining experience I'll never forget.",
    name: "Chinedu O.",
    role: "Manager",
    rating: 5,
    image: user1
  },
  {
    text: "This restaurant is a must-visit for anyone who loves authentic African food. The flavors are bold and rich, and the staff make you feel like family. The Injera with Doro Wat took me back to my roots in Ethiopia.",
    name: "Amina A.",
    role: "Designer",
    rating: 5,
    image: user2
  },
  {
    text: "I was blown away by the attention to detail, from the traditional dishes to the decor. The Ugali with Sukuma Wiki was just like my grandmother used to make. I'll definitely be back for more!",
    name: "Fatima S.",
    role: "Consultant",
    rating: 5,
    image: user3
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" style={{border:"1px solid red"}} >
      <h1>What Our Guest Say</h1>
      <div className='testimonials ' >
        {testimonialsData.map((testimonial, i) =>{
          return(
            <div className='testimonial-card' key={i}>
              <img src={quote}  className='testimonial-quote'alt="" />
              <p style={{maxWidth:"380px", textAlign:"justify"}}>{testimonial.text}</p>
              <div style={{display:"flex", marginTop:"2rem", justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems:"flex-start", gap:"0.2rem"}}>
              <img src={testimonial.image} className='testimonial-img' alt="" />
                <p>{testimonial.name}</p>
                </div>
                <div className="rating" style={{alignSelf:"end"}}>
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
                </div>
              </div>
            </div>
          )
        })

        }
      </div>
    </div>
  );
};

export default Testimonials;




