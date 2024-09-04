import React from 'react';
import './MeetOurTeam.css'; 
import teamMember1 from '../../../assets/team1.jpg';
import teamMember2 from '../../../assets/team2.jpg';  
import teamMember3 from '../../../assets/team3.jpg'; 
import vines from '../../../assets/Green Vines.png'; 

const MeetOurTeam = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img  loading="lazy" src={teamMember1} alt="Team Member 1" className="team-member-image" />
        </div>
        <div className="team-member">
          <img loading="lazy" src={teamMember2} alt="Team Member 2" className="team-member-image" />
        </div>
        <div className="team-member">
          <img  loading="lazy"src={teamMember3} alt="Team Member 3" className="team-member-image" />
        </div>
      </div>
        <img  loading="lazy"src={vines} alt="Green vines" className="vine-image" />
        
    </div>
  );
};

export default MeetOurTeam;
