import React, { Component } from 'react';
import ContactButton from './contactbutton';
import HotlineButton from './hotline';
import EscapeButton from './escapebutton';
import BusinessButton from './businessbutton';
import HeroImage from '../homepage/HeroImage';
import BusinessButtonMobile from './BusinessButtonMobile';
import HotlineButtonMobile from './HotlineButtonMobile';
import DonateButton from './donatebutton.js';
import DonateButtonMobile from './donatebuttonmobile';
import * as firebase from 'firebase';

const db = firebase.default.firestore()

class HomeButtonsComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoaded: false,
            articles: [],
            mobileImage: [],
        }
      }
    
      componentDidMount() {
        this.getMyArticles(),
        this.getMyMobileImage()
      }
    
      getMyArticles = () => {
        db
        .collection( 'HeroImage' )
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

      getMyMobileImage = () => {
        db
        .collection( 'HeroImageMobile' )
        .get()
        .then(docs => {
          if(!docs.empty){
            let allImages = []
            docs.forEach(function (doc) {
              const Image = {
                id: doc.id,
                ...doc.data()
              }
    
              allImages.push(Image)
            })
    
            this.setState({
              mobileImage: allImages
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
            <div className='homebutton-container'>
            <div className='hero-img'>
              <div className="hero-img-desktop">
            {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <HeroImage className='Hero'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                      </div>
            <div className='home-button-group'>
            <div className='escape-button'>
                <EscapeButton />
            </div>
            <div className='hotline-button'>
                <HotlineButton />
            </div>
            <div className='business-button'>
                <BusinessButton />
            </div>
            <div className="donate-button-group">
                <DonateButton />
            </div>
            <div className='contact-button'>
                <ContactButton />
            </div>
            </div>
            <div className="hero-img-mobile">
              {
                      this.state.isLoaded ?
                        this.state.mobileImage.map((image, index) => {
                          return(
                          <HeroImageMobile className='Hero'
                            key={index}
                            data={image}
                          />
                          )
                        })
                        : '' 
                      }
              </div>
            <div className='mobile-button-group'>
              
            <div className='escape-button-mobile'>
                <EscapeButton />
            </div>
            
            <div className='hotline-button-mobile'>
                  <HotlineButtonMobile />
            </div>
            <div className='business-button-mobile'>
                      <BusinessButtonMobile />
            </div>
            <div className='donate-button-mobile'>
                      <DonateButtonMobile />
            </div>
            
            <div className='contact-button'>
                <ContactButton />
            </div>
            </div>
            </div>
            </div>
        );
    }
}

const HeroImageMobile = (props) => {
  return (
      <div className='hero-image-mobile-container'>
      <div className="hero-image-mobile-img">
      <img
      top
      src={props.data.featuredImage}
      alt="Card Image"
      className="CardImage"
      />
      </div>
      </div>
  );
}

export default HomeButtonsComponent;