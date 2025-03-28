import React from 'react';
import Home from '../Home/Home';
import tenisHeroImage from '../assets/tenis-hero.jpg';
import TenisCards from '../TenisCards/TenisCards';
import Choose from '../Choose/Choose';
import './TenisCampPage.css';

const TenisCampPage = () => {
  return (
    <div className="tenis-camp-container">
      <Home
        backgroundImage={tenisHeroImage}
        title={
          <div className="tenis-title-wrapper">
            <p className="tenis-subtitle">*Descoperă terenurile de tenis 
            <br />din Republica Moldova</p>
            <h2 className="hero-title tenis-main-title">Teren de tenis</h2>
          </div>
        }
        showButton={false}
        customHeight="50vh"
        isMainPage={false}
      />
      
      <div className="choose-section">
        <Choose />
      </div>
      <section className="tenis-cards-section">
        <TenisCards />
      </section>
    </div>
  );
};
export default TenisCampPage;