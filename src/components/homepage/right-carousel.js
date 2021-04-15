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
  
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} className='right-side-carousel'>
      
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
                maxHeight: 300,
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
                maxHeight: 300,
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
                maxHeight: 300,
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
                maxHeight: 200,
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
                maxHeight: 200,
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
                maxHeight: 200,
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

// import React from 'react'
// import * as firebase from 'firebase';
// import { Carousel } from 'react-responsive-carousel'

// const db = firebase.default.firestore()

// class ControlledCarousel extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       images: null
//     }
//   }

//   componentDidMount() {
//     this.getMyCarousel()
//   }

//   getMyCarousel = () => {
//     db
//         .collection( 'Carousel' )
//         .get()
//         .then(response => response.json()) // If it's a JSON response, you have to parse it firstly
//         .then(images => this.setState({ images })) // #2. After that you have to keep the images in the component's state.
//       }

//   render () {
//     const { images } = this.state

//     if (!images) return <div>Images are not fetched yet!</div>

//     // #3. Finally, render the `<Carousel />` with the state's images.
//     return <Carousel autoPlay infiniteLoop='true'>
//       {
//         images.map( image => {
//           return <div>
//             <img src={ image.path } />
//             <p className="legend">{ image.name }</p>
//           </div>
//         })
//       }
//     </Carousel>
//   }
// }

// export default ControlledCarousel;