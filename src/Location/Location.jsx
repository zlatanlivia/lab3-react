import React from 'react';
import './Location.css';
import arenaImg from '../assets/arena.jpg';
import sperantaImg from '../assets/speranta.png';
import jomaImg from '../assets/joma.jpg';
import zimbruImg from '../assets/zimbru.jpg';
import aquaterraImg from '../assets/aquaterra.jpg';
import acvilaImg from '../assets/acvila.webp';

const Location = () => {
  const locations = [
    { id: 1, name: 'Arena Chișinău', image: arenaImg },
    { id: 2, name: 'Speranța', image: sperantaImg },
    { id: 3, name: 'Joma Arena', image: jomaImg },
    { id: 4, name: 'Zimbru', image: zimbruImg },
    { id: 5, name: 'Aquaterra', image: aquaterraImg },
    { id: 6, name: 'Acvila', image: acvilaImg }
  ];

  return (
    <div className="location-container">
      <h1 className="location-title">Locații populare în Chișinău...</h1>
      
      <div className="location-cards">
        {locations.map((location) => (
          <div key={location.id} className="location-card">
            <img src={location.image} alt={location.name} className="location-image" />
            <div className="location-content">
              <h3 className="location-name">{location.name}</h3>
              <button className="reserve-button">Rezervă teren</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;