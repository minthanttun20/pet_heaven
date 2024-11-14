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
import VolunteeringForm from './components/VolunteeringForm';
import Review from './components/Review';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ReviewForm from './components/ReviewForm';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <Loading/>;
  }


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={user ? <Navigate to='/profile'/> : <Register />} />
        <Route path="/login" element={user? <Navigate to='/profile'/> : <Login />} />
        <Route path="/profile" element={!user ? <Navigate to='/login'/> : <Profile/>} />

        <Route path="/adoptionForm/:id" element={!user ? <Navigate to='/login' /> :
        <AdaptionForm />} />

        <Route path="/volunteerForm/:id" element={!user ? <Navigate to='/login' /> :
        <VolunteeringForm />} />
        <Route path="/blog/:id" element={<BlogPost/>} />


        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopt" element={<Adapt/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/release" element={<Release/>} />
        <Route path="/donation" element={<Donation/>} />
        <Route path="/volunter" element={<Volunter/>} />
        <Route path='/review' element={<Review/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/reviewForm' element={<ReviewForm/>}/>

        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
