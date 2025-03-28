import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Stadion.css';
import stadion1 from '../assets/stadion1.jpg';
import stadion2 from '../assets/stadion2.jpg';
import stadion3 from '../assets/stadion3.jpg';

const Stadion = () => {
  return (
    <div className="stadion-section">
      <h2 className="stadion-title">Stadioane populare</h2>

      <div className="stadion-images-container">
        {/* Imaginile laterale cu text */}
        <div className="stadion-image-wrapper left">
          <FaChevronLeft className="stadion-arrow left-arrow" />
          <img src={stadion1} alt="Sheriff" className="stadion-image" />
          <div className="stadion-text left-text">Sheriff</div>
        </div>

        {/* Imaginea din mijloc suprapusă */}
        <div className="stadion-image-wrapper middle">
          <img src={stadion2} alt="Zimbru" className="stadion-image middle-image" />
          <div className="stadion-text middle-text">Zimbru</div>
        </div>

        {/* Imaginile laterale cu text */}
        <div className="stadion-image-wrapper right">
          <FaChevronRight className="stadion-arrow right-arrow" />
          <img src={stadion3} alt="Joma" className="stadion-image" />
          <div className="stadion-text right-text">Joma</div>
        </div>
      </div>
    </div>
  );
};

export default Stadion;
