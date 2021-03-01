import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';



const OrganizationContent = (props) => {
        return (
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                        {props.data.content}
                    </div>
                </div>     
                </div>
        );
    }

export default OrganizationContent;