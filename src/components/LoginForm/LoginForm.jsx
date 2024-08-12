import React, { useState } from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Buttons from '../Buttons/SelectButtons';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const correctUsername = "admin";
    const correctPassword = "admin";
    if (loginData.username === correctUsername && loginData.password === correctPassword) {
      setLoggedIn(true);
    } 
    else {
      console.error("Incorrect Credentials");
      alert("incorrect Credentials. Please try again")
    }
  }
  
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  if (isLoggedIn) {
    return <Buttons />;
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type='text' name="username" placeholder='Username' required onChange={handleChange} />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password' name="password" placeholder='Password' required onChange={handleChange} />
          <RiLockPasswordLine className='icon'/>
        </div>
        <div className='remember'>
          <label>
            <input type='checkbox'/>
            Remember Me
          </label>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm