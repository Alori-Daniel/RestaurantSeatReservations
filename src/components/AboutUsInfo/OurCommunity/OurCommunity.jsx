import React from 'react';
import './OurCommunity.css';  
import communityImage from '../../../assets/community.jpg'; 
import white from '../../../assets/white.png'; 
const OurCommunity = () => {
  return (
    <div className="community-section">
      <div className="text-content">
        
        <div className="community-description">
        <h2 className="community-title">Our Community</h2>
          We are proud to be a part of the African community, and we believe in giving back. Through partnerships with local farmers and suppliers, we ensure that our ingredients are fresh, sustainable, nd support the local economy. We also participate in community events and cultural celebrations, bringing the taste of Africa to festivals, schools, and charitable initiatives.
        </div>
      </div>
      <div className="image-content">
      <div className="image-background">
          {/* <img src={white} alt="Background" className="background-image" /> */}
        </div>
        <img loading="lazy" src={communityImage} alt="Community Gathering" className="community-image" />
      </div>
    </div>
  );
};

export default OurCommunity;
