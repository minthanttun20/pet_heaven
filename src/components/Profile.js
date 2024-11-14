import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { IoMdPerson } from "react-icons/io";
import { doc, getDoc } from 'firebase/firestore';
import Loading from './Loading';

import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const [user , setUser] = useState(null);

  const navigate = useNavigate()

    const fetchUserData = async() => {
            auth.onAuthStateChanged(async(user) => {
                if (user) {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef); 
                    if (docSnap.exists()) {                        
                        setUser(docSnap.data());
                    } else {
                        console.log("User is not logged in.");
                    }
                } else {
                    console.log("User is not found");
                }
            });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    async function handlelogout() {
        try {
            await signOut(auth);
            window.location.href = '/login';
            console.log("Successfully logout");
        } catch (error) {
            console.log("Error logging out");
        }
    }

    const closeProfile = () => {
        navigate('/')
    }
    return (
        <>
            {user ? (
            <div>
                <div className='profile-container'>
                    <button className='close' onClick={closeProfile}><ImCross /></button>
                    <IoMdPerson className='profile-photo' />
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <button onClick={handlelogout} className='logout-btn'>Log Out</button>
                </div>
            </div>
        ) : (
            <Loading/>
        )
    }
        </>
    )
}

export default Profile