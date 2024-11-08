import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {

  const login = async(event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      alert("Successfully Login")
      window.location.href="/profile";
    } catch (error) {
      console.log(error.message); 
    }
  }

  return (
    <div className='login-container'>
        <h1 className='login-title'>
          Login
        </h1>
        <form onSubmit={login} className='login-form'>
          <label htmlFor="email"><MdEmail/>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password"><FaLock/>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <p>Don't have an account? <Link to='/Register'>Register</Link></p>
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login