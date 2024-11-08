import React from 'react'

import { RiMoneyDollarCircleFill } from "react-icons/ri";

import pet1 from "./images/pet1.jpg";
import pet2 from "./images/pet2.jpg"

const Donation = () => {
  return (
    <>
      <div className='donation-cointer'>
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

      </div>
    </>
  )
}

export default Donation