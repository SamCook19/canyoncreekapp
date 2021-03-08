import React from 'react';

import parse from 'html-react-parser';



const HelpForSurvivorsContent = (props) => {
        return (
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    
                </div>   
                
                </div>
        );
    }

export default HelpForSurvivorsContent;