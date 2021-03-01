import React, { Component, useState } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import OrganizationContent from './OrganizationContent';
import LeadershipCard from './LeadershipCard';

const db = firebase.default.firestore()

class Organization extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoaded: false,
            articles: [],
            cards: []

        }
      }
    
      componentDidMount() {
        this.getMyCards()
        this.getMyDescription()
      }
    
      getMyCards = () => {
        db
        .collection( 'OrganizationalLeadership' )
        .get()
        .then(docs => {
          if(!docs.empty){
            let allCards = []
            docs.forEach(function (doc) {
              const cards = {
                id: doc.id,
                ...doc.data()
              }
    
              allCards.push(cards)
            })
    
            this.setState({
              cards: allCards
            }, () => {
              this.setState ({
                isLoaded: true
              })
            })
          }
        })
      }

      getMyDescription = () => {
        db
        .collection( 'OrganizationalLeadershipDescription' )
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
               <h1 className='AboutUsHeader'>About <span style={{color: "#00A6A8", fontFamily: 'Roboto'}} > Us</span></h1>
           </div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                </div>

                    <div className='page-info'> 
                    <div className='organizationalspacer'></div>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article) => {
                          return(
                              <div className='organizationalleadership'>
                          <OrganizationContent className='organization'
                            key={article.id}
                            data={article}
                          />
                          </div>
                          )
                        })
                        : '' 
                      }
                      {
                        this.state.isLoaded ?
                        this.state.cards.map((cards) => {
                          return(
                          <div className='organizationcards'>
                          <LeadershipCard className='leadership'  
                          key={cards.id}
                          data={cards}/>
                          </div>
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

export default Organization;