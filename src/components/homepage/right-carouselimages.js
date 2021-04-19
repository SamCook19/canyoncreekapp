import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MediaQuery from 'react-responsive';


const CarouselImages = (props) => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
      <div className='carousel'>
        <div className='carousel-quote'>We engage in evidence-based primary prevention
activities throughout our service area. We work to
prevent violence.</div>

<div className='carousel-media-container'>
        
          <img
            className="d-block w-100 carouselimg"
            src={props.data.firstLarge}
            alt="First slide"
            style = {{
                maxHeight: 450,
                height: 450,
                width:40
            }}
          />
        
     </div>
     </div>
    );
    }
    export default CarouselImages;