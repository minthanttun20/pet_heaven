import './App.css';
import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Adapt from './components/Adapt';
import Release from './components/Release';
import Donation from './components/Donation';
import Volunter from './components/Volunter';
import AdaptionForm from './components/AdoptionForm';
import Profile from './components/Profile';
import { auth } from './firebase';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if(user) {
  //       setUser(user);
  //     }
  //   })
  // }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
      setLoading(false); // Auth status checked
    });
    return unsubscribe; // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading/>;
  }


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={user? <Navigate to='/profile'/> : <Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={!user ? <Navigate to='/login'/> : <Profile/>} />

        <Route path="/adoptionForm/:dogName" element={!user ? <Navigate to='/login' /> : <AdaptionForm />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adapt/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/release" element={<Release/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/volunter" element={<Volunter/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App;
