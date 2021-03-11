import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';



const PreventionBackground = (props) => {
    return (
        <div className='PreventionBackgroundStatsImg'>
            <div className="PreventionPageImg">
                <CardImg
                top
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
            <div className='PreventionStats'>
            <div className='TopStatBackground'>
            {parse(props.data.topStatistic)}  
            </div>  
            <div className='BottomStatBackground'>
            {parse(props.data.bottomStatistic)}  
            </div>
            </div>
            
        </div>
    );
}

export default PreventionBackground;