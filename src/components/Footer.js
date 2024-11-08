import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='get-in-touch'>
          <h1>Get in Touch With Us</h1>
          <div className='get-in-touch-form-container'>
              <p>Want to get the latest updates? Then subscribe to our newsletter.</p>
              <form id='get-in-touch-form' className='get-in-touch-form'>
                  <input type='email' placeholder='Your Email Address' id="email1" required/>
                  <button className='get-in-touch-btn'>Subscribe</button>
              </form>
          </div>
      </div>
        <div className='social-icons'>
            <FaFacebook className='social-icon'/>
            <FaTwitter className='social-icon'/>
            <FaLinkedin className='social-icon'/>
            <FaInstagram className='social-icon'/>
        </div>
        <div className='copyright'>
            <hr className='line'/>
            <h3>Copyright &copy; Pet Heaven</h3>
        </div>
      </footer>
    </>
  )
}

export default Footer