import React, { Component } from 'react';
import ContactButton from './contactbutton';
import HotlineButton from './hotline';
import EscapeButton from './escapebutton';
import BusinessButton from './businessbutton';
import HeroImage from '../homepage/HeroImage';
import BusinessButtonMobile from './BusinessButtonMobile';
import HotlineButtonMobile from './HotlineButtonMobile';
import DonateButton from './donatebutton.js';
import * as firebase from 'firebase';

const db = firebase.default.firestore()

class HomeButtonsComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoaded: false,
            articles: []
        }
      }
    
      componentDidMount() {
        this.getMyArticles()
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

    render() {
        return (
            <div className='homebutton-container'>
            <div className='hero-img'>
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
            
            <div className='contact-button'>
                <ContactButton />
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default HomeButtonsComponent;