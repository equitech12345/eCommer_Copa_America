import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1 className='title'>404 - Página No Encontrada</h1>
      <p className='message'>Lo sentimos, la página que estás buscando no existe.</p>
      <button className='button' onClick={()=> {navigate(-1)}}>go to</button>
    </div>
  );
};


export default NotFound;
