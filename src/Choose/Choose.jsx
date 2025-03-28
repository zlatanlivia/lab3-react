import React from 'react';
import './Choose.css';

const Choose = () => {
  return (
    <div className="choose-container">
      <button className="choose-button black">Toate</button>
      <button className="choose-button">Chișinău</button>
      <button className="choose-button">Tiraspol</button>
      <button className="choose-button">Orhei</button>
    </div>
  );
};

export default Choose;