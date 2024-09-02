import React from 'react';
import './Banner.css';
import image1 from '../../../assets/left flower.png';
import image2 from '../../../assets/right flower.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Crisp &  Crave</h1>
        <p className="banner-text" >Discover the passion behind our authentic African flavors</p>
      </div>
      <div className="banner-decorations">
        <img src={image1} alt="Left leaf decoration" className="leaf-decoration left" />
        <img src={image2} alt="Right leaf decoration" className="leaf-decoration right"/>
      </div>
    </div>
  );
};

export default Banner;
