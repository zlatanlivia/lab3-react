import React from 'react';
import './Parteneri.css';
import padelImg from '../assets/partenerpadel.png';
import acvilaImg from '../assets/parteneracvila.png';
import aquaterraImg from '../assets/parteneraquaterra.png';
import zimbruImg from '../assets/partenerzimbru.png';
import fmfImg from '../assets/partenerfmf.png';

const Parteneri = () => {
  const partners = [
    { id: 1, name: 'Padel', image: padelImg },
    { id: 2, name: 'Acvila', image: acvilaImg },
    { id: 3, name: 'Aquaterra', image: aquaterraImg },
    { id: 4, name: 'Zimbru', image: zimbruImg },
    { id: 5, name: 'FMF', image: fmfImg }
  ];

  return (
    <div className="parteneri-container">
      <h1 className="parteneri-title">Partenerii noștri</h1>
      
      <div className="parteneri-logos">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img 
              src={partner.image} 
              alt={partner.name} 
              className="partner-image" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parteneri;