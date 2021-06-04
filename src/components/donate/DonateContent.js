import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';
import { Picture } from 'react-responsive-picture';
import PageSocialMedia from '../pagesocialmedia'


const DonateContent = (props) => {
        return (
            <div className ="DatabasePage__Donate">
                <div className="DonateRightColumn">
                <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className= "DonateTopContent">
                    {parse(props.data.contentTop)}
                    </div>
                    
                    
                    <div className= "DonateBottomContent">
                    {parse(props.data.contentBottom)}
                    </div>
                    
                </div>   
                <div className='DonateLeftColumn'>
                    <Picture src={props.data.featuredImage}
                    />
                </div>
                <div className='mobile-social-page'>
                    <PageSocialMedia />
                </div>

                </div>  
        );
    }

export default DonateContent;