import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';

import { IoMdPerson } from "react-icons/io";
import { doc, getDoc } from 'firebase/firestore';
import Loading from './Loading';

const Profile = () => {
    const [user , setUser] = useState(null);

    const fetchUserData = async() => {
            auth.onAuthStateChanged(async(user) => {
                if (user) {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef); 
                    if (docSnap.exists()) {
                        console.log(docSnap.data());
                        
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
    return (
        <>
            {user ? (
            <div>
                <div className='profile-container'>
                    <IoMdPerson className='profile-photo'/>
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