import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MediaQuery from 'react-responsive';


function ControlledCarousel() {
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
  <MediaQuery minWidth={1000}>
      <Carousel activeIndex={index} onSelect={handleSelect} className='right-side-carousel'>
        
        <Carousel.Item>
        
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="First slide"
            style = {{
                maxHeight: 450,
                height: 450,
                width:40
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="Second slide"
            style = {{
                maxHeight: 450,
                height: 450,
                width:40
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="Third slide"
            style = {{
                maxHeight: 450,
                height: 450,
                width:40
            }}
          />
        </Carousel.Item>
      </Carousel>

      </MediaQuery>

      <MediaQuery maxWidth={1000} minWidth={601}>
      <Carousel activeIndex={index} onSelect={handleSelect} className='right-side-carousel'>
        
        <Carousel.Item>
        
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="First slide"
            style = {{
                maxHeight: 450,
                height: 300,
                width:40
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="Second slide"
            style = {{
                maxHeight: 450,
                height: 300,
                width:40
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="Third slide"
            style = {{
                maxHeight: 450,
                height: 300,
                width:40
            }}
          />
        </Carousel.Item>
      </Carousel>

      </MediaQuery>

      <MediaQuery maxWidth={600}>
      <Carousel activeIndex={index} onSelect={handleSelect} className='right-side-carousel'>
        
        <Carousel.Item>
        
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="First slide"
            style = {{
                maxHeight: 450,
                height: 200,
                width:40
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="Second slide"
            style = {{
                maxHeight: 450,
                height: 200,
                width:40
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselimg"
            src="https://picsum.photos/960/300"
            alt="Third slide"
            style = {{
                maxHeight: 450,
                height: 200,
                width:40
            }}
          />
        </Carousel.Item>
      </Carousel>
      </MediaQuery>
      </div>
      
      </div>
    );
  }

export default ControlledCarousel;