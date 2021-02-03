import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody, Badge } from 'reactstrap';


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