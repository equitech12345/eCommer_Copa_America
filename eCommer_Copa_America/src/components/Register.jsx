import React from 'react'
import './Register.css'

function Register() {
    const handleSubmit = (e) => {
     };
  return (
    <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='form_register'>
            <label>
                Name
            <input type="text"  placeholder="Name"/>
            </label>
            <label>Last Name
            <input type="text" placeholder="Last Name"/>
            </label>
            <label>Email
            <input type="email" placeholder="Email" name='email'/>
            </label>
            <label>Password
            <input type="password" placeholder="Password" name='password'/>
            </label>
            <button type="submit" className='button_register'>Register</button>    
        </form>
    </>
  )
}

export default Register