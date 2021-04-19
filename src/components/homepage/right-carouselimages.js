import React, { useState } from 'react';
import parse from 'html-react-parser';



const CarouselImages = (props) => {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };


    return (
      <div className='carousel'>
        <div className='carousel-quote'>
        {parse(props.data.quote)}
          </div>

<div className='carousel-media-container'>
        
          <img
            className="d-block w-100 carouselimg"
            src={props.data.featuredImage}
            alt="Slide"
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