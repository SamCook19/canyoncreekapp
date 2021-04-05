import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import WhoWeAreContent from './WhoWeAreContent';
import SimpleModal from '../modals/whoweare-modal';
import PageSocialMedia from '../pagesocialmedia';
import MediaQuery from 'react-responsive';
import SmallNavDrawer from '../navigation/SmallNavDrawer';

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
            <div className='navbar'>  <NavigationComponent /> <div className='small-drawer'>
            <SmallNavDrawer />
            </div></div>
            
            </div>
           <div className='page-heading'>
               <h1 className='AboutUsHeader'>About <span style={{color: "#00A6A8", fontFamily: "Roboto"}}> Us</span></h1>
           </div>
                </div>
                <div className='page-mediacontainer'>
                <div className='media-querycontainer'>
                <div className='page-content'>
                
                <div className='buttons-component'>
                  <div className='fixed-buttons'>
                    <ButtonsComponent />
                    <div className='edit-modal'>
                      <SimpleModal />
                    </div>
                    </div>
                    <div className='social-media-icons-page'>
               <PageSocialMedia />
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
            </div>
            
            </div>
        )
    }
}

export default WhoWeAre;