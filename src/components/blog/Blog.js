import React, { Component } from 'react';
import {Container} from 'reactstrap';

import NavigationComponent from '../navigation/NavigationBar';
import PageLogo from '../logo/pagelogo';
import ArticleCard from "./ArticleCard";
import * as firebase from 'firebase';
import ButtonsComponentBlog from '../buttons/buttons-component-blog';


const db = firebase.default.firestore()

class Blog extends Component {
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
    .collection( 'Articles' )
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
               <h1><span style={{color: "#F16022", fontFamily: "Roboto"}}>Blog</span></h1>
               
              </div>
           
                </div>
                
                <div className='blog-page-content'>
                <ButtonsComponentBlog />
                
                  <div className='article-container'>
                    {
                      this.state.isLoaded ?
                        this.state.articles.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                        ).map((article, index) => {
                          return(
                          <ArticleCard className='article-card'
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
    );
  }
}


export default Blog;