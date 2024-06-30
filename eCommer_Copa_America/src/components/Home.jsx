import React from 'react'
import { useState } from 'react';
import './Home.css'


function Home() {
  const countries = ['Argentina', 'Brasil', 'Chile', 'México', 'Perú'];
    
  const handleSelectCountry = (country) => {
    alert('Seleccionaste ' + country);
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
  </div>
);
};

export default Home

