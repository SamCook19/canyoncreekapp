import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';
import { Link } from "react-router-dom"

export function timeStampToString(ts) {
    const date = new Date(ts*1000)
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

const ArticleCard = (props) => {
        return (
            <Card className = "ArticleCard">
                <Link to={'article/' + props.data.id}>
                <div className="ArticleCardImg">
                <CardImg
                top
                width="100px"
                src="https://placeimg.com/100/100/any"
                alt="Card Image"
                className="CardImage"
                />
                </div>
                </Link>
                
                    
                <CardBody className = "CardBody">
                    <CardTitle className="CardTitle">
                    <Link to={'article/' + props.data.id}>
                        {props.data.title}
                        </Link>
                    </CardTitle>
                    <CardSubtitle className="CardSubtitle">
                        <Badge className="ArticleLabel">
                            {props.data.categoryLabel}
                        </Badge>
                        <Badge className="createDate">
                            {timeStampToString(props.data.createDate)}
                        </Badge>
                    </CardSubtitle>
                </CardBody>
            </Card>

        );
    }

export default ArticleCard;