import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Link } from "react-router-dom";



export function timeStampToString(timestamp) {
    const date = timestamp.toDate()

    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

const ArticleCard = (props) => {
        return (
            <Link to={
                {
                    pathname: 'article/' + props.data.id,
                    state: {article: props.data}
                }
            }>
                <div className = "CardBody">
                    
                    <CardTitle className="CardTitle">
                    <Link to={
                    {
                        pathname: 'article/' + props.data.id,
                        state: {article: props.data}
                    }
                }>{props.data.title}
                </Link>
                    </CardTitle>
                    <CardSubtitle className="CardSubtitle">
                        <div className="ArticleLabel">
                            {props.data.categoryLabel}
                        </div>
                        <div className="createDate">
                            {timeStampToString(props.data.createDate)}
                        </div>
                    </CardSubtitle>
                    
                    <div className='spacer'></div>
                    <div className= "CardSummary">
                        {props.data.summary}
                    </div>
                    
                </div>   
                <div className="ArticleCardImg">
                <CardImg
                top
                width="300px"
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>  
                <div className='spacer'></div>
            </Link>
            

        );
    }

export default ArticleCard;