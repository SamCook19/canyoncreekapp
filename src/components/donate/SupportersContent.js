import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';
import PageSocialMedia from '../pagesocialmedia';

const SupportersContent = (props) => {
        return (
            <div className ="DatabasePage__Donate">
                <div className="DonateRightColumn">
                
                <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    
                    <div className= "DonateContent">
                    {parse(props.data.content)}
                    </div>    
                </div>   
                <div className='DonateLeftColumn'>
                <CardImg
                top
                width="300px"
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                <div className='mobile-social-page'>
                    <PageSocialMedia />
                </div>
                </div>  
        );
    }

export default SupportersContent;