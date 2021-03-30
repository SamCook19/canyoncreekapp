import React from 'react';
import { CardImg } from 'reactstrap';
import LeadershipCardModal from './OrganizationEdit/LeadershipCardModal';
import parse from 'html-react-parser';
import MediaQuery from 'react-responsive';

const LeadershipCard = (props) => {
        return (
            <div className = "LeadershipCardContainer">
                <div className='LeadershipMediaContainer'>
                    <MediaQuery minWidth={600}>
                <div className="LeadershipCardImg">
                <CardImg
                top
                style={{width: 150, height: 150, borderRadius: 150/ 2}}
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                
                />
                </div>
                    </MediaQuery>
                    </div>
                <div className='LeadershipMediaContainer'>
                    <MediaQuery maxWidth={600}>
                <div className="LeadershipCardImg">
                <CardImg
                top
                style={{width: 90, height: 90, borderRadius: 90/ 2}}
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                
                />
                </div>
                    </MediaQuery>
                    </div>
                <div className = "LeadershipCardBody">
                    
                    <div className="LeadershipTeamName">
                    {parse(props.data.leadershipteamname)}
                    </div>
                    <div className="LeadershipCardSubtitle">
                        <div className="ArticleLabel">
                            {parse(props.data.leadershipSubtitle)}
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