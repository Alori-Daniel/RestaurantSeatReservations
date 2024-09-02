import React from 'react';
import './CulturalSignificance.css';  
import leafIcon from '../../../assets/signifi.png'; 

const CulturalSignificance = () => {
  return (
    <div className='cultural-significance' style={{backgroundColor:"white"}}>
      <div className="title-section">
        <img src={leafIcon} alt="Decorative Leaf" className="decorative-icon" />
       
      </div>
      <p className="description">
        Each dish we serve carries the essence of Africa's diverse cultures and  traditions.  From the smoky flavors of Suya to the comforting warmth of Jollof Rice, our  menu is a celebration of the continent's culinary heritage. By preserving these traditional recipes, we aim to keep the spirit of Africa alive and share it with our guests.
      </p>
    </div>
  );
};

export default CulturalSignificance;
