import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <header>
      <h1>eCommer Copa America</h1>
      <p>Bienvenido al eComer de la Selección Argentina</p>
    
    <nav className='navbar'>
    <NavLink className={({isActive})=>
    isActive? 'navbar-selected' : null} to ={"/"}>Home</NavLink>
    <NavLink className={({isActive})=>
    isActive? 'navbar-selected' : null} to ={"login"}>Login</NavLink>
    <NavLink className={({isActive})=>
    isActive? 'navbar-selected' : null} to ={"register"}>Register</NavLink>
    <NavLink className={({isActive})=>
    isActive? 'navbar-selected' : null} to ={"items"}>Items</NavLink>
    </nav>
    <Outlet />

    </header>
      
    </>
  )
}

export default App
