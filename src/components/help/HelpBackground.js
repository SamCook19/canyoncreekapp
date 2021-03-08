import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';



const HelpBackground = (props) => {
    return (
        <div>
            <div className="PageImg">
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

export default HelpBackground;