import React from 'react';
import './feature.css';
import image1 from '../../assets/Frame 15.png';
import image2 from '../../assets/Frame 16.png';
import image3 from '../../assets/Frame 17.png';

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="title">Taste of Africa</h1>
      <div className="cards">
        <div className="card">
          <img src={image1} className="image" alt="Jollof Rice" />
          <h3 className="dish-title">Jollof Rice</h3>
          <p className="origin">
            Jollof Rice is one of West Africa's most beloved dishes, known for its rich, spicy tomato-based flavor. It is often the centerpiece of celebrations, from weddings to family gatherings.
          </p>
          <p className="origin"><strong style={{color:"black"}}>Origin:</strong> Originating from the Wolof people of Senegal, Jollof Rice has become a symbol of cultural pride across West Africa, with regional variations found in Nigeria, Ghana, and beyond.</p>
        </div>
        <div className="card">
          <img src={image2} className="image" alt="Ugali with Sukuma Wiki" />
          <h3 className="dish-title">Ugali with Sukuma Wiki</h3>
          <p className="origin">
            Ugali, a staple in East Africa, particularly in Kenya and Tanzania, is often served with Sukuma Wiki (collard greens). This dish represents the simplicity and sustenance of African cuisine, providing energy and nourishment for daily life.
          </p>
          <p className="origin"><strong style={{color:"black"}}>Origin:</strong> Ugali has roots in East Africa and is a daily meal for many households. It reflects the agricultural lifestyle and the importance of maize in the region's diet.</p>
        </div>
        <div className="card">
          <img src={image3} className="image" alt="Injera with Doro Wat" />
          <h3 className="dish-title">Injera with Doro Wat</h3>
          <p className="origin">
            Injera, a spongy flatbread, is the national dish of Ethiopia, often served with Doro Wat, a spicy chicken stew. This dish is central to Ethiopian culture, symbolizing hospitality and community as it is traditionally shared from a communal plate.
          </p>
          <p className="origin" ><strong style={{color:"black"}}>Origin:</strong> Hailing from Ethiopia, Injera with Doro Wat is more than just food; it is an integral part of social gatherings and religious ceremonies.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
