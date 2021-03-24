import React from 'react';

import parse from 'html-react-parser';
import MediaQuery from 'react-responsive'



const HelpForSurvivorsContent = (props) => {
        return (
            <div className='MediaContainer-help'>
                <MediaQuery minWidth={1501}>
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    
                </div>   
                
                </div>
                </MediaQuery>
                <MediaQuery maxWidth ={1500} minWidth={900}>
                <div className ="DatabasePage">
                <div className = "PageTitleContent-medium">
                    <div className= "PageContent-medium">
                    {parse(props.data.content)}
                    </div>
                    
                </div>   
                
                </div>
                </MediaQuery>
                </div>
        );
    }

export default HelpForSurvivorsContent;