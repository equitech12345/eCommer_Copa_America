import React, { useState } from 'react'
import './Home.css'
import {items} from '../Data/products'
import Search from './Search';

function Home() {
    
  const handleSelectItems = (product) => {
    alert(product);
  };
  const [query, setQuery] = useState('')
  return (
    <div className='home_container'>
    <h2>Lista de Productos</h2>
    <Search setQuery={setQuery}/>
    <ul>
      {items
      .filter((item) => item.Name.toLowerCase().includes(query.toLowerCase()))
      .map((item) => (
        <p className='p_item'
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

