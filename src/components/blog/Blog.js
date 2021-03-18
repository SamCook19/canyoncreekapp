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
    .orderBy("createDate", "desc")
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
            <div className='header' style = {{
              marginBottom: "15px"
            }}>
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
                
                <div className='page-content'>
                <ButtonsComponentBlog />
                <div className='spiral-article-container'>
                <div className='spiral-notebook'>
                  <img src="/assets/images/SpiralNotebook.png"></img>
                </div>
                  <div className='article-container'>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
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
            </div>
    );
  }
}


export default Blog;