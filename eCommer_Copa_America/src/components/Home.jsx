import React from 'react'
import './Home.css'
import {items} from '../Data/products'

function Home() {
    
  const handleSelectItems = (product) => {
    alert(product);
  };
  return (
    <div className='home_container'>
    <h2>Lista de Productos</h2>
    <ul>
      {items.map((item) => (
        <p className='p_country'
          key={item.Id}
          onClick={() => handleSelectItems(item.Name)}
        >
          {item.Name}
        </p>
      ))}
    </ul>
  </div>
);
};

export default Home

