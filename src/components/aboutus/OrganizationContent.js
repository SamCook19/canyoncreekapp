import React from 'react';
import { CardTitle } from 'reactstrap';
import parse from 'html-react-parser';



const OrganizationContent = (props) => {
        return (
            <div className ="DatabasePage">

                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                </div> 
                  
                </div>
        );
    }

export default OrganizationContent;