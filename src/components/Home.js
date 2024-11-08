import React from 'react'

import { Link } from 'react-router-dom'

import kitty from './images/kitty.jpg'
import pet3 from './images/pet3.jpg'
import pet4 from './images/pet4.jpg'
import pet5 from './images/pet5.jpg'
import pet7 from './images/pet7.jpg'


import SlideShow from './SlideShow'

const Home = () => {
  const info = [
    {src: pet4, text:"sample1"},
    {src: pet5, text:"sample2"},
    {src: pet7, text:"sample3"}
  ];

  return (
    <body className='home-container'>
      <main className='main'>
        <div className='main-text'>
          <h1>Find Your Forever Friend</h1>
          <p>Life is better with a loyal companion by your side. Discover your new pet waiting for you at our shelters.</p>
          <Link to='/adopt'>Adopt Now</Link>
        </div>
        <img src={kitty} alt='' className='main-img'/>
      </main>

      <SlideShow info={info} interval={3000} />
      
      <section className='section1'>
        <img src={pet3} alt='' className='section1-img'/>
        <div className='section1-text'>
          <h1>Excited to Give a Pet a Loving Home?</h1> 
          <p>We’d Love to Hear From You! Our team is always ready to support animals in need, rain or shine. If you're passionate about making a difference and are interested in adopting or volunteering, feel free to reach out to us. Together, let's create a safe and loving world for every animal.</p>
          <Link to='/contact' className='section1-btn'>Contact Us</Link>
          </div>
      </section>

    </body>
  )
}

export default Home