import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import kitty from './images/kitty.jpg'
import pet3 from './images/pet3.jpg'
import pet4 from './images/pet4.jpg'
import pet5 from './images/pet5.jpg'
import pet7 from './images/pet7.jpg'
import poster1 from './images/poster1.webp'
import poster2 from './images/poster2.webp'
import poster3 from './images/poster3.webp'

import SlideShow from './SlideShow'
import Footer from './Footer'


const Home = () => {
  const info = [
    {src: pet4, header: "Adopt", text:"Ready to open your heart and home? Adopt a pet in need and make a lifelong friend!", button: "adopt"},
    {src: pet5, header: "Volumters Needed", text:"We need volunteers to help care for pets in need—join us in making a difference!", button: "/volunter"},
    {src: pet7, header: "Donate", text:"Help us make a difference! Your donation provides food, shelter, and care for pets in need.", button: "/donation"},
    {src: poster1, header: "Events", text:"Join our upcoming events to support pet adoption, volunteer work, and community involvement!", button: "/events"},
    {src: pet3, header: "Foster a Pet", text:"Provide temporary love and care to pets waiting for their forever homes!", button: "/foster"},
  ];

  return (
    <div>
      <div className='home-container scale-in'>
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
        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className='upcoming-event'>
            <div className='event'>
              <img src={poster1} alt='' />
              <h3>Pet Adoption Day</h3>
              <hr/>
              <p>Date: <span>Saturday, November 18, 2024</span></p>
              <p>Location: <span>City Park Community Center</span></p>
              <p>Join us for our monthly adoption event! Meet adorable pets looking for their forever homes, enjoy family-friendly activities, and learn about how you can help make a difference in the lives of animals.</p>
              <Link>Register Now</Link>
            </div>
            
            <div className='event'>
              <img src={poster2} alt=''/>
              <h3>Holiday Fundraiser Gala</h3>
              <hr/>
              <p>Date: <span>Friday, December 15, 2024</span> </p>
              <p>Location: <span>Downtown Event Hall</span></p>
              <p>Celebrate the holiday season with us at our annual gala! All proceeds go towards food, shelter, and medical care for pets in need. Enjoy an evening of dining, auctions, and live entertainment.</p>
              <Link>Register Now</Link>
            </div>

            <div className='event'>
              <img src={poster3} alt=''/>
              <h3>Volunteer Orientation</h3>
              <hr/>
              <p>Date: <span>Saturday, January 13, 2025</span></p>
              <p>Location: <span>Pet Heaven Shelter Headquarters</span></p>
              <p>Interested in volunteering? Come to our orientation session to learn about volunteer opportunities, training, and the positive impact you can have on the lives of animals.</p>
              <Link to='/registerform'>Register Now</Link>
            </div>
          </div>
        </div>
        <div className="educational-tips">
          <h2>Educational Tips</h2>
          <div className='educational-tip'>
            <div className='tip'>
              <h3>Tip 1: Preparing Your Home for a New Pet</h3>
              <p>Ensure you have all the essentials ready, like food, bedding, toys, and a designated space for your pet. A smooth transition can make your new friend feel comfortable and secure.</p>
            </div>
            
            <div className='tip'>
              <h3>Tip 2: The Importance of Regular Vet Visits</h3>
              <p>Scheduling regular check-ups with a veterinarian helps keep your pet healthy. Early detection of health issues can make a big difference in your pet’s well-being.</p>
            </div>
            
            <div className='tip'>
              <h3>Tip 3: Training Basics for New Pet Owners</h3>
              <p>Positive reinforcement is key! Reward good behavior with treats and praise. Training helps build a stronger bond with your pet and ensures they stay safe and well-behaved.</p>
            </div>
          </div>
        </div>
        <div className="pet-care-tips">
          <h2>Essential Pet Care Tips</h2>
          <div className='pet-care-tip'>
            <div className='care-tip'>
              <h3>Nutrition</h3>
              <ul>
                <li>Feed high-quality, age-appropriate food</li>
                <li>Maintain regular feeding schedules</li>
                <li>Provide fresh water 24/7</li>
                <li>Monitor portion sizes to prevent obesity</li>
              </ul>
            </div>
            
            <div className='care-tip'>
              <h3>Exercise & Entertainment</h3>
              <ul>
                <li>Daily walks or playtime</li>
                <li>Interactive toys for mental stimulation</li>
                <li>Regular socialization with other pets</li>
                <li>Scheduled play sessions</li>
              </ul>
            </div>
            
            <div className='care-tip'>
              <h3>Grooming</h3>
              <ul>
                <li>Regular brushing and bathing</li>
                <li>Nail trimming when needed</li>
                <li>Dental hygiene maintenance</li>
                <li>Ear cleaning and check-ups</li>
              </ul>
            </div>

            <div className='care-tip'>
              <h3>Health & Safety</h3>
              <ul>
                <li>Keep vaccinations up to date</li>
                <li>Monthly flea and tick prevention</li>
                <li>Pet-proof your home</li>
                <li>Know emergency vet locations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home