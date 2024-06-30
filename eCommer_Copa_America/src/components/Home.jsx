import React from 'react'
import './Home.css'
import Items from './Items';



function Home() {
  const countries = ['Argentina', 'Brasil', 'Chile', 'México', 'Perú'];
    
  const handleSelectCountry = (country) => {
    alert(`Seleccionaste ${country}`);
  };
  return (
    <div>
    <h2>Selecciona un país:</h2>
    <ul>
      {countries.map((country) => (
        <p className='p_country'
          key={country}
          onClick={() => handleSelectCountry(country)}
        >
          {country}
        </p>
      ))}
    </ul>
    <Items />
  </div>
);
};

export default Home

