import React from 'react';
import founderImg from '../../assets/images/SarahJohnson.png';

function About_Meetourteam() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: founderImg,
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Atelier & Tailoring',
      image: founderImg,
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Sustainable Sourcing',
      image: founderImg,
    },
  ];

  return (
    <div className="meeting-maindiv">
      <h1>Meet Our Team</h1>
      <div className="meeting-container">
        {team.map((member, idx) => (
          <div key={idx} className="meet-cards">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About_Meetourteam;