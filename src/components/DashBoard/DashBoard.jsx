import React from 'react'
import './DashBoard.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function DashBoard() {
  return (
    <div className='main'>
   <div className='wrapper1'>
    <form >
      <h1>Teachers Account</h1>
      <div className="input-box1">
        <input type='text' name="username" placeholder='Username' required />
        <FaUser className='icon'/>
      </div>
      <div className='input-box1'>
        <input type='password' name="password" placeholder='Password' required  />
        <RiLockPasswordLine className='icon'/>
      </div>
      <button type='submit'>Create Account</button>
      
    </form>
  </div>
   <div className='wrapper1'>
    <form >
      <h1>Students Account</h1>
      <div className="input-box1">
        <input type='text' name="username" placeholder='Username' required />
        <FaUser className='icon'/>
      </div>
      <div className='input-box1'>
        <input type='password' name="password" placeholder='Password' required  />
        <RiLockPasswordLine className='icon'/>
      </div>
      <button type='submit'>Create Account</button>
      
    </form>
  </div>
    </div>
    
  )
}

export default DashBoard
