import React from 'react';
import './testimonial.css';
import user1 from '../../assets/user1.png'; // 
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';

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
    <div className="testimonials-container" style={{marginTop:"7rem"}} >
      {testimonialsData.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <p className="testimonial-text">“{testimonial.text}”</p>
          <div className="user-info">
            <img src={testimonial.image} alt={testimonial.name} className={`user-image ${index === 2 ? 'user-image-highlighted' : ''}`} />
            <div>
              <p className="user-name">{testimonial.name}</p>
              <p className="user-role">{testimonial.role}</p>
              <div className="rating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
