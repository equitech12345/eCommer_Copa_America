import React from 'react'

function Search({setQuery}) {
  return (
    <form>
        <input 
        type="search" 
        name='search' 
        aria-label='Producto a buscar' 
        placeholder='Producto a buscar...' 
        onChange={(e)=> setQuery(e.target.value)}/>
    </form>
  )
}

export default Search