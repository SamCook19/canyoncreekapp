import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';

export function timeStampToString(ts) {
    const date = new Date(ts*1000)
    return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

const ArticleCard = (props) => {
        return (
            <Card className = "ArticleCard">
                <div className="ArticleCardImg">
                <CardImg
                top
                width="100px"
                src="https://placeimg.com/100/100/any"
                alt="Card Image"
                className="CardImage"
                />
                </div>
                    
                <CardBody className = "CardBody">
                    <CardTitle className="CardTitle">
                        {props.data.title}
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