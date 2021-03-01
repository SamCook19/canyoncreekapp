import React from 'react';
import { Card, CardImg, CardSubtitle, } from 'reactstrap';




const LeadershipCard = (props) => {
        return (
            <div className = "LeadershipCardContainer">
                <div className="LeadershipCardImg">
                <CardImg
                top
                width="300px"
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                <div className = "CardBody">
                    
                    <div className="LeadershipTeamName">
                    {props.data.leadershipteamname}
                    </div>
                    <CardSubtitle className="LeadershipCardSubtitle">
                        <div className="ArticleLabel">
                            {props.data.leadershipSubtitle}
                        </div>
                    </CardSubtitle>
                    
                    <div className='spacer'></div>
                    
                </div>   
                  
                <div className='spacer'></div>
                </div>
            
            

        );
    }

export default LeadershipCard;