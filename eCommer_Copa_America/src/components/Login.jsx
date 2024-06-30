import React from 'react'
import './Login.css'

function Login() {
 
  return (
    <div className = 'container'>
    <h1>Login</h1>
    <form className='form_login'>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        
        <button type='submit' className='button_login'>Login</button>   
    </form>
    </div>
  )
}

export default Login