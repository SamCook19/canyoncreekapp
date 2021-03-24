import React from 'react';
import { CardImg } from 'reactstrap';
import LeadershipCardModal from './OrganizationEdit/LeadershipCardModal';

const LeadershipCard = (props) => {
        return (
            <div className = "LeadershipCardContainer">
                <div className="LeadershipCardImg">
                <CardImg
                top
                style={{width: 150, height: 150, borderRadius: 150/ 2}}
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                style={{width:150, height: 150, borderRadius: 150/ 2}}
                />
                </div>
                <div className = "LeadershipCardBody">
                    
                    <div className="LeadershipTeamName">
                    {props.data.leadershipteamname}
                    </div>
                    <div className="LeadershipCardSubtitle">
                        <div className="ArticleLabel">
                            {props.data.leadershipSubtitle}
                        </div>
                    </div>

                    <div className="LeadershipCardEdit">
                   <LeadershipCardModal data={props.data} />
                    </div>
                    
                    
                </div>   
                  
                <div className='spacer'></div>
                </div>
            
            

        );
    }

export default LeadershipCard;