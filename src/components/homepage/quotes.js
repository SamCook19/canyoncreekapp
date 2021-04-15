
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Quotes() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
      <div className='quote-carousel'>

<div className='carousel-media-container-quotes'>
  
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} className='left-side-carousel' fade interval={4000}>
      
        <Carousel.Item className="first-slide">
           <div className="first-quote">
           "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
           </div>
           <div className="second-quote">
           "Volunteering at Canyon Creek is the best decision I ever made."
           </div>
           <div className="third-quote">
           "The advocates here supported me in court when I had no other support system"
           </div>

        </Carousel.Item>
        <Carousel.Item className="second-slide">
        <div className="first-quote">
           "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
           </div>
           <div className="second-quote">
           "Another quote"
           </div>
           <div className="third-quote">
           "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
           </div>
        </Carousel.Item>
        <Carousel.Item className="third-slide">
        <div className="first-quote">
           "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
           </div>
           <div className="second-quote">
           "Quote again."
           </div>
           <div className="third-quote">
           "Canyon Creek taught my class about what consent is and helped me create healthy boundaries."
           </div>
        </Carousel.Item>
      </Carousel>
      </div>
      
      </div>
    );
  }

  export default Quotes;