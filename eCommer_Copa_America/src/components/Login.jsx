import React from 'react'
import './Login.css'

function Login() {
 
  return (
    <div className = 'container_login'>
    <h1>Login</h1>
    <form className='form_login'>
        <label >Email
        <input type="email" placeholder="Email"/>
        </label>
        <label>Password
        <input type="password" placeholder="Password"/>
        </label>
        <button type='submit' className='button_login'>Login</button>   
    </form>
    </div>
  )
}

export default Login