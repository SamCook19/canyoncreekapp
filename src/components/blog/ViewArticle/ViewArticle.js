import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import parse from 'html-react-parser';
import {Container} from 'reactstrap';
import NavigationComponent from '../../navigation/NavigationBar';
import ButtonsComponent from '../../buttons/buttons-component';
import PageLogo from '../../logo/pagelogo';
import firebaseConfig from '../../../Config/firebase';
import * as firebase from 'firebase'

const db = firebase.default.firestore();

class ViewArticle extends Component {
    constructor(props) {
        super(props);
        this.state={
            article: {},
            isLoaded: false
        }

        console.log(this.props)
    }

    componentDidMount() {
        if(this.props.location.state !== 'undefined') {
            if(this.props.location.state.hasOwnProperty('article')){
                this.setState({
                    article: this.props.location.state.article
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
            }
        }else{
            this.getArticleByID(this.props.match.param.id)
        }
    }

    getArticleByID = (aid) => {
        db.collection('Articles')
        .doc(aid)
        .get()
        .then(doc => {
            if(doc.exists){
                this.setState({
                    article: doc.data()
                }, () => {
                    this.setState({
                        isLoaded: true
                    })
                })
            } else {
                this.props.history.push({pathname:'/'})
            }
        })
    }

    timeStampToString = () => {
        const date = new Date()
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    }

    render() {
        
        if(this.state.isLoaded) {
            return (
                <div className='page-container'>
            <div className='header'>
                <div className='left-side-header'>
                <div className='page-logo'> <PageLogo /> </div>
                
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            </div>
           <div className='spacer'></div>
                </div>
                <div className='page-content'>
                <div className='buttons-component'>
                    <ButtonsComponent />
                </div>
                
                <Container className='article-view-container'>
                <div className='Article'>
                <div className='ArticleTitle'>
                            <h1 className='Title'>
                                {this.state.article.title}
                            </h1>
                            </div>
                            <div className='ArticleDate'>
                                {this.timeStampToString(this.state.article.createDate)}
                            </div>
                    
                        </div>
                        <div className='blog-spacer'></div>
                    <div className='ArticleMain'>
                        <div className='ArticleContent'>
                            {parse(this.state.article.content)}
                            </div>
                    </div>
                    <div className='blog-spacer'></div>
                    <div className='ImageContainer'>
                        <img className='Image' 
                            src={this.state.article.featuredImage}
                            alt={this.state.article.title}
                        /></div>
                </Container>
                </div>
                </div>
            )
        }else{
        return (
            <div>
                loading...
            </div>
        );
        }
    }
}

export default withRouter(ViewArticle);