import React from 'react';
import { CardImg } from 'reactstrap';
import parse from 'html-react-parser';
import VolunteerModal from './VolunteerModal';


const VolunteerContent = (props) => {
        return (
            <div className ="VolunteerDatabasePage">
                <div className = "VolunteerContent">
                    <div className= "TopVolunteerContent">
                        {parse(props.data.topContent)}
                    </div>
                    
                </div> 
                  
                <div className="VolunteerPageImg">
                <div className='signup-modal'>
                          <VolunteerModal />
                      </div>
                <CardImg
                top
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>  
                <div className= "BottomVolunteerContent">
                        {parse(props.data.bottomContent)}
                    </div>
                </div>
        );
    }

export default VolunteerContent;