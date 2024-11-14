import React from 'react'
import Footer from './Footer'

import { RiMoneyDollarCircleFill } from "react-icons/ri";

import pet1 from "./images/pet1.jpg";
import pet2 from "./images/pet2.jpg"

const Donation = () => {
  return (
    <>
      <div className='donation-cointer scale-in'>
        <div className='donation'>
          <div className='donation-text'>
            <h1>Donate</h1>
            <p>Support our mission to rescue, rehabilitate, and rehome animals in need. Every donation, big or small, helps save lives and brings us closer to a world where every animal is safe and loved</p>
          </div>
          <img src={pet1} alt='pet1' className='pet1'/>
        </div>
        <div className='donation'>
          <img src={pet2} alt=''  className='pet2'/>
          <div className='donation-text'>
            <h1>Donate To Our Animal Selter</h1>
            <p>We believe that every animal deserves a safe and happy life. With that goal in mind, we have created animal shelters across the country to vaccinate, rescue, and foster stray cats and dogs.</p>
          </div>
        </div>
      </div>
      <div className='donation-price-container'>
        <h1>Donation Plan</h1>

        <div className='donation-prices'>
          <div className='donation-price'>
              <h2>$10</h2>
              <p>Feeds 5 dogs for a day</p>
              <a href='#'><RiMoneyDollarCircleFill /> Donate Now</a>
          </div>

          <div className='donation-price'>
              <h2>$50</h2>
              <p>Provides essential medical care for one rescued animal</p>
              <a href='#'><RiMoneyDollarCircleFill /> Donate Now</a>
          </div>

          <div className='donation-price'>
            <h2>$200</h2>
            <p>Covers food and shelter for 10 animals for a month</p>
            <a href='#'> <RiMoneyDollarCircleFill /> Donate Now</a>
          </div>
        </div>

        <div className="donation-progress">
          <h3>Goal: $10,000</h3>
          <div className="progress-bar">
            <div style={{ width: '60%' }} className="progress"></div>
          </div>
          <p>$6,000 raised so far!</p>
          <iframe
            width="560"
            height="315"
            src='https://www.youtube.com/embed/3HS_DK7l908'
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className='donation2'>
          <div className="recurring-donation">
            <h3>Become a Monthly Donor</h3>
            <p>Your monthly contribution will help us provide consistent care and support for animals in need.</p>
            <a href="#">Set Up Monthly Donation</a>
          </div>

          <div className="donation-testimonials">
            <h3>What Our Donors Say</h3>
            <div className="testimonial">
              <p>"Donating to Pet Heaven was the best decision. I know my contribution is making a real difference!"</p>
              <h4>- Sarah, Donor</h4>
            </div>
          </div>
        </div>

        <div className="social-sharing">
          <h3>Share Your Support</h3>
          <a href="https://twitter.com/share?url=https://petheaven.org/donate" target="_blank">Share on Twitter</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://petheaven.org/donate" target="_blank">Share on Facebook</a>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Donation