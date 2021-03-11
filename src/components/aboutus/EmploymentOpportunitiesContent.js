import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';


const EmploymentOpportunitiesContent = (props) => {
        return (
            <div className ="DatabasePage__Employment">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    
                </div>   
                <div className="PageImgApplication">
                <div className="EmploymentOppApplication">
                    <div className='ApplyButton'>
                <a className='employmentlink' href='https://www.indeed.com/q-Canyon-Creek-Services-jobs.html'>
                <img  alt="ccs twitter" src="/assets/images/ApplyButton.png"/>
                </a>
                </div>
                </div>
                <div className='PageImg'>
                <CardImg
                top
                width="300px"
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                </div>  
                </div>
        );
    }

export default EmploymentOpportunitiesContent;