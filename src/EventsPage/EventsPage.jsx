import React from 'react';
import Home from '../Home/Home';
import Anunt from '../Anunt/Anunt';
import Stadion from '../Stadion/Stadion';
import Parteneri from '../Parteneri/Parteneri'
import eventsHeroImage from '../assets/events-hero.jpg';
import anunt1 from '../assets/anunt1.jpg';
import anunt2 from '../assets/anunt2.png';
import { FaChevronDown } from 'react-icons/fa'; 
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      
      <Home
        backgroundImage={eventsHeroImage}
        title="Evenimente 
        în lumea sportului"
        subtitle={null}
        showButton={false}
        buttonText={null}
        customHeight="70vh"
      />
      
      {}
      <section className="events-description">
        <p>
         Alege sportul tău preferat și vezi evenimentele ce urmează
        </p>
      </section>
      <button className="category-button"> Fotbal <FaChevronDown /></button>
      <Anunt 
        title="Următoarele meciuri din Super Liga ⚽️..." 
        image={anunt1} 
      />
      <Anunt 
        title="Vezi ce meciuri va avea Naționala Moldovei luna aceasta 🏆" 
        image={anunt2} 
      />
      <Stadion /> {}
      <div className="events-list">
        {}
      </div>
    </div>
  );
};

export default EventsPage;
