import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import DonateContent from './DonateContent';
import SimpleModal from '../modals/donate-modal';
import PageSocialMedia from '../pagesocialmedia';
import SmallNavDrawer from '../navigation/SmallNavDrawer';

const db = firebase.default.firestore()

class Donate extends Component {
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
        .collection( 'Donate' )
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
               <h1 className='DonateHeader'><span style={{color: "#00A6A8", fontFamily: "Roboto"}}> Donate </span></h1>
           </div>
                </div>
                <div className='donate-page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                    <div className='edit-modal'>
                      <SimpleModal />
                    </div>
                    <div className='social-media-icons-page'>
               <PageSocialMedia />
                </div>
                </div>
                
                    
                    <div className='DonateContainer'> 
                    
                    <div className='DonateSpacer'></div>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <DonateContent className='DonateContent'
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

export default Donate