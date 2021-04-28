import React, { Component } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import HelpForSurvivorsContent from './HelpForSurvivorsContent';
import HelpBackground from './HelpBackground';
import SimpleModal from '../modals/help-modal';
import PageSocialMedia from "../pagesocialmedia";
import SmallNavDrawer from "../navigation/SmallNavDrawer";

const db = firebase.default.firestore()

class Help extends Component {
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
        .collection( 'HelpForSurvivors' )
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
               <h1 className='HelpForSurvivorsHeader'>Help For <span style={{color: "#662D91", fontFamily: "Roboto"}}> Survivors</span></h1>
           </div>
                </div>
                <div className='help-page-content'>
                <div className='help-buttons-component'>
                 
                    <ButtonsComponent />
                    <div className='edit-modal'>
                      <SimpleModal />
                    </div>
                    
                </div>
                <div className='social-media-icons-page'>
               <PageSocialMedia />
                </div>
               

                    <div className='help-info'> 
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <HelpForSurvivorsContent className='HelpForSurvivors'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                </div>
                <div className='help-background'> 
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <HelpBackground className='HelpBackground'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                </div>
                <div className='request-form'>
                <div className='request-form-heading'>
                  If you or someone you know are in need of assistance, please click on the link below. If you are in need of immediate assistance, please contact our 24 hour hotline at 435.233.5732.
                </div>
                <div className='request-form-container'>
                      <a className='request-form-link' href='https://apricot.socialsolutions.com/auth/autologin/org_id/1698/hash/fe63cfb2b7190a8b89cde77419b8d89c5af6ee4e'>
                        <div className='clickhere'>Click Here to Get Help</div>
                      </a>
                </div>
                </div>
                <div className='mobile-social-page-help'>
                    <PageSocialMedia />
                      </div>
            </div>
            </div>
        )
    }
}

export default Help;