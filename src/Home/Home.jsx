import React from 'react';
import './Home.css';
import defaultImage from '../assets/tenis.jpg';

const Home = ({ 
  backgroundImage = defaultImage,
  title = "Alege, \nrezervă și \nîncepe să te antrenezi",
  buttonText = "Descoperă",
  showButton = true,
  customHeight = "78vh",
  textAlign = "center",
}) => {
  return (
    <div className="home-container">
      <main 
        className={`hero-section ${textAlign === 'left' ? 'left-align' : ''}`}
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          minHeight: customHeight
        }}
      >
        {typeof title === 'string' ? (
          <>
            <div className="divider"></div>
            <h2 className="hero-title">{title}</h2>
          </>
        ) : (
          title 
        )}
        {showButton && <button className="discover-button">{buttonText}</button>}
      </main>
    </div>
  );
};

export default Home;