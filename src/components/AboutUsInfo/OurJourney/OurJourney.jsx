import React from 'react';
import './OurJourney.css';  
import journeyImage from '../../../assets/journey.png';
import leafImage from '../../../assets/journeyleaf.png';

const OurJourney = () => {
  return (
    
    <div className="our-journey-container" >
      <img loading="lazy" src={leafImage} alt="Decorative Leaf" className="leaf-decor" />
      <div className="content">
        <div className="text-section">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-text" >
            Our restaurant was born out of a deep love for African culture and cuisine. Inspired by the rich culinary traditions passed down through generations, we set out on a journey to bring the vibrant flavors of Africa to our community. Our mission is to create a welcoming space where people can experience the warmth and hospitality of African dining, while savoring dishes that celebrate the diversity of the continent. From our family to yours, we invite you to join us on this delicious adventure.
          </p>
        </div>
        <div className="image-section">
          <img loading="lazy" src={journeyImage} alt="Restaurant Interior" className="journey-image" />
        </div>
      </div>
    </div>
    
  );
};

export default OurJourney;
