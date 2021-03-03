import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import WhoWeAreContent from './WhoWeAreContent';
import SimpleModal from '../modals/admin-modal';

const db = firebase.default.firestore()



class WhoWeAre extends Component {
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
        .collection( 'WhoWeAre' )
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
               <h1 className='AboutUsHeader'>About <span style={{color: "#00A6A8", fontFamily: "Roboto"}}> Us</span></h1>
           </div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                    <div className='edit-modal'>
                      <SimpleModal />
                    </div>
                    <div className='social-media-icons-aboutus'>
                <a className='facebook-icon' href='https://www.facebook.com/CCreekServices/'>
                <img  alt="ccs facebook" src="/assets/images/facebook.png"/>
                </a>
                <a className='instagram-icon' href='https://www.instagram.com/ccreekservices/?hl=en'>
                <img  alt="ccs instagram" src="/assets/images/instagram.png"/>
                </a>
                <a className='linkedin-icon' href='https://www.linkedin.com/company/canyon-creek-services/'>
                <img  alt="ccs linkedin" src="/assets/images/linkedin.png"/>
                </a>
                <a className='twitter-icon' href='https://twitter.com/ccreekservices?lang=en'>
                <img  alt="ccs twitter" src="/assets/images/twitter.png"/>
                </a>
                </div>
                </div>
                

                    <div className='page-info'> 
                    <div className='whowearespacer'></div>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <WhoWeAreContent className='whoweare'
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

export default WhoWeAre;