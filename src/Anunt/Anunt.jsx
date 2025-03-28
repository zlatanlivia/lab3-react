import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Anunt.css';

const Anunt = ({ title, image }) => {
  return (
    <div className="anunt-container">
      <h3 className="anunt-title">{title}</h3>
      <div className="anunt-content">
        <FaChevronLeft className="anunt-arrow left-arrow" />
        <img src={image} alt="Anunț" className="anunt-image" />
        <FaChevronRight className="anunt-arrow right-arrow" />
      </div>
      <div className="anunt-dots">
        {}
        <div className="anunt-dot active"></div>
        <div className="anunt-dot"></div>
        <div className="anunt-dot"></div>
      </div>
    </div>
  );
};

export default Anunt;
