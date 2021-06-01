import React, { Component } from 'react';
import { CardImg } from 'reactstrap';
import SimpleModal from './OrganizationEdit/BoardCardModal';
import * as firebase from 'firebase';
import parse from 'html-react-parser';
import MediaQuery from 'react-responsive';

const db = firebase.default.firestore()

class BoardCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className = "BoardCardContainer">
               <div className='BoardImgMediaContainer'>
                    <MediaQuery minWidth={600}>
                <div className="BoardCardImg">
                <CardImg
                top
                style={{width: 150, height: 150, borderRadius: 150/ 2}}
                src={this.props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                    </MediaQuery>
                </div>
                
                <div className='BoardImgMediaContainer'>
                    <MediaQuery maxWidth={600}>
                    <div className="BoardCardImg">
                    <CardImg
                    top
                    style={{width: 90, height: 90, borderRadius: 90/ 2}}
                    src={this.props.data.featuredImage}
                    alt="Card Image"
                    className="CardImage"
                    />
                </div>
                </MediaQuery>
                </div>
                <div className = "BoardCardBody">
                    
                    <div className="BoardTeamName">
                    {parse(this.props.data.boardname)}
                    </div>
                    <div className="BoardCardSubtitle">
                        <div className="ArticleLabel">
                            {parse(this.props.data.boardSubtitle)}
                        </div>
                    </div>
                    <div className="BoardCardEdit">
                   <SimpleModal data={this.props.data} />
                    </div>
                    
                    <div className='spacer'></div>
                    
                </div>   
                  
                
                </div>
            
            

        );
    }
}

export default BoardCard;