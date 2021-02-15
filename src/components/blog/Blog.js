import React, { Component } from 'react';
import {Container} from 'reactstrap';

import NavigationComponent from '../navigation/NavigationBar';
import EscapeButton from '../buttons/escapebutton';
import HotlineButton from '../buttons/hotline';
import PageLogo from '../logo/pagelogo';
import ArticleCard from "./ArticleCard";
import BlogHeading from "./BlogHeading";
import firebaseConfig from '../../Config/firebase';
import * as firebase from 'firebase'

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
    .limit(8)
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
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            </div>
           
                </div>
                <div className='page-content'>
                <BlogHeading />
                  <Container>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <ArticleCard
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                  </Container>
                
                </div>
            </div>
    );
  }
}

export default Blog;