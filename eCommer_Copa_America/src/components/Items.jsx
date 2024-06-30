import React from 'react'
import { items } from '../Data/products.jsx'
import './Items.css'

function Items() {
  return (
        <>
        <h1>Selecciones el producto que desea comprar</h1>
        <div className='container'>
          {items.map((item) => (
            <div className='card' key={item.Id}>
              <img src={item.Photo} alt={item.Photo} />
              <h3>{item.Name}</h3>
              <p className='p_description'>{item.Description}</p>
              <p className='p_price'>$ {item.Price}</p>
              <button onClick={()=>{
                alert('Product added to cart');
              }} className='button_home'>Buy</button>
            </div>
          ))}
        </div>
        </>
        )
}

export default Items