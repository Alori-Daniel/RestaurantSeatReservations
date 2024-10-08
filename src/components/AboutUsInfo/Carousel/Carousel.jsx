import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; 
import image1 from '../../../assets/food1.jpg';
import image2 from '../../../assets/food2.jpg';
import image3 from '../../../assets/food3.jpg';
import image4 from '../../../assets/food4.jpg';
import image5 from '../../../assets/food5.jpg';
import image6 from '../../../assets/food6.jpg';
import image7 from '../../../assets/food7.jpg';
import image8 from '../../../assets/food8.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="carousel-container" >
      <Slider {...settings}>
        <div className="slide">
        <img src={image1} alt="Food 1" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image2} alt="Food 2" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image3} alt="Food 3" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image4} alt="Food 4" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image5} alt="Food 5" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image6} alt="Food 6" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image7} alt="Food 7" />
        </div>
        <div className="slide">
          <img loading="lazy" src={image8} alt="Food 8" />
        </div>
        {/* <div className="slide">
          <img src={image9} alt="Food 9" />
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
