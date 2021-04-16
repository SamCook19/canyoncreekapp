
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import parse from 'html-react-parser';

const Quotes = (props) =>{
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
           {parse(props.data.firstslideFirst)}
           </div>
           <div className="second-quote">
           {parse(props.data.firstslideSecond)}
           </div>
           <div className="third-quote">
           {parse(props.data.firstslideThird)}
           </div>

        </Carousel.Item>
        <Carousel.Item className="second-slide">
        <div className="first-quote">
        {parse(props.data.secondslideFirst)}
           </div>
           <div className="second-quote">
           {parse(props.data.secondslideSecond)}
           </div>
           <div className="third-quote">
           {parse(props.data.secondslideThird)}
           </div>
        </Carousel.Item>
        <Carousel.Item className="third-slide">
        <div className="first-quote">
        {parse(props.data.thirdslideFirst)}
           </div>
           <div className="second-quote">
           {parse(props.data.thirdslideSecond)}
           </div>
           <div className="third-quote">
           {parse(props.data.thirdslideThird)}
           </div>
        </Carousel.Item>
      </Carousel>
      </div>
      
      </div>
    );
  }

  export default Quotes;