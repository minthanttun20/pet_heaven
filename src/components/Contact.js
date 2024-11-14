import React, { useState } from 'react'
import { CiMail,CiPhone,CiLocationOn } from "react-icons/ci";

import Footer from './Footer'

const Contact = () => {
  const contactInfo = [
    { icon: <CiMail className='icon'/>, header: "Email", text: "enquiries@petheaven.org.sg" },
    { icon: <CiPhone className='icon'/>, header: "Phone", text: "+65-1234567" },
    { icon: <CiLocationOn className='icon'/>, header: "Location", text: "50 Sungei Tengah Road, Singapore 699012" },
  ];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendMessage = async(e) => {
    e.preventDefault();
    try {

      setEmail("");
      setName("");
      setMessage("");

      setSuccessMessage("Thank you for reaching out! Your message has been sent.");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setSuccessMessage("There was an error sending your message. Please try again later.");
    }
  }

  return (
    <>
    <div className='contact'>
      <div className='contact-text'>
        <h1>Contact Us</h1>
        <p>If you have any questions or enquiries, please don't hesitate to send us a message and we will try our best to get back to you shortly.</p>
      </div>

      <div className="map">
        <iframe
          title="Pet Heaven Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.2620384503497!2d103.7735996!3d1.3294066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1080893304bd%3A0xc889e76f4e447e42!2sSIM%20Global%20Education!5e0!3m2!1sen!2ssg!4v1699623111111!5m2!1sen!2ssg"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className='contact-container'>
        <section className='contact-info'>
            <div className='contact-details'>
              
            {contactInfo.map((e, index) => (
              <div className='contact-detail' key={index}>
                {e.icon}
                <div>
                  <h3>{e.header}</h3>
                  <p>{e.text}</p>
                </div>
              </div>
            ))}
            </div>
        </section>
        <form className='contact-form' onSubmit={sendMessage}>
          <h1>Send Us An Enquiry</h1>
          <label>Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message *</label>
          <textarea
            id="comment"
            name="comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button className='contact-btn'>Send</button>
          {successMessage && <p className='success-msg'>{successMessage}</p>}
        </form>
      </div>
      <div className="contact-hours">
        <h3>Contact Hours</h3>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact