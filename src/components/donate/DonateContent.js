import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';


const DonateContent = (props) => {
        return (
            <div className ="DatabasePage__Donate">
                <div className="DonateRightColumn">
                    <div className= "DonateTopContent">
                    {parse(props.data.contentTop)}
                    </div>
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className= "DonateBottomContent">
                    {parse(props.data.contentBottom)}
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
                </div>  
        );
    }

export default DonateContent;