import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';



const HelpBackground = (props) => {
    return (
        <div>
            <div className="PageImg">
                <CardImg
                top
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>  
        </div>
    );
}

export default HelpBackground;