import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sport.css';

// Import imaginile
import fotbalImg from '../assets/fotbal.jpg';
import tenisCampImg from '../assets/teniscamp.jpg';
import baschetImg from '../assets/baschet.jpg';
import voleiImg from '../assets/volei.jpg';
import tenisMasaImg from '../assets/tenismasa.jpg';
import inotImg from '../assets/inot.jpg';
import badmintonImg from '../assets/badminton.jpg';
import padelImg from '../assets/padel.jpg';

const Sport = () => {
  const navigate = useNavigate();

  const sports = [
    { id: 1, name: 'Fotbal', image: fotbalImg },
    { id: 2, name: 'Tenis de câmp', image: tenisCampImg, path: '/tenis-camp' },
    { id: 3, name: 'Baschet', image: baschetImg },
    { id: 4, name: 'Volei', image: voleiImg },
    { id: 5, name: 'Tenis de masă', image: tenisMasaImg },
    { id: 6, name: 'Înot', image: inotImg },
    { id: 7, name: 'Badminton', image: badmintonImg },
    { id: 8, name: 'Padel', image: padelImg }
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path); 
    }
  };

  return (
    <div className="sport-container">
      <h1 className="sport-title">Alege sportul care te interesează</h1>
      
      <div className="sport-cards">
        {sports.map((sport) => (
          <div
            key={sport.id}
            className="sport-card"
            onClick={() => handleCardClick(sport.path)}
            style={{ cursor: sport.path ? 'pointer' : 'default' }}
          >
            <div className="sport-image-container">
              <img src={sport.image} alt={sport.name} className="sport-image" />
              <div className="sport-overlay"></div>
            </div>
            <div className="sport-content">
              <h3 className="sport-name">{sport.name}</h3>
              <p className="sport-more-text">Află mai multe</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Sport;