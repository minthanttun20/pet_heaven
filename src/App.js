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
import AdaptionForm from './components/AdaptionForm';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
      }
    })
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={user? <Navigate to='/profile'/> : <Register />} />
        <Route path="/login" element={user? <Navigate to='/profile'/> : <Login />} />
        <Route path="/profile" element={!user ? <Navigate to='/login'/> : <Profile/>} />

        <Route path="/adoption" element={!user ? <Navigate to='/login'/> :  <AdaptionForm/>} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adapt/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/release" element={<Release/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/volunter" element={<Volunter/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
