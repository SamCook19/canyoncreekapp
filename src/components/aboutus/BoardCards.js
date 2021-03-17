import React, { Component } from 'react';
import { render } from 'react-dom';
import { CardImg } from 'reactstrap';
import SimpleModal from './OrganizationEdit/BoardCardModal';
import * as firebase from 'firebase';

const db = firebase.default.firestore()

class BoardCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className = "LeadershipCardContainer">
                <div className="LeadershipCardImg">
                <CardImg
                top
                width="300px"
                src={this.props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                <div className = "LeadershipCardBody">
                    
                    <div className="LeadershipTeamName">
                    {this.props.data.boardname}
                    </div>
                    <div className="LeadershipCardSubtitle">
                        <div className="ArticleLabel">
                            {this.props.data.boardSubtitle}
                        </div>
                    </div>
                    <div className="BoardCardEdit">
                   <SimpleModal data={this.props.data} />
                    </div>
                    
                    <div className='spacer'></div>
                    
                </div>   
                  
                <div className='spacer'></div>
                </div>
            
            

        );
    }
}

export default BoardCard;