import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';


const ArticleCard = (props) => {
        return (
            <Card className = "ArticleCard">
                <CardImg
                top
                width="100%"
                src="https://placeimg.com/325/180/any"
                alt="Card Image"
                className="CardImage"
                />
                    
                <CardBody className = "CardBody">
                    <CardTitle className="CardTitle">
                        Test Title
                    </CardTitle>
                    <CardSubtitle className="CardSubtitle">
                        <Badge className="ArticleLabel">
                            topic
                        </Badge>
                    </CardSubtitle>
                </CardBody>
            </Card>

        );
    }

export default ArticleCard;