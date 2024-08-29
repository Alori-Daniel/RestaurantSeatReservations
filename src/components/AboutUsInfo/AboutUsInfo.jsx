import React from 'react';
import './AboutUsInfo.css';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import OurJourney from './OurJourney/OurJourney';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import OurMission from './OurMission/OurMission';
import CulturalSignificance from './CulturalSignificance/CulturalSignificance';
import OurCommunity from './OurCommunity/OurCommunity';
import Testimonials from '../Testimonials/Testimonials';


const AboutUsInfo = () => {
  return (
    <div>
      <Banner/>
      <Carousel/>
      <OurJourney/>
      <OurMission/>
      <MeetOurTeam/>
      <CulturalSignificance/>
      <OurCommunity/>
      <Testimonials/>
    </div>
  );
}

export default AboutUsInfo;
