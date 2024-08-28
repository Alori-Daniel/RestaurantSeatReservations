import React from 'react';
import './OurCommunity.css';  
import communityImage from '../../../assets/community.png'; 
import white from '../../../assets/white.png'; 
const OurCommunity = () => {
  return (
    <div className="community-section">
      <div className="text-content">
        <h2 className="community-title">Our Community</h2>
        <p className="community-description">
          We are proud to be a part of the African community,<pre/> and we believe in giving back. Through partnerships <pre/>with local farmers and suppliers, we ensure that our <pre/>ingredients are fresh, sustainable, nd support the local <pre/>economy. We also participate in community events and <pre/>cultural celebrations, bringing the taste of Africa to festivals,<pre/> schools, and charitable initiatives.
        </p>
      </div>
      <div className="image-content">
      <div className="image-background">
          <img src={white} alt="Background" className="background-image" />
        </div>
        <img src={communityImage} alt="Community Gathering" className="community-image" />
      </div>
    </div>
  );
};

export default OurCommunity;
