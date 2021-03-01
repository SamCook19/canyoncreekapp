import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';



const AnnualReportContent = (props) => {
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
                <div className="AnnualReportLink">
                    {props.data.annualreport}
                </div>
                </div>  
                </div>
        );
    }

export default AnnualReportContent;