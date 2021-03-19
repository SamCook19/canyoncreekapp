import React from 'react';
import { CardImg } from 'reactstrap';
import parse from 'html-react-parser';


const VolunteerContent = (props) => {
        return (
            <div className ="DatabasePage">
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
                <div className= "TopVolunteerContent">
                        {parse(props.data.bottomContent)}
                    </div>
                </div>
        );
    }

export default VolunteerContent;