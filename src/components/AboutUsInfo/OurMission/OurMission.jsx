import React from 'react';
import './OurMission.css'; 
import topImage from '../../../assets/mission1.png';  
import bottomImage from '../../../assets/mission2.png';

const OurMission = () => {
  return (
    <div className="our-mission-container">
      <div className="top-image">
        <img loading="lazy" src={topImage} alt="Top Decorative" />
      </div>
      <div className="content-container">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          At our restaurant, we are committed to honoring the culinary heritage of  Africa by using authentic ingredients, traditional cooking methods, and a  passion for excellence. Our mission is to provide an unforgettable dining experience that not only delights the taste buds but also connects our guests with the rich history and culture of Africa. We believe in sustainability, supporting local farmers, and creating a space where  everyone feels like part of the family.
        </p>
      </div>
      <div className="bottom-image">
        <img loading="lazy" src={bottomImage} alt="Bottom Decorative" />
      </div>
    </div>
  );
};

export default OurMission;
