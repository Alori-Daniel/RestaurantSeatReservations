import React, { useState, useEffect } from 'react';
import './reserve.css';
import imageLarge from '../../assets/circleimg.png'; // Default image for large screens
import imageSmall from '../../assets/smallcircle.png'; // Different image for smaller screens
import { useNavigate } from 'react-router-dom';

const ReserveTable = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check screen size and set state
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 770); // Change breakpoint as needed
    };

    // Initial check
    checkScreenSize();

    
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="reserve-container" style={{ marginTop: "5rem", }}>
      <div className="text-container">
        <h2 className="reserve-title">Reserve Your Table</h2>
        <h3 className="subtitle">We look forward to welcoming you!</h3>
        <p className="description" style={{textAlign:"left", color:"#ffffff"}}>
          Experience the vibrant flavors of Africa in a warm and welcoming atmosphere. Whether you're planning a special celebration or a casual meal with friends, reserving your table ensures you have a seat at the heart of our culinary journey. Choose your preferred time and date, and let us take care of the rest. We look forward to hosting you and making your dining experience truly unforgettable.
        </p>
        <button onClick={()=>{ navigate('/book'), window.scroll(0,0)}} className="reserve-button btn-shine">Book Your Table</button>
      </div>
      <div className="graphic-container">
      
        <div className="circle">
          <img src={isSmallScreen ? imageSmall : imageLarge} style={{ display:"none"}} alt="Reserve Table" />
        </div>
      </div>
    </div>
  );
}

export default ReserveTable;
