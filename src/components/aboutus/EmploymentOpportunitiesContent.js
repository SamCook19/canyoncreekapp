import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';


const EmploymentOpportunitiesContent = (props) => {
        return (
            <div className ="DatabasePage__Employment">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {parse(props.data.title)}
                    </CardTitle>
                    
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    
                </div>   
                <div className="PageImgApplication">
                <div className="EmploymentOppApplication">
                
                <a className='ApplyButton'  href='https://www.indeed.com/q-Canyon-Creek-Services-jobs.html'>
                </a>
                <a className='ApplyLink' href='https://www.indeed.com/q-Canyon-Creek-Services-jobs.html'> Apply Here!
                </a>
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