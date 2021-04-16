import React, { Component } from 'react';
import Quotes from './quotes';
import HomepageSocialMedia from './homepage-socialmedia';
import * as firebase from 'firebase';
import SimpleModal from '../modals/quote-modal';

const db = firebase.default.firestore()

class LeftColumn extends Component {
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
            <div className='left-column'>
               <div className='quote-slide-show'>
               {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <Quotes className='Carousel'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                </div>
                <div className="quote-edit-button">
                      <SimpleModal />
                </div>
                <div className='social-media-container'>
                
                    <HomepageSocialMedia />
                </div>
            </div>
        );
    }
}

export default LeftColumn;