import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import ArticleDelete from './ArticleDelete';
import * as firebase from 'firebase';

const db = firebase.default.firestore()

export function timeStampToString(timestamp) {
    const date = timestamp.toDate()

    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

// const { currentUser } = useAuth();

class ArticleCard extends Component {

    constructor(props) {
        super(props);
        
    }

     
    render () {


        return ( 
            <div className="ArticleContainer">
            <Link to={
                {
                    pathname: 'article/' + this.props.data.id,
                    state: {article: this.props.data}
                }
            }>
                <div className = "CardBody">
                    
                    <CardTitle className="CardTitle">
                    <Link to={
                    {
                        pathname: 'article/' + this.props.data.id,
                        state: {article: this.props.data}
                    }
                }>{this.props.data.title}
                </Link>
                    </CardTitle>
                    <CardSubtitle className="CardSubtitle">
                        <div className="ArticleLabel">
                            {this.props.data.categoryLabel}
                        </div>
                        <div className="createDate">
                            {timeStampToString(this.props.data.createDate)}
                        </div>
                    </CardSubtitle>
                    
                    <div className='blog-spacer'></div>
                    <div className= "CardSummary">
                        {this.props.data.summary}
                    </div>
                    
                </div>   
                <div className="ArticleCardImg">
                <CardImg
                top
                width="300px"
                src={this.props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>  
                <div className='spacer'></div>

            </Link>
            
            <div className='blog-article-delete'>
            <ArticleDelete data={this.props.data} />
            </div>
            
            </div>
        
            
            
        );}
    }

export default ArticleCard;