import React from 'react';
import './Eveniment.css';
import evenimentImg from '../assets/eveniment.jpg'; 

const Eveniment = () => {
  return (
    <div className="eveniment-container">
      <h1 className="eveniment-title">Evenimente sportive în timpul apropiat</h1>
      
      <div className="eveniment-image-container">
        <img src={evenimentImg} alt="Eveniment sportiv" className="eveniment-image" />
      </div>
      
      <div className="slider-dots">
        <div className="slider-dot active"></div> {}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="slider-dot"></div>
        ))}
      </div>
    </div>
  );
};

export default Eveniment;