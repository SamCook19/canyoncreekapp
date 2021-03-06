
import React, { Component } from 'react'
import * as firebase from 'firebase';
import Carousel from 'react-bootstrap/Carousel';
import QuoteModal from '../modals/quote-modal';
import HomepageSocialMedia from './homepage-socialmedia'

const db = firebase.default.firestore()

class QuoteCarousel extends React.Component {
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
    .collection( 'Quotes' )
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
      <div className='quote-carousel'>
        <div className='left-side-carousel-container'>
        <Carousel  indicators={false} controls={false} className='left-side-carousel' fade interval={4000}>
          
         {
                    
                        this.state.articles.map((article, index) => 
                          
                          <Carousel.Item className='quote-item'>
                         
                            <QuoteContainer
                            key={index} 
                            data={article}
                            />
                        </Carousel.Item>
                        )
                }
               {/* <div className='quote-edit-modal'>
            <QuoteModal data={this.props.data}/>
          </div> */}
                    </Carousel>
                    
          </div>
          </div>
          
      )
}
}

export default QuoteCarousel;

import parse from 'html-react-parser';


class QuoteContainer extends Component {
   

render () {
    return (
      
        <div className='first-slide'>
        <div className="first-quote">
           {parse(this.props.data.firstslide)}
           </div>
           <div className="second-quote">
           {parse(this.props.data.secondslide)}
           </div>
           <div className="third-quote">
           {parse(this.props.data.thirdslide)}
           </div>
           <div className='quote-edit-modal'>
             <QuoteModal data={this.props.data}/>
           </div>
     </div>
     
    );
    }  
  }