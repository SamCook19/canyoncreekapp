import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';
import { Picture } from 'react-responsive-picture';


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
                    <Picture src={props.data.featuredImage}
                    sizes="(min-width: 36em) 33.3vw, 100vw"
                />
                </div>
                </div>  
        );
    }

export default DonateContent;