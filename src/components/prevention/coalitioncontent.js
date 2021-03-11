import React from 'react';

import parse from 'html-react-parser';
import { CardImg, CardTitle } from 'reactstrap';


const CoalitionContent = (props) => {
        return (
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    <div className="PageTitle">
                        {parse(props.data.title)}
                    </div>
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    <div className='CoalitionImage'>
                    <CardImg
                        top
                    src={props.data.coalitionImage}
                    alt="Card Image"
                    className="CardImage"
                    />
                    </div>
                </div>   
                
                </div>
        );
    }

export default CoalitionContent;