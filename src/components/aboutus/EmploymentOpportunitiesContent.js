import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';



const EmploymentOpportunitiesContent = (props) => {
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
                <div className="PageImg">
                <div className="EmploymentOppApplication">
                    {props.data.employmentapplication}
                </div>
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

export default EmploymentOpportunitiesContent;