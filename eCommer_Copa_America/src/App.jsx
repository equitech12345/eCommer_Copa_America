import './App.css'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
    <header>
      <h1>eCommer Copa Ameria</h1>
      <p>Bienvenido al eComer de la Selección Argentina</p>
    
    <nav>
    <NavLink to ={"/"}>Home</NavLink>
    <NavLink to ={"login"}>Login</NavLink>
    <NavLink to ={"register"}>Register</NavLink>

    </nav>


    </header>
      
    </>
  )
}

export default App
