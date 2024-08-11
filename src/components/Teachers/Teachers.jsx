import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function Teachers() {
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
      <button className='btn_dash' type='submit'>Create Account</button>
      
    </form>
    </div>
    </div>
    
  )
}

export default Teachers
