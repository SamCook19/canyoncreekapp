import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
      <Carousel activeIndex={index} onSelect={handleSelect} indicators className='right-side-carousel'>
        <Carousel.Item>
        <Carousel.Caption className='carousel-caption'>
          <div className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption >
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
  
          <Carousel.Caption className='carousel-caption'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
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
  
          <Carousel.Caption className='carousel-caption'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default ControlledCarousel;