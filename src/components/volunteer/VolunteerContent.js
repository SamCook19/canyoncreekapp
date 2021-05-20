import React from 'react';
import { CardImg } from 'reactstrap';
import parse from 'html-react-parser';
import VolunteerModal from './VolunteerModal';
import VolunteerSigninModal from './VolunteerSigninModal';
import PageSocialMedia from '../pagesocialmedia';


const VolunteerContent = (props) => {
        return (
            <div className ="VolunteerDatabasePage">
                <div className = "VolunteerContent">
                    <div className= "TopVolunteerContent">
                        {parse(props.data.topContent)}
                    </div>
                    
                </div> 
                  
                <div className="VolunteerPageImg">
                
                <CardImg
                top
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>  
                <div className='signup-modal'>
                          <a className='volunteer-link' href='https://canyoncreekservices.salsalabs.org/2021VolunteerSignupform'> Sign Up To Volunteer</a>
                      </div>
                      <div className = "VolunteerContent">
                <div className= "BottomVolunteerContent">
                        {parse(props.data.bottomContent)}
                        <div className='volunteer-signin'>
                          <VolunteerSigninModal />
                      </div>
                    </div>
                    
                      <div className='mobile-social-page-volunteer'>
               <PageSocialMedia />
                </div>
                    </div>
                </div>
        );
    }

export default VolunteerContent;