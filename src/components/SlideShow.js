import React from 'react'
import { useState, useEffect } from 'react';


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
      <button onClick={prevSlide} className="arrow left-arrow">←</button>
      <div className="slide-container">
        {getDisplayedImages().map((image, index) => (
           <div key={index} className="slide-card">
            <img src={info.src} className='slide-image' alt='img' />
           <p className="slide-text">{image.text}</p>
         </div>
        ))}
      </div>
      <button onClick={nextSlide} className="arrow right-arrow">→</button>
    </div>
  );
}

export default SlideShow