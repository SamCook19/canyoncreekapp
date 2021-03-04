import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';


const FinancialsContent = (props) => {
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
                   
                <div className="PageImg">
                <div className = "FinancialsYearHeading">
                    {props.data.financialyear}    
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

export default FinancialsContent;