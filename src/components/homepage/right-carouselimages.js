import React, { useState } from 'react';
import parse from 'html-react-parser';
import RemoveImage from './carousel-delete';
import MediaQuery from 'react-responsive';



const CarouselImages = (props) => {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };


    return (
      
      <div className='carousel'>
     <MediaQuery  minWidth={1035}>
        <div className='carousel-quote'>
        {parse(props.data.quote)}
          </div>

<div className='carousel-media-container'>
        
          <img
            className="d-block w-100 carouselimg"
            src={props.data.featuredImage}
            alt="Slide"
            style = {{
                maxHeight: 330,
                height: 330,
                width:40
            }}
          />
          
        <div className='article-delete'>
            <RemoveImage data={props.data} />
            </div>
     </div>
     </MediaQuery>
     <MediaQuery maxWidth={1034} minWidth={200}>
        <div className='carousel-quote'>
        {parse(props.data.quote)}
          </div>

<div className='carousel-media-container'>
        
          <img
            className="d-block w-100 carouselimg"
            src={props.data.featuredImage}
            alt="Slide"
            style = {{
                maxHeight: 330,
                width:40
            }}
          />
          
        <div className='article-delete'>
            <RemoveImage data={props.data} />
            </div>
     </div>
     </MediaQuery>
     </div>
    );
    }
    export default CarouselImages;