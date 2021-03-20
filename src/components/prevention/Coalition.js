import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import CoalitionContent from './coalitioncontent';
import CoalitionBackground from './coalitionbackground';
import SimpleModal from '../modals/coalition-modal';
import PageSocialMedia from '../pagesocialmedia';

const db = firebase.default.firestore()

class Coalition extends Component {
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
        .collection( 'Coalition' )
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
        <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
                
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            </div>
            <div className='page-heading'>
               <h1 className='CoalitionHeader'> <span style={{color: "#F16022", fontFamily: "Roboto"}}> Prevent</span> Violence</h1>
           </div>
                </div>
                <div className='coalition-page-content'>
                <div className='coalition-buttons-component'>
                    <ButtonsComponent />
                    <SimpleModal />
                    
                </div>
                <div className='social-media-icons-page'>
               <PageSocialMedia />
                </div>
                    <div className='prevention-info'> 
                  
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <CoalitionContent className='CoalitionContent'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                </div>
                <div className='coalition-background'> 
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <CoalitionBackground className='CoalitionBackground'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                </div>
            </div>
            </div>
        )
    }
}

export default Coalition;