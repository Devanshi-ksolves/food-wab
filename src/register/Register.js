import React from 'react'
import "./register.css"

const Register= () => {
  return (
    <div className='Register'>
        <span className="Registertitle">Register</span>
<form className="Registerform">
<label>
        UserName
    </label>
    <input type='text' className='Registerinput' placeholder='Enter Your Name'/>
    <label>
        Email
    </label>
    <input type='email' className='Registerinput' placeholder='Enter Your Email'/>
    <label>Password</label>
    <input type="password" className='Registerinput'placeholder='Enter Your Password'/>
    <button className="Registerbutton">Register</button>
</form>
<button className="loginregisterbutton">Login</button>
    </div>
  )
}

export default Register