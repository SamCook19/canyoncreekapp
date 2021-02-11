import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import parse from 'html-react-parser';
import {Container} from 'reactstrap';
import NavigationComponent from '../../navigation/NavigationBar';
import EscapeButton from '../../buttons/escapebutton';
import HotlineButton from '../../buttons/hotline';
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
                <div className='escape-button'> <EscapeButton /> </div>
                <div className='hotline-button'> <HotlineButton /></div>
            </div>
            <div className='right-side-header'>
            <div className='navbar'>  <NavigationComponent /> </div>
            </div>
                <Container>
                <div className='Article'>
                    <div className='ImageContainer'>
                        <img className='Image' 
                            src={this.state.article.featuredImage}
                            alt={this.state.article.title}
                        />
                        <div className='ArticleInfo'>
                            <h1 className='Title'>
                                {this.state.article.title}
                            </h1>
                            <div className='Date'>
                                {this.timeStampToString(this.state.article.lastModified)}
                            </div>
                        </div>
                    </div>
                    <div className='ArticleMain'>
                        {parse(this.state.article.content)}
                    </div>
                </div>
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