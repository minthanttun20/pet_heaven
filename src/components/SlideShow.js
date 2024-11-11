import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";


const SlideShow = ({info, interval = 3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + info.length) % info.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % info.length);
  };

  // Function to display the current 3 images
  const getDisplayedImages = () => {
    const displayedImages = [];
    for (let i = 0; i < 3; i++) {
      displayedImages.push(info[(currentIndex + i) % info.length]);
    }
    return displayedImages;
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, [currentIndex, interval]);

  return (
    <div className="slideshow">
      <MdArrowBackIos onClick={prevSlide} className="arrow left-arrow" />
      <div className="slide-container">
        {getDisplayedImages().map((image, index) => (
            <div key={index} className="slide-card">
                <img src={image.src} className='slide-image' alt='img' />
                <h1 className='slide-header'>{image.header}</h1>
                <p className="slide-text">{image.text}</p>
                <Link to={image.button} className='slide-btn'>Learn More</Link>
            </div>

        ))}
      </div>
      <MdArrowForwardIos onClick={nextSlide} className="arrow right-arrow"/>
    </div>
  );
}

export default SlideShow