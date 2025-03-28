import React from 'react';
import Card from '../Card/Card';
import './TenisCards.css';

const TenisCards = () => {
    const cities = [
        {
          name: "Chișinău",
          courts: [
     {
      image: '/images/chisinau1.jpg',
      title: 'Acvila Tenis Club',
      phone: '+373 68 972 961',
      address: 'Str. Calea Ieșilor 10B'
    },
    {
      image: '/images/chisinau2.jpg',
      title: 'Arena Chișinău',
      phone: '+373 69 328 664',
      address: 'Str. Calea-Orheiului 130'
    },
    {
      image: '/images/chisinau3.jpg',
      title: 'Școala Sportivă de Tenis',
      phone: '+373 79 714 123',
      address: 'Str. Eugen Coca, 59'
    },
    {
        image: '/images/chisinau4.jpg',
        title: 'Niagara',
        phone: '+373 69 949 456',
        address: 'Str. Ghidighici 5'
      },
      {
        image: '/images/chisinau5.jpg',
        title: 'Sport Park',
        phone: '+373 78 889 889',
        address: 'Str. Nicolae Dimo 32'
      },
      {
        image: '/images/chisinau6.jpg',
        title: 'Prezident',
        phone: '+373 60 525 000',
        address: 'Str. Bulevardul Dacia 58/5'
      }
  ]
},
{
  name: "Tiraspol",
  courts: [
    {
      image: '/images/tiraspol1.jpg',
      title: 'Sheriff-Tiraspol',
      phone: '+373 53 363 410',
      address: 'Str. K.Libnekht St. 1/2 (Zapadny)'
    },
    {
      image: '/images/tiraspol2.jpg',
      title: 'Lions Arena',
      phone: '+373 533 55555',
      address: 'Str. Krasnogo Znameni 18'
    },
    {
      image: '/images/tiraspol3.jpg',
      title: 'Iris',
      phone: '+373 533 66666',
      address: 'Str. Gorkogo 33'
    }
  ]

},
{
  name: "Orhei",
  courts: [
    {
      image: '/images/orhei1.jpg',
      title: 'Tenis Plus Country',
      phone: '+373 235 77777',
      address: 'Str. Independenței 15'
    },
    {
      image: '/images/orhei2.jpg',
      title: 'ClubTenis',
      phone: '+373 235 88888',
      address: 'Str. Mihai Eminescu 30'
    }
  ]
}
    ];

    return (
        <div className="tenis-cards-container">
          {cities.map((city, index) => (
            <div key={index} className="city-group">
              <h2 className="city-header">{city.name}</h2>
              <div className="cards-grid">
                {city.courts.map((court, idx) => (
                  <Card
                    key={idx}
                    image={court.image}
                    title={court.title}
                    phone={court.phone}
                    address={court.address}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default TenisCards;