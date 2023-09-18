import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className='Signup'>
        <span className="logintitle">Login</span>
<form className="loginform">
    <label>
        Email
    </label>
    <input type='email' className='logininput' placeholder='Enter Your Email'/>
    <label>Password</label>
    <input type="password" className='logininput'placeholder='Enter Your Password'/>
    <button className="loginbutton">Login</button>
</form>
<button className="loginregisterbutton">Register</button>
    </div>
  )
}

export default Signup