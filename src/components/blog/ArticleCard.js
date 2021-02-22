import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import DeleteButton from "../buttons/deletebutton";


export function timeStampToString() {
    const date = new Date()
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

const ArticleCard = (props) => {

    

        return (
            <Card className = "ArticleCard">
                <Link to={
                    {
                        pathname: 'article/' + props.data.id,
                        state: {article: props.data}
                    }
                }>
                <div className="ArticleCardImg">
                <CardImg
                top
                width="100px"
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                </Link>
                
                    
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
                            {timeStampToString(props.data.date.id)}
                        </div>
                    </CardSubtitle>
                    {/* <DeleteButton /> */}
                </div>
            </Card>

        );
    }

export default ArticleCard;