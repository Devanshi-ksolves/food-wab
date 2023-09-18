import React from 'react'
import "./settings.css"
import img11 from "./blue.jpg"

const Set = () => {
  return (
    <div>
        <div className="settings">
            <div className="settingswrapper">
                <div className="settingstitle">
                    <span className='settingsUpdatetitle'>Update your Account</span>
                    <span className='settingsDeletetitle'>Delete your Account</span>
                </div>
                 <form className='settingform'>
                    <label>Profile Picture</label>
                    <div className="settingpp">
                        <img src={img11} alt="" />
                    <label htmlFor="FileInput">
                    <i className="icon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="FileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Enter' />
                    <label>Email</label>
                    <input type="email" placeholder='Enter' />
                    <label>Password</label>
                    <input type="password" placeholder='Enter' />
                    <button className="settingsubmit">Update</button>
                 </form>
            </div>

        </div>
    </div>
  )
}

export default Set