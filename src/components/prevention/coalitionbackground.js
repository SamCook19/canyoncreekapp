import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';



const CoalitionBackground = (props) => {
    return (
        <div className="PreventionBackgroundStatsImg">
            <div className="PreventionPageImg">
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

export default CoalitionBackground;