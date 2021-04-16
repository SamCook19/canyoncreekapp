// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import MediaQuery from 'react-responsive';


// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };


//     return (
//       <div className='carousel'>
//         <div className='carousel-quote'>We engage in evidence-based primary prevention
// activities throughout our service area. We work to
// prevent violence.</div>

// <div className='carousel-media-container'>
//   <MediaQuery minWidth={1000}>
  
//       <Carousel activeIndex={index} onSelect={handleSelect} indicators={true} className='right-side-carousel'>
      
//         <Carousel.Item>
        
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="First slide"
//             style = {{
//                 maxHeight: 450,
//                 height: 450,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="Second slide"
//             style = {{
//                 maxHeight: 450,
//                 height: 450,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="Third slide"
//             style = {{
//                 maxHeight: 450,
//                 height: 450,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//       </Carousel>
      
//       </MediaQuery>

//       <MediaQuery maxWidth={1000} minWidth={601} maxHeight={900}>
//       <Carousel activeIndex={index} onSelect={handleSelect} className='right-side-carousel'>
        
//         <Carousel.Item>
        
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="First slide"
//             style = {{
//                 maxHeight: 300,
//                 height: 300,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="Second slide"
//             style = {{
//                 maxHeight: 300,
//                 height: 300,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="Third slide"
//             style = {{
//                 maxHeight: 300,
//                 height: 300,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//       </Carousel>

//       </MediaQuery>

//       <MediaQuery maxWidth={600} maxHeight={300}>
//       <Carousel activeIndex={index} onSelect={handleSelect} className='right-side-carousel'>
        
//         <Carousel.Item>
        
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="First slide"
//             style = {{
//                 maxHeight: 200,
//                 height: 200,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="Second slide"
//             style = {{
//                 maxHeight: 200,
//                 height: 200,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carouselimg"
//             src="https://picsum.photos/960/300"
//             alt="Third slide"
//             style = {{
//                 maxHeight: 200,
//                 height: 200,
//                 width:40
//             }}
//           />
//         </Carousel.Item>
//       </Carousel>
//       </MediaQuery>
//       </div>
      
//       </div>
//     );
//   }

//   export default ControlledCarousel;

import React from 'react'
import * as firebase from 'firebase';
import CarouselImages from './right-carouselimages';

const db = firebase.default.firestore()

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      articles: []
    }
  }

  componentDidMount() {
    this.getMyArticles()
  }

  getMyArticles = () => {
    db
    .collection( 'Carousel' )
    .get()
    .then(docs => {
      if(!docs.empty){
        let allArticles = []
        docs.forEach(function (doc) {
          const article = {
            id: doc.id,
            ...doc.data()
          }

          allArticles.push(article)
        })

        this.setState({
          articles: allArticles
        }, () => {
          this.setState ({
            isLoaded: true
          })
        })
      }
    })
  }
  
  render() {
    return (
      <div className='CarouselContainer'>
         {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <CarouselImages className='Carousel'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
          </div>
      )
  }
}

export default ControlledCarousel;