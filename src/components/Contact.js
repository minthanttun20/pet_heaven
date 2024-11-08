import React from 'react'
import { CiMail,CiPhone,CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-text'>
        <h1>Contact Us</h1>
        <p>If you have any questions or enquiries, please don't hesitate to send us a message and we will try our best to get back to you shortly.</p>
      </div>
      <div className='contact-container'>
        <section className='contact-info'>
            <div className='contact-details'>
              <div className='contact-detail'>
                <CiMail className='icon'/>
                <div>
                  <h3>Email</h3>
                  <p>enquiries@petheaven.org.sg</p>
                </div>
              </div>
              <div className='contact-detail'>
                <CiPhone className='icon'/>
                <div>
                  <h3>Call Us</h3>
                  <p>+658012345</p>
                </div>
              </div>
              <div className='contact-detail'>
                <CiLocationOn className='icon'/>
                <div>
                  <h3>Visit Us</h3>
                  <p>50 Sungei Tengah Road, Singapore 699012</p>
                </div>
              </div>
            </div>
        </section>
        <form className='contact-form'>
          <h1>Send Us An Enquiry</h1>

          <label>Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Message *</label>
          <textarea
            id="comment"
            name="comment"
            required
          ></textarea>

          <button className='contact-btn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact