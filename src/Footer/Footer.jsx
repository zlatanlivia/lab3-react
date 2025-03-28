import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="titlu-text">RentSpace</span>
          <p className="small-text">since 2024</p>
          <p className="mission-text">"Ne dorim să facem sportul accesibil pentru toată lumea."</p>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Linkuri utile</h3>
            <ul>
              <li>Help Center</li>
              <li>Termeni și Condiții</li>
              <li>Evenimente</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Informații</h3>
            <ul>
              <li>Terenuri</li>
              <li>Despre noi</li>
              <li>Galerie</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-contact">
          <h3>Contacte:</h3>
          <p>+373 69 617 335</p>
          <p>contact@rentspace.md</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>@2024 RentSpace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;