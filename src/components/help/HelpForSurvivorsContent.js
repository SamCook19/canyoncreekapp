import React from 'react';

import parse from 'html-react-parser';

const HelpForSurvivorsContent = (props) => {
        return (
            
                
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    <div className="help-link">
                <a href="https://apricot.socialsolutions.com/auth/autologin/org_id/1698/hash/fe63cfb2b7190a8b89cde77419b8d89c5af6ee4e">
                Click Here for Help
                </a>
              </div>
                </div>   
                
                </div>
                
                
        );
    }

export default HelpForSurvivorsContent;