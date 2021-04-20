
import React from 'react'
import * as firebase from 'firebase';
import CarouselImages from './right-carouselimages';
import Carousel from 'react-bootstrap/Carousel';
import SimpleModal from '../modals/carousel-modal';

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
    this.getMyCarousel()
  }

  getMyCarousel = () => {
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
        <Carousel  id="slide"
        indicators={false}
        className='right-side-carousel'>
          
         {
                    
                        this.state.articles.map((article, index) => 
                          
                          <Carousel.Item>
                         
                            <CarouselImages
                            key={index} 
                            data={article}
                            />
                        </Carousel.Item>
                        )
                }
               
                    </Carousel>
                    <div className='carousel-edit-button'>
                <SimpleModal />
          </div>
          </div>
          
      )
}
}

export default ControlledCarousel;