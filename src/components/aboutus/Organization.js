import React, { Component, useState } from 'react';
import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ButtonsComponent from '../buttons/buttons-component';
import * as firebase from 'firebase';
import OrganizationContent from './OrganizationContent';

const db = firebase.default.firestore()

class Organization extends Component {
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
        .collection( 'OrganizationalLeadership' )
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
               <h1 className='AboutUsHeader'>About <span style={{color: "#00A6A8"}}><h2> Us</h2></span></h1>
           </div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                </div>

                    <div className='page-info'> 
                    <div className='whowearespacer'></div>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <OrganizationContent className='organization'
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

export default Organization;