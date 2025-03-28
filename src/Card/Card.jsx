import React from 'react';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Card.css';

const Card = ({ image, title, phone, address }) => {
  return (
    <div className="tenis-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        
        <div className="card-contact">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>{phone}</span>
          </div>
          
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;