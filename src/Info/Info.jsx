import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <section className="info-section">
      <div className="info-content">
        <div className="info-text">
          <h2 className="info-title">Despre noi</h2>
          <p className="info-description">
            Suntem o platformă dedicată facilitării accesului 
            la cele mai bune <br /> 
            spații sportive din oraș, pentru ca 
            pasionații de sport să se bucure<br /> 
             de activitățile lor preferate în cele mai bune condiții.
          </p>
          <button className="info-button">Află mai multe</button>
        </div>
        <div className="info-logo">
          <span className="logo-text">RentSpace</span>
          <p className="since-text">since 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Info;