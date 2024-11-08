import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser} from "react-icons/fa";
import { Link } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const register = async(event) => {
        
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user) {
              await setDoc(doc(db,"Users", user.uid), {
                "email": email, "name": name
              })
            }
            alert('Register Successfully.');
            window.location.href="/login";
        } catch (error) {
          console.log(error.message);
        }

    }
    return (
        <div className='register-container'>
            <h1 className='register-title'>
              Register
            </h1>
            <form onSubmit={register} className='register-form'>
                <label htmlFor="name"><FaUser/>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
              <label htmlFor="email"><MdEmail/>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password"><FaLock/>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password"><FaLock/>Password</label>
              <input
                type="password"
                id="password1"
                name="password"
                placeholder="Retype your password"
                required
              />
              <p>Already have an account? <Link to='/login'>Login</Link></p>
              <button type="submit">Register</button>
            </form>
        </div>
      )
}

export default Register