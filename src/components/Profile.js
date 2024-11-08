import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';

import { IoMdPerson } from "react-icons/io";

const Profile = () => {
    async function handlelogout() {
        try {
            await signOut(auth);
            window.location.href = '/login';
            console.log("Successfully logout");
        } catch (error) {
            console.log("Error logging out");
        }
    }
  return (
    <div>
        <div className='profile-container'>
            <IoMdPerson className='profile-photo'/>
            <h1>John Doe</h1>
            <p>Email: apple@gmail.com</p>
            <button onClick={handlelogout} className='logout-btn'>Log Out</button>
        </div>
    </div>
  )
}

export default Profile